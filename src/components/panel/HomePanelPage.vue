<template>
  Home Page Panel

  <ul>
    <li>
      <router-link class="nav-link" to="/panel">Home page</router-link>

    </li>
    <li>
    
      <router-link class="nav-link" to="/panel/payment">Payment</router-link>

    </li>
    <li>
      <router-link class="nav-link" to="/panel/dashboard">Dashboard</router-link>
    </li>
  </ul>

  <router-view></router-view>
</template>

