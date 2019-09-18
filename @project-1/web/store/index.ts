import { MutationTree, ActionTree } from 'vuex'

export interface AppState {
  token?: string
}

export const state = (): AppState => ({})

export const mutations: MutationTree<AppState> = {
  setToken: (state, token) => (state.token = token)
}

export const actions: ActionTree<AppState, any> = {
  async nuxtServerInit({ commit }) {
    commit('setToken', 'Duc')
  }
}
