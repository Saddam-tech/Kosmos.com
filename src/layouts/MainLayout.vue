<template>
  <q-layout view="lHh Lpr lFf">
    <div class="main_navbar_wrap">
      <h4>KOSMOS.COM</h4>
      <ul>
        <li>HOME</li>
        <li>EQUIPMENT</li>
        <li>INTELLIGENCE</li>
        <li>PROGRESS TRACKING</li>
        <li>WORKOUTS</li>
        <li>PRICING</li>
      </ul>
    </div>
    <div class="main_menu_wrap">
      <div class="first_inner_box">
        <div class="text_box">
          <h1>SMART HOME GYM</h1>
          <h1>MAKE YOUR</h1>
          <h1>BODY SHAPE</h1>
        </div>
      </div>
      <div class="second_inner_box"></div>
    </div>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainLayout",
  data() {
    return {
      navList: [
        {
          title: "HOME",
          caption: "",
          link: "/home",
        },
        {
          title: "EQUIPMENT",
          caption: "",
          link: "/equipment",
        },
        {
          title: "INTELLIGENCE",
          caption: "",
          link: "/intelligence",
        },
        {
          title: "PROGRESS TRACKING",
          caption: "",
          link: "/progress-tracking",
        },
        {
          title: "WORKOUTS",
          caption: "",
          link: "/workouts",
        },
        {
          title: "PRICING",
          caption: "",
          link: "#",
        },
      ],
    };
  },
});
</script>
