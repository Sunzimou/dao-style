<template>
  <ul class="dao-list-group">
    <li v-for="i in items"
      :class="['dao-list-item', {active: item === i}]"
      :key="i"
      @click="item = i">
      item{{i}}
      <span class="icon">
        <svg>
          <use xlink:href="#icon_caret-right"></use>
        </svg>
      </span>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      item: 1,
      items: [1,2,3],
    };
  },
}
</script>

