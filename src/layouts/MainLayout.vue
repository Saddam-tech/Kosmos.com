<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="main-header">
      <!-- mobile header -->
      <div class="main_navbar_wrap">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        ></q-btn>
        <h4>KOSMOS.COM</h4>
        <ul>
          <li v-for="list in navList" :key="list.id">{{ list.title }}</li>
        </ul>

        <q-drawer
          :width="$q.screen.width"
          v-model="leftDrawerOpen"
          bordered
          class="mobile-menu"
        >
          <q-list>
            <q-btn
              class="mobile-close-btn"
              icon="close"
              @click="toggleLeftDrawer"
              flat
              round
              dense
            ></q-btn>
          </q-list>

          <q-separator></q-separator>

          <div class="mobile-menu-list">
            <router-link to="/">
              <div class="header">
                <h4>KOSMOS.COM</h4>
                <p>Build yourself</p>
              </div>
            </router-link>
            <ul>
              <li v-for="list in navList" :key="list.id">{{ list.title }}</li>
            </ul>
          </div>
        </q-drawer>
      </div>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

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
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
