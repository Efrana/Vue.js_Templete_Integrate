<template>
 <div>
      <!-- nav start-->
     <Nav/>
    <Header v-bind:headerContent="headerContent"></Header>
   <div class="container">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">
        <slot name="content"></slot>
      </div>
    </div>
   </div>
  <!-- footer start-->
     <Footer/>
 </div>   
</template>

<script>
import Nav from './Partial/Nav'
import Footer from './Partial/Footer'
import Header from './Partial/Header'
export default {
    name: 'Master',
    props:["headerContent"],
    components: {
      Nav,
      Footer,
      Header
    }
}
</script>
