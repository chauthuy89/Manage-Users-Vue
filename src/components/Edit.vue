<template>
  <div class="edit container">
    <Alert v-if="alert" v-bind:message="alert" />
    <h1 class="page-header">Edit user</h1>
    <form v-on:submit="updateuser">
        <div class="well">
            <h4>user Info</h4>
            <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control" placeholder="Name" v-model="user.name">
            </div>
            <div class="form-group">
                <label>Username</label>
                <input type="text" class="form-control" placeholder="Username" v-model="user.Username">
            </div>
        </div>
        <div class="well">
            <h4>user Contact</h4>
            <div class="form-group">
                <label>Email</label>
                <input type="text" class="form-control" placeholder="Email" v-model="user.email">
            </div>
            <div class="form-group">
                <label>Phone</label>
                <input type="text" class="form-control" placeholder="Phone" v-model="user.phone">
            </div>
        </div>

        <div class="well">
            <h4>user Location</h4>
            <div class="form-group">
                <label>Address</label>
                <input type="text" class="form-control" placeholder="Address" v-model="user.address.street">
            </div>
            <div class="form-group">
                <label>City</label>
                <input type="text" class="form-control" placeholder="City" v-model="user.address.city">
            </div>
            <div class="form-group">
                <label>State</label>
                <input type="text" class="form-control" placeholder="State" v-model="user.address.zipcode">
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
    import Alert from './Alert'
    export default {
    name: 'add',
    data () {
        return {
        user: {},
        alert:''
        }
    },
    methods: {
        fetchuser(id){
            this.$http.get('https://jsonplaceholder.typicode.com/users/'+id)
            .then(function(response){
                this.user = response.body;
            });
        },
        updateuser(e){
            if(!this.user.first_name || !this.user.last_name || !this.user.email){
                this.alert = 'Please fill in all required fields';
            } else {
                let upduser = {
                    first_name: this.user.first_name,
                    last_name: this.user.last_name,
                    phone: this.user.phone,
                    email: this.user.email,
                    address: this.user.address,
                    city: this.user.city,
                    state: this.user.state
                }

                this.$http.put('http://slimapp/api/user/update/'+this.$route.params.id, upduser)
                    .then(function(response){
                        this.$router.push({path: '/', query: {alert: 'user Updated'}});
                    });

                e.preventDefault();
            }
            e.preventDefault();
        }
    },
    created: function(){
        this.fetchuser(this.$route.params.id);
    },
    components:{
        Alert
    }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
