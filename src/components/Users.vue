<template>
  <div class="users container">
    <Alert v-if="alert" v-bind:message="alert" />
    <h1 class="page-header">Manage users</h1>
    <input class="form-control" placeholder="Enter Name" v-model="filterInput">
    <br />
    <table class="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
             <th>Phone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in filterBy(users, filterInput)" :key="user.id">
            <td>{{user.name}}</td>
            <td>{{user.username}}</td>
            <td>{{user.email}}</td>
            <td>{{user.phone}}</td>
            <td><router-link class="btn btn-primary" v-bind:to="'/user/'+user.id">View</router-link></td>
          </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
  import Alert from './Alert';
  export default {
    name: 'users',
    data () {
      return {
        users: [],
        alert:'',
        filterInput:''
      }
    },
    methods: {
      fetchusers(){
        this.$http.get('https://jsonplaceholder.typicode.com/users')
          .then(function(response){
            this.users = response.body;
          });
      },
      
      filterBy(list, value){
        value = value.charAt(0).toUpperCase() + value.slice(1);
        return list.filter(function(user){
          return user.name.indexOf(value) > -1;
        });
      }
    },
    created: function(){
      if(this.$route.query.alert){
        this.alert = this.$route.query.alert;
      }
      this.fetchusers();
    },
    updated: function(){
      this.fetchusers();
    },
    components: {
      Alert
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
