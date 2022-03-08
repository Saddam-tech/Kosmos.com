<template>
  <div class="main_menu_wrap">
    <div class="first_inner_box">
      <div class="text_box animate__animated animate__fadeIn">
        <!-- <h1>SMART HOME GYM</h1> -->
        <h1>{{ $t("first_inner_box_h1") }}</h1>
        <h1>{{ $t("first_inner_box_h1_2") }}</h1>
        <h1>{{ $t("first_inner_box_h1_3") }}</h1>
        <button>
          <span>{{ $t("first_inner_box_h1_4") }}</span>
        </button>
      </div>
    </div>
    <div class="second_inner_box">
      <h3>{{ $t("second_inner_box_h3") }}</h3>
      <div class="modal animate__animated animate__fadeIn">
        <p>
          CEO: USMANOV FIRDAVS <br />
          <br />
          {{ $t("second_inner_box_p") }}
        </p>
      </div>
    </div>
    <div class="third_inner_box">
      <h3 class="services animate__animated animate__fadeIn">
        {{ $t("third_inner_box_h3") }}
      </h3>
      <div class="header">
        <h2 class="animate__animated animate__fadeIn">
          {{ $t("third_inner_box_h3_1") }}
        </h2>
        <h2 class="white_h2 animate__animated animate__fadeIn">
          {{ $t("third_inner_box_h3_2") }}
        </h2>
      </div>
      <div class="box-container">
        <div class="option-box-one">
          <div class="inner-box">
            <span class="material-icons"> fitness_center </span>
            <p class="head">{{ $t("third_inner_box_p_2") }}</p>
            <p class="text">
              {{ $t("third_inner_box_p_3") }}
            </p>
          </div>
        </div>
        <div class="option-box-one">
          <div class="inner-box">
            <span class="material-icons"> timer </span>
            <p class="head">{{ $t("third_inner_box_p_2_1") }}</p>
            <p class="text">
              {{ $t("third_inner_box_p_3_2") }}
            </p>
          </div>
        </div>
        <div class="option-box-one">
          <div class="inner-box">
            <span class="material-icons"> sports_kabaddi </span>
            <p class="head">{{ $t("third_inner_box_p_2_2") }}</p>
            <p class="text">
              {{ $t("third_inner_box_p_3_3") }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="fourth_inner_box">
      <div class="header">
        <h4 class="stroke-h4">{{ $t("fourth_inner_box_h4") }}</h4>
        <br />
        <h4 class="no-stroke-h4">{{ $t("fourth_inner_box_h4_1") }}</h4>
      </div>
      <div class="modal animate__animated animate__fadeIn">
        <p>
          {{ $t("fourth_inner_box_p") }}
        </p>
      </div>
    </div>
    <div class="q-pa-md">
      <div class="q-gutter-md">
        <q-carousel
          v-model="slide_7"
          transition-prev="scale"
          transition-next="scale"
          swipeable
          animated
          control-color="black"
          navigation
          arrows
          height="100%"
          width="50px"
          class="bg-white shadow-1 rounded-borders"
        >
          <q-carousel-slide name="style" class="column no-wrap flex-center">
            <img src="~assets/detail_1.png" alt="training_1" />
          </q-carousel-slide>
          <q-carousel-slide name="tv" class="column no-wrap flex-center">
            <img src="~assets/detail_2.png" alt="training_1" />
          </q-carousel-slide>
          <q-carousel-slide name="layers" class="column no-wrap flex-center">
            <img src="~assets/detail_3.png" alt="training_1" />
          </q-carousel-slide>
          <q-carousel-slide name="map" class="column no-wrap flex-center">
            <img src="~assets/detail_4.png" alt="training_1" />
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>
    <div class="fifth_inner_box">
      <div class="text-container animate__animated animate__fadeIn">
        <h2>
          {{ $t("fifth_inner_box_h2") }} <br />
          {{ $t("fifth_inner_box_h2_1") }}
        </h2>
        <p>
          {{ $t("fifth_inner_box_p") }}
        </p>
      </div>
    </div>
    <div class="sixth_inner_box">
      <div class="text-container animate__animated animate__fadeIn">
        <h4>{{ $t("sixth_inner_box_h4") }}</h4>
        <p>
          {{ $t("sixth_inner_box_p") }}
        </p>
        <img src="~assets/strength-assement-v2.jpeg" alt="fitness" />
      </div>
      <div
        class="text-container extra_padding animate__animated animate__fadeIn"
      >
        <p>
          {{ $t("sixth_inner_box_p_1") }}
        </p>
        <img src="~assets/Tonal_Product.jpeg" alt="fitness" />
      </div>
    </div>
    <div class="seventh_inner_box">
      <div class="q-pa-md">
        <div class="q-gutter-md">
          <q-carousel
            v-model="slide"
            transition-prev="scale"
            transition-next="scale"
            swipeable
            animated
            control-color="black"
            navigation
            padding
            arrows
            height="700px"
            class="bg-white shadow-1 rounded-borders"
          >
            <q-carousel-slide name="style" class="column no-wrap flex-center">
              <div class="sixth_inner_box">
                <h5>
                  {{ $t("seventh_inner_box_h5") }}
                </h5>
                <img src="~assets/kosmos_1.png" alt="training_1" />
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="tv" class="column no-wrap flex-center">
              <div class="sixth_inner_box">
                <p>{{ $t("seventh_inner_box_p") }}</p>
                <img src="~assets/training_1.png" alt="training_1" />
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="layers" class="column no-wrap flex-center">
              <div class="sixth_inner_box">
                <h5>{{ $t("seventh_inner_box_h5_1") }}</h5>
                <img src="~assets/kosmos_2.png" alt="training_1" />
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="map" class="column no-wrap flex-center">
              <div class="sixth_inner_box">
                <h5>{{ $t("seventh_inner_box_h5_2") }}</h5>
                <img src="~assets/training_2.png" alt="training_1" />
              </div>
            </q-carousel-slide>
            <q-carousel-slide
              name="kosmos_3"
              class="column no-wrap flex-center"
            >
              <div class="sixth_inner_box">
                <h5>{{ $t("seventh_inner_box_h5_3") }}</h5>
                <img src="~assets/kosmos_3.png" alt="training_1" />
              </div>
            </q-carousel-slide>
            <q-carousel-slide
              name="training_3"
              class="column no-wrap flex-center"
            >
              <div class="sixth_inner_box">
                <p>{{ $t("seventh_inner_box_h5_4") }}</p>
                <img src="~assets/training_3.png" alt="training_1" />
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
      </div>
    </div>
    <div class="eight_inner_box">
      <div class="q-pa-md">
        <div class="q-gutter-md">
          <q-carousel
            v-model="slide_2"
            transition-prev="scale"
            transition-next="scale"
            swipeable
            animated
            control-color="black"
            navigation
            padding
            arrows
            height="700px"
            class="bg-white shadow-1 rounded-borders"
          >
            <q-carousel-slide name="style" class="column no-wrap flex-center">
              <div class="eight_inner_box">
                <h5>{{ $t("eight_inner_box_h5") }}</h5>
                <h5>
                  {{ $t("eight_inner_box_h5_1") }}
                </h5>
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="tv" class="column no-wrap flex-center">
              <div class="eight_inner_box">
                <h5>
                  {{ $t("eight_inner_box_h5_2") }}
                </h5>
                <h5>
                  {{ $t("eight_inner_box_h5_3") }}
                </h5>
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="layers" class="column no-wrap flex-center">
              <div class="eight_inner_box">
                <h5>
                  {{ $t("eight_inner_box_h5_4") }}
                </h5>
                <h5>
                  {{ $t("eight_inner_box_h5_5") }}
                </h5>
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="map" class="column no-wrap flex-center">
              <div class="eight_inner_box">
                <h5>
                  {{ $t("eight_inner_box_h5_6") }}
                </h5>
                <h5>
                  {{ $t("eight_inner_box_h5_7") }}
                </h5>
              </div>
            </q-carousel-slide>
            <q-carousel-slide
              name="kosmos_3"
              class="column no-wrap flex-center"
            >
              <div class="eight_inner_box">
                <h5>{{ $t("eight_inner_box_h5_8") }}</h5>
                <p>
                  {{ $t("eight_inner_box_p") }}
                </p>
              </div>
            </q-carousel-slide>
            <q-carousel-slide
              name="kosmos_4"
              class="column no-wrap flex-center"
            >
              <div class="eight_inner_box">
                <h5>{{ $t("eight_inner_box_h5_9") }}</h5>
                <p>
                  {{ $t("eight_inner_box_p_1") }}
                </p>
                <img src="~assets/swimming-buddy.png" alt="pool" />
              </div>
            </q-carousel-slide>
            <q-carousel-slide
              name="training_4"
              class="column no-wrap flex-center"
            >
              <div class="eight_inner_box">
                <h5>{{ $t("eight_inner_box_h5_10") }}</h5>
                <p>
                  {{ $t("eight_inner_box_p_2") }}
                </p>
                <img src="~assets/powertec.png" alt="training_1" />
              </div>
            </q-carousel-slide>
            <q-carousel-slide
              name="training_5"
              class="column no-wrap flex-center"
            >
              <div class="eight_inner_box">
                <h5>{{ $t("eight_inner_box_h5_11") }}</h5>
                <p>
                  {{ $t("eight_inner_box_p_3") }}
                </p>
                <img src="~assets/elasticity.png" alt="training_5" />
              </div>
            </q-carousel-slide>
            <q-carousel-slide
              name="training_6"
              class="column no-wrap flex-center"
            >
              <div class="eight_inner_box">
                <h5>{{ $t("eight_inner_box_h5_12") }}</h5>
                <p>
                  {{ $t("eight_inner_box_p_4") }}
                </p>
                <img src="~assets/10.jpeg" alt="training_1" />
              </div>
            </q-carousel-slide>
            <q-carousel-slide
              name="training_8"
              class="column no-wrap flex-center"
            >
              <div class="eight_inner_box">
                <h5>{{ $t("eight_inner_box_h5_13") }}</h5>
                <p>
                  {{ $t("eight_inner_box_p_5") }}
                </p>
                <img src="~assets/shot.png" alt="training_1" />
              </div>
            </q-carousel-slide>
            <q-carousel-slide
              name="training_9"
              class="column no-wrap flex-center"
            >
              <div class="eight_inner_box">
                <h5>{{ $t("eight_inner_box_h5_14") }}</h5>
                <p>
                  {{ $t("eight_inner_box_p_6") }}
                </p>
                <img src="~assets/maxresdefault.jpeg" alt="training_1" />
              </div>
            </q-carousel-slide>
            <q-carousel-slide
              name="training_10"
              class="column no-wrap flex-center"
            >
              <div class="eight_inner_box">
                <h5>{{ $t("eight_inner_box_h5_15") }}</h5>
                <p>
                  {{ $t("eight_inner_box_p_7") }}
                </p>
                <img src="~assets/hh1.jpeg" alt="training_1" />
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
      </div>
    </div>
    <div class="eight_inner_box">
      <div class="q-pa-md">
        <div class="q-gutter-md">
          <q-carousel
            v-model="slide_3"
            transition-prev="scale"
            transition-next="scale"
            swipeable
            animated
            control-color="black"
            navigation
            padding
            arrows
            height="700px"
            class="bg-white shadow-1 rounded-borders"
          >
            <q-carousel-slide name="style" class="column no-wrap flex-center">
              <div class="eight_inner_box">
                <h5>{{ $t("nine_inner_box_h5") }}</h5>
                <img src="~assets/latest_1.png" alt="training_1" />
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="tv" class="column no-wrap flex-center">
              <div class="eight_inner_box">
                <img src="~assets/latest_2.png" alt="training_1" />
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="layers" class="column no-wrap flex-center">
              <div class="eight_inner_box">
                <img src="~assets/latest_3.png" alt="training_1" />
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="map" class="column no-wrap flex-center">
              <div class="eight_inner_box">
                <img src="~assets/latest_4.png" alt="training_1" />
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="style-1" class="column no-wrap flex-center">
              <div class="eight_inner_box">
                <img src="~assets/latest_5.png" alt="training_1" />
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="tv-1" class="column no-wrap flex-center">
              <div class="eight_inner_box">
                <img src="~assets/latest_6.png" alt="training_1" />
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="map-1" class="column no-wrap flex-center">
              <div class="eight_inner_box">
                <img src="~assets/latest_7.png" alt="training_1" />
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
      </div>
    </div>
    <div class="eight_inner_box">
      <div class="q-pa-md">
        <div class="q-gutter-md">
          <q-carousel
            v-model="slide_4"
            transition-prev="scale"
            transition-next="scale"
            swipeable
            animated
            control-color="black"
            navigation
            padding
            arrows
            height="700px"
            width="100%"
            class="bg-white shadow-1 rounded-borders"
          >
            <q-carousel-slide name="style" class="column no-wrap flex-center">
              <div class="eight_inner_box">
                <h5>{{ $t("nine_inner_box_h5_1") }}</h5>
                <img src="~assets/installation.png" alt="training_1" />
                <p>
                  {{ $t("nine_inner_box_p") }}
                </p>
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="tv" class="column no-wrap flex-center">
              <div class="eight_inner_box">
                <h5>{{ $t("nine_inner_box_h5_2") }}</h5>
                <img src="~assets/installation-2.png" alt="training_1" />
                <p>
                  {{ $t("nine_inner_box_p_1") }}
                </p>
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
      </div>
    </div>
    <div class="eight_inner_box">
      <div class="q-pa-md">
        <div class="q-gutter-md">
          <q-carousel
            v-model="slide_5"
            transition-prev="scale"
            transition-next="scale"
            swipeable
            animated
            control-color="black"
            navigation
            padding
            arrows
            height="700px"
            width="100%"
            class="bg-white shadow-1 rounded-borders"
          >
            <q-carousel-slide name="style" class="column no-wrap flex-center">
              <div class="eight_inner_box">
                <h5>{{ $t("basic_info_h5") }}</h5>
                <p>{{ $t("basic_info_p") }}</p>
                <p>
                  {{ $t("basic_info_p_1") }}
                </p>
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="tv" class="column no-wrap flex-center">
              <div class="eight_inner_box">
                <h5>{{ $t("basic_info_h5_1") }}</h5>
                <p>{{ $t("basic_info_p_2") }}</p>
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="layers" class="column no-wrap flex-center">
              <div class="eight_inner_box">
                <h5>{{ $t("basic_info_h5_2") }}</h5>
                <p>
                  {{ $t("basic_info_p_3") }}
                </p>
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="map" class="column no-wrap flex-center">
              <div class="eight_inner_box">
                <h5>{{ $t("basic_info_h5_3") }}</h5>
                <p>{{ $t("basic_info_p_4") }}</p>
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="style-1" class="column no-wrap flex-center">
              <div class="eight_inner_box">
                <h5>{{ $t("basic_info_h5_4") }}</h5>
                <p>{{ $t("basic_info_p_5") }}</p>
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="tv-1" class="column no-wrap flex-center">
              <div class="eight_inner_box">
                <h5>{{ $t("basic_info_h5_5") }}</h5>
                <p>{{ $t("basic_info_p_6") }}</p>
              </div>
            </q-carousel-slide>
            <q-carousel-slide
              name="layers-1"
              class="column no-wrap flex-center"
            >
              <div class="eight_inner_box">
                <h5>{{ $t("basic_info_h5_6") }}</h5>
                <p>{{ $t("basic_info_p_7") }}</p>
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
      </div>
    </div>
    <div class="achievement">
      <div class="text-box">
        <h5>{{ $t("achievement_h5") }}</h5>
        <p>
          {{ $t("achievement_p_1") }}
        </p>
        <h5>{{ $t("achievement_h5_1") }}</h5>
        <p>{{ $t("achievement_p_2") }}</p>
        <h5>{{ $t("achievement_h5_2") }}</h5>
      </div>
    </div>
    <div class="pre-footer">
      <div class="inner-content">
        <h5 class="stroke-h5">{{ $t("pre_footer_h5") }}</h5>
        <img src="~assets/man-workout.jpeg" alt="training_1" />
        <q-carousel
          v-model="slide_6"
          transition-prev="scale"
          transition-next="scale"
          swipeable
          animated
          control-color="black"
          navigation
          arrows
          height="300px"
          width="100%"
          class="bg-white shadow-1 rounded-borders"
        >
          <q-carousel-slide name="style" class="column no-wrap flex-center">
            <div class="footer_inner_box">
              <h5>{{ $t("footer_h5") }}</h5>
              <p>
                {{ $t("footer_p") }}
              </p>
              <div class="social-media-links"></div>
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="tv" class="column no-wrap flex-center">
            <div class="footer_inner_box">
              <img src="~assets/celebrities.jpeg" alt="training_1" />
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="layers" class="column no-wrap flex-center">
            <div class="footer_inner_box">
              <img src="~assets/celebrities_2.png" alt="training_1" />
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="map" class="column no-wrap flex-center">
            <div class="footer_inner_box">
              <img src="~assets/celebrities_3.jpeg" alt="training_1" />
            </div>
          </q-carousel-slide>
        </q-carousel>
        <h5 class="stroke-h5">{{ $t("footer_h5_1") }}</h5>
        <div class="social-icons">
          <a
            href="https://www.instagram.com/_usmanov_firdavs_/?hl=en"
            target="blank"
            ><i class="fab fa-instagram"></i
          ></a>

          <a
            href="https://www.facebook.com/profile.php?id=100010028779013"
            target="blank"
            ><i class="fab fa-facebook"></i>
          </a>

          <a href="mailto:kosmos1.cn@gmail.com" target="blank"
            ><i class="fas fa-envelope"></i
          ></a>
          <a href="tel://+8613276818667"> <i class="fas fa-phone"></i></a>
          <a href="https://t.me/UsmanoB" target="blank">
            <i class="fab fa-telegram"></i
          ></a>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="content">
        <p>
          <span>{{ $t("footer_p_1") }}</span>
        </p>
        <q-input
          class="q-input"
          color="blue"
          label-color="grey"
          dark
          v-model="input_text_email"
          :label="$t('email_input')"
          :dense="dense"
        />
        <div class="social-icons">
          <a
            href="https://www.instagram.com/_usmanov_firdavs_/?hl=en"
            target="blank"
            ><i class="fab fa-instagram"></i
          ></a>

          <a
            href="https://www.facebook.com/profile.php?id=100010028779013"
            target="blank"
            ><i class="fab fa-facebook"></i>
          </a>

          <a href="mailto:kosmos1.cn@gmail.com" target="blank"
            ><i class="fas fa-envelope"></i
          ></a>
          <a href="tel://+8613276818667"> <i class="fas fa-phone"></i></a>
          <a href="https://t.me/UsmanoB" target="blank">
            <i class="fab fa-telegram"></i
          ></a>
        </div>
        <p>
          <span>{{ $t("footer_p_2") }}</span>
        </p>
        <p class="p-white"><span>+86 132 7681 8667</span></p>
        <p class="bold">
          <img src="~assets/favicon.png" alt="logo" /> KOSMOS-FITNESS
        </p>
        <p class="copyright">
          <span
            >{{ $t("footer_p_3") }}{{ new Date().getFullYear() }}
            {{ $t("footer_p_4") }}</span
          >
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
      slide: ref("style"),
      slide_2: ref("style"),
      slide_3: ref("style"),
      slide_4: ref("style"),
      slide_5: ref("style"),
      slide_6: ref("style"),
      slide_7: ref("style"),
      input_text_email: ref(""),
      dense: ref(false),
    };
  },
});
</script>
