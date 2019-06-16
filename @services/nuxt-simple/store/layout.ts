import { ActionTree, MutationTree, GetterTree } from 'vuex'
import { NuxtAxiosInstance } from '@nuxtjs/axios'
export interface GridItem {
  i: string
  x: number
  y: number
  w: number
  h: number
}

export interface Grid {
  name: string
  margin?: [number, number]
  rowHeight?: number
  isDragable?: boolean
  breakpoint?: string
  breakpoints?: { [key: string]: string }
  items: { [key: string]: GridItem[] }
}

export interface LayoutState {
  layouts: Grid[]
}

export const name = 'layout'

export const state = (): LayoutState => ({
  layouts: []
})

export const mutations: MutationTree<LayoutState> = {
  init(state, layouts: Grid[] = []) {
    state.layouts = layouts
  },
  add(state, layout: Grid) {
    state.layouts.push(layout)
  },
  edit(state, layout: Grid) {
    state.layouts = state.layouts.map(l =>
      l.name === layout.name ? layout : l
    )
  },
  remove(state, layout: Grid) {
    state.layouts = state.layouts.filter(l => l.name !== layout.name)
  }
}

export const actions: ActionTree<LayoutState, { $axios: NuxtAxiosInstance }> = {
  async createLayout({ commit }, layout: Grid) {
    try {
      const newLayout = await this.$axios.$get('/api/layout/create', {
        params: layout
      })

      commit('add', newLayout)
    } catch (error) {
      console.log(error)
    }
  },
  async nuxtServerInit({ commit }) {
    const layouts = await this.$axios.$get('/api/layout/find')
    commit('init', layouts)
  }
}

export const getters: GetterTree<LayoutState, string> = {
  getLayoutByName: state => (name: string) => {
    return state.layouts.find(l => l.name === name)
  },
  length: state => state.layouts.length
}
