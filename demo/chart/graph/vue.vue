<template>
  <div>
    <v-graph :width="graph.width" :height="graph.height" :fitView="graph.fitView" :fitViewPadding="graph.fitViewPadding"
      :animate="graph.animate" :type="graph.type"
      :data="graph.data"
      :on-click="graph.onClick"
    >
      <v-zoom :min="zoom.min" :max="zoom.max"></v-zoom>
    </v-graph>
  </div>
</template>

<script>

const data = {
  roots: [{
    label: 'root',
    id:1,
    children: [{
      label: 'child1',
      children: [
        {
          label: 'child\n1.1'
        }
      ]
    }, {
      label: 'child2'
    }]
  }]
};

const graph = {
  width: 500,
  height: 500,
  fitView: 'cc',
  fitViewPadding: true,
  animate: true,
  type: 'graph',
  data,
  onClick: function(ev, graph) {
    console.log('click', ev, graph);
  }
};
const zoom = {
  min: 1,
  max: 10,
};


export default {
  data() {
    return {
      graph,
      zoom,
    };
  }
};
</script>
