<template>
<header class="masthead" v-bind:style="{backgroundImage: 'url('+ headerContent.backgroundImage + ')'}">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="post-heading">
            <h1>{{headerContent.heading}}</h1>
            <span class="subheading">{{headerContent.subheading}}</span>
            <span class="meta">Posted by
              <a href="#">Start Bootstrap</a>
              on August 24, 2019</span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
    export default {
        name: "SampleHeader",
        props: ["headerContent"]
    }
</script>

<style scoped>

</style>