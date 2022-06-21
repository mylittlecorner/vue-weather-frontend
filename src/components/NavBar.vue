
<template>
    <div class="topnav">
        <a class="active" v-if="isSet()==true & local_state==true">Logged In</a>
        <a class="active" v-else>Please, Log In</a>
  <div class="login-container">
      <input type="text" placeholder="Username..." v-model="user">
      <input type="password" placeholder="Password..." v-model="password">
      <button type="submit" @click="login">Login</button>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
    props:{
        local_state: Boolean,
    },
    name: "NavBar",
    data () {
        return {
        user: "",
        password: ""
        }
    },
    methods:{
        async login (e){
            const response = await axios.post('/login',{
                Username: this.user,
                Password: this.password
            }).then(response =>{ localStorage.setItem('token', response.data);this.$router.go(0);});
        },
        isSet(){
                try{
                if(localStorage.getItem('token').length>0){
                        return true;
                    }
                }catch{}
            return false;
        }
    }
}
</script>


<style scoped>
    * {box-sizing: border-box;}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.topnav {
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.5);
}

.topnav a {
  float: left;
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: rgba(255, 255, 255, 0.5);
  color: black;
}

.topnav a.active {
  background-color: rgba(255, 255, 255, 0.5);
  color: black;
}

.topnav .login-container {
  float: right;
}

.topnav input[type=text],input[type=password] {
  padding: 6px;
  margin-top: 8px;
  font-size: 17px;
  border: none;
  width:120px;
}

.topnav .login-container button {
  float: right;
  padding: 6px 10px;
  margin-top: 8px;
  margin-right: 16px;
  background-color: #555;
  color: white;
  font-size: 17px;
  border: none;
  cursor: pointer;
}

.topnav .login-container button:hover {
  background-color: rgb(87, 87, 87);
}

@media screen and (max-width: 600px) {
  .topnav .login-container {
    float: none;
  }
  .topnav a, .topnav input[type=text],input[type=password], .topnav .login-container button {
    float: none;
    display: block;
    text-align: left;
    width: 100%;
    margin: 0;
    padding: 14px;
  }
  .topnav input[type=text],input[type=password] {
    background-color: rgba(255, 255, 255, 0.5);
    border: 1px solid #ccc; 
  }
}
</style>