import { MutationTree, ActionTree } from 'vuex'

export interface IAppState {
  token?: string
}

export const state = (): IAppState => ({})

export const mutations: MutationTree<IAppState> = {
  setToken: (state, token) => (state.token = token)
}

export const actions: ActionTree<IAppState, any> = {
  async nuxtServerInit({ commit }) {
    commit('setToken', 'Duc')
  }
}
