import { MutationTree, ActionTree } from 'vuex'

export interface ICoffee {
  name: string
  description?: string
}

export interface ICoffeeState {
  rows: ICoffee[]
  total?: number
  page?: number
  totalPages?: number
}

export const state = (): ICoffeeState => ({
  rows: []
})

export const mutations: MutationTree<ICoffeeState> = {
  setRows: (currentState, payload: ICoffeeState) => {
    currentState = payload
  }
}

export const actions: ActionTree<ICoffeeState, any> = {
  async getCoffees({ commit }) {
    const response = await this.$axios.$get<ICoffeeState>('/coffees/list')
    commit('setRows', response)
  }
}
