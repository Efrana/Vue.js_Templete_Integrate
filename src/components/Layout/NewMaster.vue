<template>
 <div>
      <!-- nav start-->
     <Nav/>
     <SampleHeader v-bind:headerContent="headerContent"></SampleHeader>
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
import SampleHeader from './Partial/SampleHeader'
export default {
    name: 'NewMaster',
    props:["headerContent"],
    components: {
      Nav,
      Footer,
      SampleHeader
    }
}
</script>
<style>

</style>
