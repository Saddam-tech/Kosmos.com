<template>
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
          COMPANY FOUNDER: USMANOV FIRDAVS <br />
          <br />
          "People in most of the countries are facing problems such as
          overweight, diabetes and some other serious health problems. One of my
          biggest dreams is - help people always be happy, healthy and feel
          young" Our company is headquartered in China and was founded in 2020.
          After several months of hard work, our company has gradually started
          producing our first product Kosmos I. Our Smart Home Gym are
          manufactured and sold in China first, then in the countries of the
          former Soviet Union, and eventually in the wider markets of East Asia,
          the Middle East and Africa, Europe
        </p>
      </div>
    </div>
    <div class="third_inner_box">
      <h3 class="services animate__animated animate__fadeIn">SERVICES</h3>
      <div class="header">
        <h2 class="animate__animated animate__fadeIn">BUILD YOUR</h2>
        <h2 class="white_h2 animate__animated animate__fadeIn">BEST BODY</h2>
      </div>
      <div class="box-container">
        <div class="option-box-one">
          <div class="inner-box">
            <span class="material-icons"> fitness_center </span>
            <p class="head">Cardio exercise</p>
            <p class="text">
              Attempts a maximum weight single lift of a barbell loaded with
              weight plates
            </p>
          </div>
        </div>
        <div class="option-box-one">
          <div class="inner-box">
            <span class="material-icons"> timer </span>
            <p class="head">Cardio exercise</p>
            <p class="text">
              Attempts a maximum weight single lift of a barbell loaded with
              weight plates
            </p>
          </div>
        </div>
        <div class="option-box-one">
          <div class="inner-box">
            <span class="material-icons"> sports_kabaddi </span>
            <p class="head">Cardio exercise</p>
            <p class="text">
              Attempts a maximum weight single lift of a barbell loaded with
              weight plates
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="fourth_inner_box">
      <div class="header">
        <h4 class="stroke-h4">Product</h4>
        <h4 class="no-stroke-h4">Information</h4>
      </div>
      <div class="modal animate__animated animate__fadeIn">
        <p>
          The Intelligent Comprehensive Trainer is an exercise program that
          combines the functions of all core muscle groups with a variety of
          aerobic exercise functions of high-tech comprehensive training device
          , functioning stronger, and more interesting. The utility model has
          the characteristics of small area “One square meter Bodybuilding”,
          powerful function, rich content, personalized fitness program
          customization, aerobic and a variety of strength equipment fusion,
          regular live course invitations, and other home fitness exercise like
          scientific sports. The online course system and the product complement
          each other, and they are suitable for private education, family,
          enterprices, and other occasions, like gym. Adhere to the “fitness
          technology, intelligent, home”, a design concept for users to create
          beautiful fashion, smart fitness equipment at teh cutting edge of
          technology.
        </p>
      </div>
    </div>
    <!-- <div class="q-pa-md"> -->
    <q-carousel
      animated
      v-model="slides"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide :name="1" img-src="~assets/detail_1.png" />
      <q-carousel-slide :name="2" img-src="~assets/detail_2.png" />
      <q-carousel-slide :name="3" img-src="~assets/detail_3.png" />
      <q-carousel-slide :name="4" img-src="~assets/detail_4.png" />
    </q-carousel>
    <!-- </div> -->
    <div class="fifth_inner_box">
      <div class="text-container animate__animated animate__fadeIn">
        <h2>
          HUMANIZED DESIGN <br />
          STRIVE FOR QUALITY
        </h2>
        <p>
          The main frame structure of the intelligent comprehensive training
          device is made of high-strength steel. Durable, high-temperature spray
          treatment on hte surface, beautiful appearance, scrantch-resistant,
          180 degree rotatable. The rotating column adopts the design concept of
          the combination of spring pin and rotating rod pin to reduce shaking.
          Move to increase the stability during exercise, the upper and lower
          boom adopts circlip type adjustment design. The adjustment is
          smoother. The tension rope is made of imported string horse braided
          rope. It has the characteristics of wear resistence, UV resistance
          corrosion resistence, oxidation resistance and strong tensile force,
          so that safer during use.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import "animate.css";

export default defineComponent({
  name: "Index",
  setup() {
    return {
      slides: ref(1),
      autoplay: ref(true),
    };
  },
});
</script>
