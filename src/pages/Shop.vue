<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <h1 class="title">Shop page</h1>
        <div class="shop__wrapper">
          <shopItem v-for="product in shopList" :key="product.id" :product="product" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ShopItem from "@/components/ShopItem.vue";
export default {
  components: { ShopItem },
  data() {
    return {
      shopList: null
    };
  },
  created() {
    this.shopList = this.$store.getters.getShopList;
    console.log(this.shopList);
  }
};
</script>

<style>
.shop__wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
</style>