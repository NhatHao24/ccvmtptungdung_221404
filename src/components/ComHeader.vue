<template>
  <ul>
    <li><router-link to="/">Home</router-link></li>

    <li><router-link to="/news">NEWS</router-link></li>
    <li><router-link to="/contact">CONTACT</router-link></li>
    <li><router-link to="/about">ABOUT</router-link></li>
  </ul>
  <!-- để đỗ dữ liệu componet đc gọi -->
  <router-view/>
</template>

<script>
export default {
  name: "ComHeader",
};
</script>

<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #111;
}
</style>