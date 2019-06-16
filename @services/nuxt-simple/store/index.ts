import { MutationTree, ActionTree, GetterTree, ActionContext } from 'vuex'

export interface AppState {
  token?: string
}

export const state = (): AppState => ({})

export const mutations: MutationTree<AppState> = {
  init: (state, token: string) => (state.token = token),
  setToken: (state, token) => (state.token = token)
}

export const actions: ActionTree<AppState, any> = {
  async nuxtServerInit({ dispatch, commit }, context) {
    const token = context.req.headers['x-access-token']
    commit('init', token)
    await dispatch('layout/nuxtServerInit', context)
  }
}
