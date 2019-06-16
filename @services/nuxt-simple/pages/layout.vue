<template>
  <no-ssr>
    <div>
      <h1>{{$store.state.token}}</h1>
      <button @click="createLayout({ name })">Create New Layout</button>
      <input v-model="name" placeholder="Layout name">
      <span>{{length}}</span>
      <grid-layout :name="name"/>
    </div>
  </no-ssr>
</template>

<script lang="ts">
import {
  Vue,
  Component,
  Prop,
  State,
  namespace,
  Model
} from 'nuxt-property-decorator'
import { Store } from 'vuex'
import { name, Grid, mutations } from '../store/layout'

const Binding = namespace(name)

@Component({
  components: {
    GridLayout: () => import('../components/GridLayout.vue')
  }
})
export default class LayoutPage extends Vue {
  @Model('change', { type: String }) readonly name!: string
  @Binding.Action createLayout!: (layout: Grid) => void
  @Binding.Getter length!: number
}
</script>
