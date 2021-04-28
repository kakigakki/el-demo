import { createStore, Store, useStore as baseUseStore } from "vuex";
import { IRootState } from "#/store.interface";
import { userModule } from "./modules/user";
import { InjectionKey } from "vue";

export const key: InjectionKey<Store<IRootState>> = Symbol();

export const store = createStore<IRootState>({
  modules: {
    userModule,
  },
});

export function useStore() {
  return baseUseStore(key);
}
