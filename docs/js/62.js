(window.daoStyleJsonpFunction=window.daoStyleJsonpFunction||[]).push([[62],{230:function(n,e){n.exports='<template>\n  <div class="demo5">\n    <dao-switch\n      :option="{ on: \'是\', off: \'否\' }"\n      :with-notice="true"\n      @change="onChange"\n      v-model="isChecked">\n    </dao-switch>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: \'Demo5\',\n  data() {\n    return {\n      isChecked: false,\n    };\n  },\n  methods: {\n    onChange(data) {\n      this.$daoAlert(\'daostyle\', `changed:${data}`).show();\n    },\n  },\n};\n<\/script>'}}]);