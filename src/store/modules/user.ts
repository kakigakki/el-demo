import { getToken, removeToken, setToken } from "@/utils/auth";
import { ActionTree, GetterTree, Module, MutationTree } from "vuex";
import { IUserState, IRootState } from "#/store.interface";
import { IloginModel } from "#/user.interface";
import { getUerInfo, login } from "@/api/account.api";

const getDefaultState = (): IUserState => {
  return {
    email: "",
    id: "",
    name: "",
    token: getToken(),
  };
};

//まずはcookieから
const state: IUserState = getDefaultState();

const getters: GetterTree<IUserState, IRootState> = {
  email: (state: IUserState) => state.email,
  name: (state: IUserState) => state.name,
  id: (state: IUserState) => state.id,
  token: (state: IUserState) => state.token,
};

const mutations: MutationTree<IUserState> = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState());
  },
  SET_EMAIL: (state, email) => {
    state.email = email;
  },
  SET_NAME: (state, name) => {
    state.name = name;
  },
  SET_ID: (state, id) => {
    state.id = id;
  },
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
};

const actions: ActionTree<IUserState, IRootState> = {
  async login({ commit }, userInfo: IloginModel) {
    try {
      console.log(1);
      const res = await login(userInfo);
      const { data } = res;
      const token = data.result.accessToken;
      console.log(res);
      console.log(token);
      commit("SET_TOKEN", token);
      //cookie設定
      setToken(token);
    } catch (error) {
      return Promise.reject(error);
    }
  },
  async getInfo({ commit }, token: string) {
    try {
      const res = await getUerInfo(token);
      const { data } = res;
      commit("SET_NAME", data.name);
      commit("SET_EMAIL", data.email);
      commit("SET_ID", data.id);
    } catch (error) {
      console.log(error);
    }
  },
  resetToken({ commit }) {
    removeToken();
    commit("RESET_STATE");
  },
};

export const userModule: Module<IUserState, IRootState> = {
  state,
  getters,
  mutations,
  actions,
};
