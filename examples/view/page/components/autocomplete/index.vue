<template>
  <div class="container">
    <section>
        <h1>基础版</h1>
        <span>value: {{model1}}</span>
        <dao-autocomplete :options="options1" v-model="model1" @change="onChange" placeholder="请输入文本"></dao-autocomplete>
    </section>

    <section>
      <h1>基础版（text/value）形式</h1>
      <span>value: {{model2}}</span>
      <dao-autocomplete :options="options2" v-model="model2" placeholder="请输入文本"></dao-autocomplete>
    </section>

    <section>
      <h1>基础版（text/value）形式、异步数据</h1>
      <span>value: {{model3}}</span>
      <dao-autocomplete :options="options3" v-model="model3" placeholder="请输入文本"></dao-autocomplete>
      <br />
      <span>AutoComplete 的选项列表不会撑开其他元素</span>
      <dao-autocomplete :options="options3" v-model="model3" placeholder="请输入文本"></dao-autocomplete>
    </section>

    <section>
      <h1>基础版、选项数据为空，model 被赋值</h1>
      <span>value: {{model4}}</span>
      <dao-autocomplete :options="options4" v-model="model4" placeholder="请输入文本"></dao-autocomplete>
    </section>

    <section>
      <h1>基础版、带错误验证</h1>
      <span>value: {{model5}}</span>
      <dao-autocomplete :options="options5" v-model="model5" :validate="validate" placeholder="请输入文本"></dao-autocomplete>
    </section>
  </div>
</template>
<script>

const options1 = ['apple', 'banana', 'cherry', 'dear', 'fruit', 'goose'];

const options2 = [
  {
    text: '苹果',
    value: 'apple',
  },
  {
    text: '🍌香蕉',
    value: 'banana',
  },
  {
    text: '🍒',
    value: 'cherry',
  },
];

export default {
  data() {
    return {
      options1,
      options2: [],
      options3: [],
      options4: [],
      options5: ['cherry'],
      model1: '',
      model2: 'banana',
      model3: '',
      model4: '',
      model5: '',
    };
  },
  created() {
    setTimeout(() => {
      this.model1 = 'apple';
      this.options2 = options2;
      this.options3 = options2;
      setTimeout(() => {
        this.model3 = 'cherry';
        this.model4 = 'cherry';
      }, 0);
    }, 0);
  },
  methods: {
    onChange(val) {
      console.log('数据变了', val);
    },
    validate(val) {
      if (val !== 'cherry') {
        return '必须是 cherry！';
      }
      return true;
    },
  },
};
</script>

<style lang="scss" scoped>
  section {
    margin-bottom: 150px;
  }
</style>
