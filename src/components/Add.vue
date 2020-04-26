<template>
  <div class="add container">
    <Alert v-if="alert" v-bind:message="alert" />
    <h1 class="page-header">Add user</h1>
    <form v-on:submit="adduser">
        <div class="well">
            <h4>User Info</h4>
            <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control" placeholder="Name" v-model="user.name">
            </div>
            <div class="form-group">
                <label>User Name</label>
                <input type="text" class="form-control" placeholder="Userame" v-model="user.username">
            </div>
        </div>
        <div class="well">
            <h4>User Contact</h4>
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
            <h4>User Location</h4>
            <div class="form-group">
                <label>Address</label>
                <input type="text" class="form-control" placeholder="Address" v-model="user.address.street">
            </div>
            <div class="form-group">
                <label>City</label>
                <input type="text" class="form-control" placeholder="City" v-model="user.address.city">
            </div>
            <div class="form-group">
                <label>Zipcode</label>
                <input type="text" class="form-control" placeholder="Zipcode" v-model="user.address.zipcode">
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
        adduser(e){
            if(!this.user.name || !this.user.username || !this.user.email){
                this.alert = 'Please fill in all required fields';
            } else {
                let newuser = {
                  name: this.user.name,
                    username: this.user.username,
                    phone: this.user.phone,
                    email: this.user.email,
                    address: this.user.address.street,
                    city: this.user.address.city,
                    state: this.user.address.zipcode
                }

                this.$http.post('https://jsonplaceholder.typicode.com/users/add', newuser)
                    .then(function(response){
                        this.$router.push({path: '/', query: {alert: 'user Added'}});
                    });

                e.preventDefault();
            }
            e.preventDefault();
        }
    },
    components: {
        Alert
    }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
