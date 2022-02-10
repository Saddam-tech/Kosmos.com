<template>
  <q-layout view="lHh Lpr lFf">
    <div class="main_navbar_wrap">
      <h4>KOSMOS.COM</h4>
      <ul>
        <li v-for="list in navList" :key="list.id">{{ list.title }}</li>
      </ul>
    </div>
    <div class="main_menu_wrap">
      <div class="first_inner_box">
        <div class="text_box animate__animated animate__fadeIn">
          <h1>SMART HOME GYM</h1>
          <h1>MAKE YOUR</h1>
          <h1>BODY SHAPE</h1>
        </div>
      </div>
      <div class="second_inner_box">
        <h3>ABOUT US</h3>
        <div class="modal animate__animated animate__fadeIn">
          <p>
            Our company is headquartered in China and was founded in 2020. After
            several months of hard work, our company has gradually started
            producing our first product Kosmos I. Our Smart Home Gym are
            manufactured and sold in China first, then in the countries of the
            former Soviet Union, and eventually in the wider markets of East
            Asia, the Middle East and Africa, Europe
          </p>
        </div>
      </div>
      <div class="third_inner_box">
        <h3 class="animate__animated animate__fadeIn">SERVICES</h3>
        <h2 class="animate__animated animate__fadeIn">BUILD YOUR</h2>
        <h2 class="white_h2 animate__animated animate__fadeIn">BEST BODY</h2>
      </div>
    </div>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import "animate.css";

export default defineComponent({
  name: "MainLayout",
  data() {
    return {
      navList: [
        {
          id: 1,
          title: "HOME",
          caption: "",
          link: "/home",
        },
        {
          id: 2,
          title: "EQUIPMENT",
          caption: "",
          link: "/equipment",
        },
        {
          id: 3,
          title: "INTELLIGENCE",
          caption: "",
          link: "/intelligence",
        },
        {
          id: 4,
          title: "PROGRESS TRACKING",
          caption: "",
          link: "/progress-tracking",
        },
        {
          id: 5,
          title: "WORKOUTS",
          caption: "",
          link: "/workouts",
        },
        {
          id: 6,
          title: "PRICING",
          caption: "",
          link: "#",
        },
      ],
    };
  },
});
</script>
