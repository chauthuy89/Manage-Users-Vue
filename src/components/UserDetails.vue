<template>
  <div class="details container">
    <router-link to="/">Back</router-link>
    <h1 class="page-header">{{user.name}} {{user.username}}
        <span class="pull-right">
            <router-link class="btn btn-primary" v-bind:to="'/edit/'+user.id">Edit</router-link>
            <button class="btn btn-danger" v-on:click="deleteuser(user.id)">Delete</button>
            </span>
    </h1>
    <ul class="list-group">
            <li class="list-group-item"><span class="glyphicon glyphicon-phone" aria-hidden="true"></span> {{user.phone}}</li>
            <li class="list-group-item"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span> {{user.email}}</li>
        </ul>

        <ul class="list-group">
            <li class="list-group-item"> {{user.address.street}}</li>
            <li class="list-group-item">{{user.address.city}}</li>
            <li class="list-group-item">{{user.address.zipcode}}</li>
        </ul>
  </div>
</template>

<script>
export default {
  name: 'userdetails',
  data () {
    return {
      user: ''
    }
  },
  methods:{
      fetchuser(id){
          this.$http.get('https://jsonplaceholder.typicode.com/users/'+id)
          .then(function(response){
            this.user = response.body;
          });
      },
      deleteuser(id){
          this.$http.delete('https://jsonplaceholder.typicode.com/users/delete/'+id)
          .then(function(response){
            this.$router.push({path: '/', query: {alert: 'user Deleted'}});
          });
      }
  },
  created: function(){
      this.fetchuser(this.$route.params.id);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
