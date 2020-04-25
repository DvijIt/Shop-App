<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container notfount">
        <h1 class="title">Page not found!</h1>
        <p>
          Go to
          <router-link to="/">main page</router-link>?
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" >
.notfount {
  min-height: 80vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  a {
    font-size: 20px;
    text-decoration: underline;
  }
}
</style>