<template>
  <div>
    <h1>{{name}}</h1>
    <h2>{{grid}}</h2>
    <VueResponsiveGridLayout
      v-if="grid"
      @layout-update="onLayoutUpdate"
      @layout-change="onLayoutChange"
      @layout-init="onLayoutInit"
      @width-change="onWidthChange"
      @breakpoint-change="onBreakpointChange"
      :layouts="grid.items"
      :compact-type="'vertical'"
      :isDraggable="grid.isDragable"
      :isResizable="grid.isResizable"
      :rowHeight="grid.rowHeight"
      :cols="grid.cols"
      ref="layout"
    >
      <template slot-scope="props">
        <VueGridItem
          v-for="item in props.layout"
          :key="item.i"
          :i="item.i"
          :w.sync="item.w"
          :h.sync="item.h"
          :x="item.x"
          :y="item.y"
          :immobile.sync="item.immobile"
          :containerWidth="props.containerWidth"
          :rowHeight="props.rowHeight"
          :isDraggable="true"
          :isResizable="true"
          :className="'grid-item'"
          :cols="props.cols"
          :heightFromChildren="false"
          :maxRows="props.maxRows"
        >
          <div>Test</div>
        </VueGridItem>
      </template>
    </VueResponsiveGridLayout>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Prop, namespace } from 'nuxt-property-decorator'
import {
  VueResponsiveGridLayout,
  VueGridLayout,
  VueGridItem
} from 'vue-responsive-grid-layout'
import { name, Grid } from '../store/layout'

const Binding = namespace(name)

@Component({
  components: {
    VueGridItem,
    VueGridLayout,
    VueResponsiveGridLayout
  }
})
export default class GridLayout extends Vue {
  @Prop({ type: String, required: true }) name!: string
  @Binding.Getter getLayoutByName!: (name: string) => Grid

  get grid() {
    return this.getLayoutByName(this.name)
  }

  public onLayoutUpdate() {}

  public onLayoutChange() {}

  public onLayoutInit() {}

  public onBreakpointChange() {}

  public onWidthChange() {}
}
</script>

<style>
.resizable-handle {
  position: absolute;
  width: 20px;
  height: 20px;
  bottom: 0;
  right: 0px;
  text-align: right;
}
.resizable-handle::after {
  content: '';
  position: absolute;
  right: 3px;
  bottom: 3px;
  width: 5px;
  height: 5px;
  border-right: 2px solid #000000;
  border-bottom: 2px solid #000000;
}
.vue-grid-draggable-container {
  width: 100%;
  height: 100%;
}
.grid-item {
  border: 1px dotted #000;
}
.vue-grid-placeholder {
  background: #ddd;
  border: 2px dashed #aaa;
}

.vue-grid-layout {
  width: 100%;
  display: block;
  position: relative;
  height: 100%;
}
</style>

