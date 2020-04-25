<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <div class="product__wrapper">
          <div class="product-gallery">
            <carousel :loop="true" :autoplay="true" :perPage="1" :paginationEnable="true" paginationColor="#b3b3b3" paginationActiveColor="#494ce8">
              <slide v-for="(slide, index) in product.gallery" :key="index"><img :src="slide.img" :alt="slide.name"></slide>
            </carousel>
          </div>
          <div class="product-info">
            <h1 class="title">{{product.title}}</h1>
            <p>{{product.descr}}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: null
    };
  },
  created() {
    this.product = this.$store.getters.getProduct(this.$route.params.id);
  }
};
</script>

<style lang="scss">
.product {
  &__wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
  }
  &-gallery,
  &-info {
    max-width: 48%;
    text-align: center;
    @media screen and (max-width: 768px) {
      max-width: 100%;
    }
  }
}
.VueCarousel-inner {
  visibility: visible !important;
  flex-basis: 100% !important;
  width: 100% !important;
}
</style>