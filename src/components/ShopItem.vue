<template>
  <div class="item">
    <img :src="product.img" :alt="product.title" />
    <router-link :to="/shop/+product.id">
      <h2 class="title">{{product.title}}</h2>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  created() {}
};
</script>

<style lang="scss">
.title {
  text-align: center;
}
</style>