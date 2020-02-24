<template>
    <div>
        <Master v-bind:headerContent="headerContent">
            <template v-slot:content>
            <div v-for="post in posts" :key="post.id">
                <h3>{{ post.title}}</h3>
                <p>{{post.body}}</p>
                <hr>
            </div>
            <div class="clearfix">
             <a class="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
           </div>
            </template>
        </Master>
        </div>
</template>
<script>
import Master from '../Layout/Master'
import axios from 'axios'
export default {
    name: 'Home',
    components:{
        Master
    },
    data(){
        return{
            posts:[],
            headerContent:{
                backgroundImage:"https://blackrockdigital.github.io/startbootstrap-clean-blog/img/home-bg.jpg",
                heading:"Clean Blog",
                subheading:"A Blog Theme by Start Bootstrap"
            }
        }
    },
    created(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
          console.log(response)
          this.posts=response.data
        })
    }

}
</script>