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
        <div class="header-wrap">
          <h4>KOSMOS.COM</h4>
          <q-toggle
            class="lang-toggle-button"
            :label="$i18n.locale"
            color="white"
            false-value="ru"
            true-value="en-US"
            v-model="$i18n.locale"
          />
        </div>
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
              <li v-for="list in navList" :key="list.id">
                {{ this.$t(list.title) }}
              </li>
            </ul>
            <ul>
              <li v-for="list in pricing" :key="list.id">
                {{ this.$t(list.title) }}
              </li>
            </ul>
          </div>
        </q-drawer>
      </div>
    </q-header>
    <!-- pc header -->
    <q-header class="pc_main_header">
      <div class="pc_navbar_wrap">
        <ul>
          <li v-for="list in navList" :key="list.id">
            {{ this.$t(list.title) }}
          </li>
        </ul>
        <div class="title_logo">
          <img src="~assets/favicon.png" alt="logo" />
          <h4>KOSMOS.COM</h4>
        </div>
        <ul>
          <li :class="list.class" v-for="list in pricing" :key="list.id">
            {{ this.$t(list.title) }}
          </li>
        </ul>
        <q-toggle
          class="lang-toggle-button"
          :label="$i18n.locale"
          color="white"
          false-value="ru"
          true-value="en-US"
          v-model="$i18n.locale"
        />
      </div>
    </q-header>
    <!-- pc header -->
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
          title: "navbar_home",
          caption: "",
          link: "/home",
        },
        {
          id: 2,
          title: "navbar_equipment",
          caption: "",
          link: "/equipment",
        },
        {
          id: 3,
          title: "navbar_intelligence",
          caption: "",
          link: "/intelligence",
        },
        {
          id: 4,
          title: "navbar_progress_tracking",
          caption: "",
          link: "/progress-tracking",
        },
        {
          id: 5,
          title: "navbar_workouts",
          caption: "",
          link: "/workouts",
        },
      ],
      pricing: [
        {
          id: 1,
          title: "navbar_locations",
          caption: "",
          link: "#",
          class: "pre_last",
        },
        {
          id: 2,
          title: "navbar_pricing",
          caption: "",
          link: "#",
          class: "last",
        },
      ],
    };
  },
  // mounted() {
  //   console.log(this.$i18n.locale);
  // },

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
