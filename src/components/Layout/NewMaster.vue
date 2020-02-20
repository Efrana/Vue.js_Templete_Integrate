<template>
 <div>
      <!-- nav start-->
     <Nav/>
       <header class="masthead" style="background-image: url('https://blackrockdigital.github.io/startbootstrap-clean-blog/img/home-bg.jpg')">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="site-heading">
            <h1>Clean Blog</h1>
            <span class="subheading">A Blog Theme by Start Bootstrap</span>
          </div>
        </div>
      </div>
    </div>
  </header>
   <article class="abc">
       <div class="container">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">
        <slot name="content"></slot>
      </div>
    </div>
   </div>
   </article>
  <!-- footer start-->
     <Footer/>
 </div>   
</template>

<script>
import Nav from './Partial/Nav'
import Footer from './Partial/Footer'
export default {
    name: 'NewMaster',
    components: {
      Nav,
      Footer
    }
}
</script>
<style>
.abc {
 background-color:brown;
}

</style>
