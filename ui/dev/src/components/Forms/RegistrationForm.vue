<template>
  <div class="registration-form">
    <div class="login-link">
      <q-btn flat color="primary" label="Sign In" @click="changeForm" icon="arrow_back" />
    </div>
    <div class="left-content">
      <div class="card">
        <div class="text-h5 text-center">Sign Up</div>

        <q-card-section class="card-content">
          <q-form class="q-gutter-md form" ref="registrationForm">
            <!-- First row -->
            <div class="form-row">
              <!-- First Name -->
              <q-input
                filled
                outlined
                clearable
                class="form-row-elem-2"
                v-model="form.fname"
                label="First Name"
                color="primary"
                hint="First Name: John"
                lazy-rules
                :rules="[emptyRule]"
              />
              <!-- Last Name -->
              <q-input
                filled
                outlined
                clearable
                class="form-row-elem-2"
                type="email"
                v-model="form.lname"
                label="Last Name"
                color="primary"
                hint="Last Name:Doe"
                lazy-rules
                :rules="[emptyRule]"
              />
            </div>

            <!-- Second row -->
            <div class="form-row">
              <!-- Age -->
              <q-input
                filled
                outlined
                clearable
                type="number"
                class="form-row-elem-3"
                v-model="form.age"
                label="Age"
                color="primary"
                hint="Age: 18"
                lazy-rules
                :rules="[ emptyRule,ageRule]"
              />
              <!-- Gender -->
              <q-select
                filled
                outlined
                clearable
                class="form-row-elem-3"
                v-model="form.gender"
                label="Gender"
                color="primary"
                hint="Gender: Male/Female/Others"
                :options="genderOptions"
                lazy-rules
                :rules="[ emptyRule]"
              />
              <!-- Country -->
              <q-select
                filled
                outlined
                clearable
                class="form-row-elem-3"
                type="email"
                v-model="form.country"
                label="Country"
                color="primary"
                hint="Country: Nepal"
                :options="countryOptions"
                lazy-rules
                :rules="[emptyRule]"
              />
            </div>
            <!-- Contact -->
            <q-input
              filled
              outlined
              clearable
              type="tel"
              v-model="form.contact"
              label="Contact number *"
              color="primary"
              hint="Contact Number: 986543210"
              lazy-rules
              :rules="[ emptyRule, contactRule]"
            >
              <template v-slot:prepend>
                <q-icon name="call" color="primary" />
              </template>
            </q-input>
            <!-- Email -->
            <q-input
              filled
              outlined
              clearable
              type="email"
              v-model="form.email"
              label="Email *"
              color="primary"
              hint="For example: johndoe@gmail.com"
              lazy-rules
              :rules="[emptyRule,emailRule]"
            >
              <template v-slot:prepend>
                <q-icon name="person" color="primary" />
              </template>
            </q-input>
            <!-- Password and save passwords -->
            <confirm-password-comp
              :status="isOk"
              :showWarning="showWarning"
              @changeStatus="isOk=$event"
              @getPassword="password=$event"
            ></confirm-password-comp>
            <!-- Buttons -->
            <div class="btns">
              <q-btn
                label="Sign Up"
                type="submit"
                color="primary"
                :disable="isOk"
                @click.native.prevent="submitForm"
                icon="how_to_reg"
                size="18px"
              />
              <q-btn
                label="Reset"
                type="reset"
                color="primary"
                flat
                size="16px"
                icon-right="clear_all"
                @click="resetDetails"
              />
            </div>
          </q-form>
        </q-card-section>
      </div>
    </div>
    <div class="right-content">
      <img :src="background" alt="Bg Img" id="bg" />
      <img :src="logo" alt="logo" id="logo" />
    </div>
  </div>
</template>

<script>
import { assetsMixin, registrationMixin } from "src/utils/mixin";
import userService from "src/services/userService";

export default {
  mixins: [assetsMixin, registrationMixin],
  data() {
    return {
      // General info data for the user
      form: {
        fname: "",
        lname: "",
        email: "",
        age: 0,
        gender: "",
        country: "",
        contact: 0,
        password: "",
      },

      //For the password setting component
      isOk: false,
      showWarning: false,
    };
  },
  methods: {
    async submitForm() {
      let validation = await this.$refs.registrationForm.validate();
      if (validation) {
        let userDetails = {
          fname: this.fname,
          lname: this.lname,
          email: this.email,
          age: this.age,
          gender: this.gender,
          country: this.country,
          contact: this.contact,
          password: this.password,
        };
        let user = await userService.userRegister(userDetails);
        if (user.error) {
          console.log(user.error);
          this.$emit("setErrorMessage", user.error);
        } else {
          //save data to localStorage
          localStorage.setItem("user-ext-user-id", user.id);
          //redirecto to new page
          // this.$router.push("/profile");
        }
      }
    },
    resetDetails() {
      this.email = "";
      this.password = "";
    },
    changeForm() {
      this.$emit("changeActiveForm", "login");
    },
  },
  components: {
    errorBanner: () => import("components/shared/ErrorBanner.vue"),

    confirmPasswordComp: () =>
      import("components/shared/ConfirmPasswordComponent.vue"),
  },
};
</script>


<style lang="scss" scoped>
@import "../../css/quasar.mixin.scss";

.login-link {
  position: absolute;
  top: 10px;
  left: 10px;
}

.registration-form {
  @include flexCenter(center, center);
  min-height: 100vh;
  max-width: 100vw;
  .left-content {
    padding: 20px 0px;
    width: 60%;
    height: 100%;
    .card {
      @include flexCenter(center, center);
      flex-direction: column;
      height: 100%;
      width: 100%;
      .card-content {
        @include flexCenter(center, center);
        width: 100%;
      }
      .form {
        width: 80%;
        .form-row {
          @include flexCenter(space-around, center);
          flex-direction: row;
          .form-row-elem-2 {
            width: 48%;
          }
          .form-row-elem-3 {
            width: 31%;
          }
        }
      }
    }
  }

  .right-content {
    width: 40%;
    height: 100%;
    overflow: hidden;
    #bg {
      position: fixed;
      right: -40px;
      height: 100%;
      top: 0px;
    }
    #logo {
      position: fixed;
      top: 10px;
      right: 10px;
      height: 30px;
    }
  }
}

.btns {
  @include flexCenter(center, center);
}
</style>

