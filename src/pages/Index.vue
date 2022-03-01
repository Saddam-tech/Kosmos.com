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
    <div class="sixth_inner_box">
      <div class="text-container animate__animated animate__fadeIn">
        <h4>Efficient usage of power Kinetic energy recovery</h4>
        <p>
          The disruptive motor technology avoids the backlash caused by the
          reducer and ensures a smooth feel. FOC control, special motor design,
          can directly output more than 50nm torque, dynamic powerful. Compared
          with traditional counterweight equipment, it is muted, safer, smarter
          and higher effect of exercises
        </p>
        <img src="~assets/strength-assement-v2.jpeg" alt="fitness" />
        <p>
          Recover more than 80% of the kinetic energy through super capacitors,
          even in boating mode not only does it consume no power, but it can
          also supply power to external devices
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
            width="100%"
            class="bg-white shadow-1 rounded-borders"
          >
            <q-carousel-slide name="style" class="column no-wrap flex-center">
              <div class="sixth_inner_box">
                <h5>
                  A variety of 'Booming adjustment methods', Meeting various
                  training needs
                </h5>
                <img src="~assets/kosmos_1.png" alt="training_1" />
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="tv" class="column no-wrap flex-center">
              <div class="sixth_inner_box">
                <p>(1) Vertical rotation adjustment (9 file adjustment)</p>
                <img src="~assets/training_1.png" alt="training_1" />
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="layers" class="column no-wrap flex-center">
              <div class="sixth_inner_box">
                <h5>Full body workouts fully focused on you</h5>
                <img src="~assets/kosmos_2.png" alt="training_1" />
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="map" class="column no-wrap flex-center">
              <div class="sixth_inner_box">
                <h5>Upside down adjustment (11 file adjustments)</h5>
                <img src="~assets/training_2.png" alt="training_1" />
              </div>
            </q-carousel-slide>
            <q-carousel-slide
              name="kosmos_3"
              class="column no-wrap flex-center"
            >
              <div class="sixth_inner_box">
                <h5>Professional and scientific fitness personal training</h5>
                <img src="~assets/kosmos_3.png" alt="training_1" />
              </div>
            </q-carousel-slide>
            <q-carousel-slide
              name="training_3"
              class="column no-wrap flex-center"
            >
              <div class="sixth_inner_box">
                <p>Horizontal rotation adjustment (5 levels adjustment)</p>
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
            width="100%"
            class="bg-white shadow-1 rounded-borders"
          >
            <q-carousel-slide name="style" class="column no-wrap flex-center">
              <div class="eight_inner_box">
                <h5>Android system, social, music, video everything.</h5>
                <h5>
                  Live and interacts with the coach and move the gym experience
                  into the house.
                </h5>
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="tv" class="column no-wrap flex-center">
              <div class="eight_inner_box">
                <h5>
                  Free exercise, running mode, fitness plan, multiple exercise
                  methods of your choice
                </h5>
                <h5>
                  Create different accounts, work out with your family, and let
                  your family fall inlove with fitness.
                </h5>
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="layers" class="column no-wrap flex-center">
              <div class="eight_inner_box">
                <h5>
                  Variety of exercise training videos, truly achieves the goal
                  of barrier-free professional training for beginners
                </h5>
                <h5>
                  Synchronous aonline update of teaching videos to help users
                  continuously explore new functions of the device
                </h5>
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="map" class="column no-wrap flex-center">
              <div class="eight_inner_box">
                <h5>
                  Professional muscle endurance test, exclusive fitness plan,
                  choose your favorite coach
                </h5>
                <h5>
                  Real-time record of your calories burned during exercise,
                  heart rate and training during training time
                </h5>
              </div>
            </q-carousel-slide>
            <q-carousel-slide
              name="kosmos_3"
              class="column no-wrap flex-center"
            >
              <div class="eight_inner_box">
                <h5>Multiple strength training modes</h5>
                <p>
                  Constant force mode The resistance is constant, and changes
                  with the action, the force of muscle contraction produces
                  changes to meet the completion of the entire action. This
                  training mode is closer to daily and work to complete an
                  action efficiently and reduce the risk of injury.
                </p>
              </div>
            </q-carousel-slide>
            <q-carousel-slide
              name="kosmos_4"
              class="column no-wrap flex-center"
            >
              <div class="eight_inner_box">
                <h5>Centripetal isotonic mode</h5>
                <p>
                  When the muscle contracts, its length becomes shorter, which
                  greatly increases the contraction strength of the muscles.
                  Strong effect, is an effective way to increase muscle, reduce
                  fat and shape. Suitable for swimming, running, skating and
                  other items. It is the main form of muscle movement, to
                  achieve dynamics the basis of sports
                </p>
                <img src="~assets/swimming-buddy.png" alt="pool" />
              </div>
            </q-carousel-slide>
            <q-carousel-slide
              name="training_4"
              class="column no-wrap flex-center"
            >
              <div class="eight_inner_box">
                <h5>Centrifugal isotonic mode:</h5>
                <p>
                  Can prevent sports injuries, eccentric exercise will allow
                  beginners to adapt quickly after exercise. Muscle soreness can
                  promote higher strength growth and promote endocrine
                  circulation. Lets you lose more fat, eccentric exercise
                  training brings greater muscle dimension and promotes muscle
                  growth.
                </p>
                <img src="~assets/powertec.png" alt="training_1" />
              </div>
            </q-carousel-slide>
            <q-carousel-slide
              name="training_5"
              class="column no-wrap flex-center"
            >
              <div class="eight_inner_box">
                <h5>Elastic mode:</h5>
                <p>
                  The elastic resistance changes with the elongation. It can
                  effectively improve muscle strength, physical activity and
                  flexibility, and effectively improve sports performance. It
                  can also match the rhythm of music to change. It becomes a
                  kind of aerobic training that can quickly self-cultivate,
                  strengthen cardio-respiratory function and improve posture.
                </p>
                <img src="~assets/elasticity.png" alt="training_5" />
              </div>
            </q-carousel-slide>
            <q-carousel-slide
              name="training_6"
              class="column no-wrap flex-center"
            >
              <div class="eight_inner_box">
                <h5>Fluid resistance mode:</h5>
                <p>
                  Imitate characteristics of wind resistance and water
                  resistance rowing machine, to the legs, waist, upper limbs,
                  chest. The muscles of the lower back and back back have a
                  better effect, which can achieve the effect of aerobic
                  exercise of the whole body muscles. There are many hears for
                  resistance adjustment, no noise, and can strengthen the legs.
                  The muscles of the waist, upper limbs, chest, back can also be
                  improved cardiopulmonary function, fat reduction and shaping
                  effects.
                </p>
                <img src="~assets/10.jpeg" alt="training_1" />
              </div>
            </q-carousel-slide>
            <q-carousel-slide
              name="training_7"
              class="column no-wrap flex-center"
            >
              <div class="eight_inner_box">
                <h5>Rehabilitation training mode:</h5>
                <p>
                  Provide accurate assistive force and data feedback to assist
                  the rehabilitated effective joint activities, aiming at
                  passive flexion and extension of knee joints, hip joints,
                  waist and muscles. Muscle massage stretches to prevent
                  contracture and deformation, and achieve muscle relaxation and
                  lightening under static conditions. The tension of the limbs,
                  correct the posture, especially when the patient is unable to
                  move the joints autonomously or the range of motion does not
                  reach the normal value, and does not have enough strength to
                  complete the active movement. Under the guidance of a doctor,
                  the patient himself can also use this device alone to assist.
                  The exercise performed by the affected limb greatly reduces
                  the workload of the doctor.
                </p>
                <img src="~assets/shot.png" alt="training_1" />
              </div>
            </q-carousel-slide>
            <q-carousel-slide
              name="training_8"
              class="column no-wrap flex-center"
            >
              <div class="eight_inner_box">
                <h5>Use of multiple instruments (treadmill):</h5>
                <p>
                  The intelligent comprehensive training device can be used in
                  conjunction with a variety of equipment: it can be used with
                  treadmills. In addition to the functional training bench used
                  in conjunction, it can also be used with spinning, abdominal
                  muscle boards and shoulder pushing benches. Use other exercise
                  equipment together to obtain exercise data. Place a treadmill
                  directly in front of the intelligent comprehensive trainer and
                  use the treadmill when the time, the intelligent comprehensive
                  trainer can adjust the boom of the wall-hanging machine to be
                  parallel to the ground, high. Adjust the angle to the height
                  of the human elbow, and adjust the angle to be perpendicular
                  to the wall, as a treadmill. The armrest can be used; it can
                  also be used as a TV, which can reduce the dullness of
                  running.
                </p>
                <img src="~assets/shot.png" alt="training_1" />
              </div>
            </q-carousel-slide>
            <q-carousel-slide
              name="training_9"
              class="column no-wrap flex-center"
            >
              <div class="eight_inner_box">
                <h5>Use with multi-function training stools:</h5>
                <p>
                  Place a multi-function training bench in front of the
                  wall-mounted, adjust the boom to the appropriate position, and
                  use the handle or long tension bar to do a push-out action,
                  sitting post-pull action, etc. Implement the function of the
                  bench press trainer.
                </p>
                <img src="~assets/hh1.jpeg" alt="training_1" />
              </div>
            </q-carousel-slide>
            <q-carousel-slide
              name="training_10"
              class="column no-wrap flex-center"
            >
              <div class="eight_inner_box">
                <h5>Rehabilitation training mode:</h5>
                <p>
                  Provide accurate assistive force and data feedback to assist
                  the rehabilitated effective joint activities, aiming at
                  passive flexion and extension of knee joints, hip joints,
                  waist and muscles. Muscle massage stretches to prevent
                  contracture and deformation, and achieve muscle relaxation and
                  lightening under static conditions. The tension of the limbs,
                  correct the posture, especially when the patient is unable to
                  move the joints autonomously or the range of motion does not
                  reach the normal value, and does not have enough strength to
                  complete the active movement. Under the guidance of a doctor,
                  the patient himself can also use this device alone to assist.
                  The exercise performed by the affected limb greatly reduces
                  the workload of the doctor.
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
            width="100%"
            class="bg-white shadow-1 rounded-borders"
          >
            <q-carousel-slide name="style" class="column no-wrap flex-center">
              <div class="eight_inner_box">
                <h5>Smart accessories - Wide choice</h5>
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
                <h5>Different installation methods meet different needs</h5>
                <img src="~assets/installation.png" alt="training_1" />
                <p>
                  Home-style wall-mounted installation can save space and enjoy
                  smart fitness equipment. Beautifully decorated home atmosphere
                </p>
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="tv" class="column no-wrap flex-center">
              <div class="eight_inner_box">
                <h5>Different installation methods meet different needs</h5>
                <img src="~assets/installation-2.png" alt="training_1" />
                <p>
                  Stable floor stand installation, super strong. The floor
                  suction cup is more stable and suitable for in various venues
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
                <h5>Basic information</h5>
                <p>ATHLETIC POWER</p>
                <p>
                  Maximum 60kg on each side, with a variety of strength modes,
                  intelligent strength. Matching, intelligent motion protection
                  function.
                </p>
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="tv" class="column no-wrap flex-center">
              <div class="eight_inner_box">
                <h5>SCREEN</h5>
                <p>32 inch high-definition touch screen.</p>
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="layers" class="column no-wrap flex-center">
              <div class="eight_inner_box">
                <h5>POWER SUPPLY</h5>
                <p>
                  Built-in energy recovery for maximum energy savings. External
                  power supply 110v ac or 220v ac.
                </p>
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="map" class="column no-wrap flex-center">
              <div class="eight_inner_box">
                <h5>PRODUCT SIZE</h5>
                <p>138.5cm * 79.5cm * 28.5cm</p>
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="style-1" class="column no-wrap flex-center">
              <div class="eight_inner_box">
                <h5>PACKAGE SIZE</h5>
                <p>141cm * 83cm * 25cm</p>
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="tv-1" class="column no-wrap flex-center">
              <div class="eight_inner_box">
                <h5>PRODUCT WEIGHT</h5>
                <p>68kg</p>
              </div>
            </q-carousel-slide>
            <q-carousel-slide
              name="layers-1"
              class="column no-wrap flex-center"
            >
              <div class="eight_inner_box">
                <h5>PRODUCT GROSS WEIGHT</h5>
                <p>83kg</p>
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
      </div>
    </div>
    <div class="achievement">
      <div class="text-box">
        <h5>Achievement</h5>
        <p>
          The last 6 months was a really tough period for our company but we did
          our best to get here today.
        </p>
        <h5>Over 10000 + users over 220 + moves no membership fees</h5>
        <p>And also our Smart Home Gym already exported to these countries:</p>
        <h5>* Russia * Uzbekistan * Indonesia * USA * Tanzania * Thailand</h5>
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
      slide: ref("style"),
      slide_2: ref("style"),
      slide_3: ref("style"),
      slide_4: ref("style"),
      slide_5: ref("style"),
      lorem:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.",
    };
  },
});
</script>
