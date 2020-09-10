<template>
  <div class="registration-form">
    <q-card bordered>
      <q-card-section class="bg-secondary text-white">
        <div class="text-h5">Sign Up in the portal</div>
      </q-card-section>

      <q-separator inset />

      <q-card-section>
        <q-form class="q-gutter-md">
          <!-- First row -->
          <div class="form-row">
            <!-- First Name -->
            <q-input
              filled
              outlined
              clearable
              class="form-row-elem-2"
              v-model="fname"
              label="First Name"
              color="secondary"
              hint="First Name: John"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'First name is required']"
            />
            <!-- Last Name -->
            <q-input
              filled
              outlined
              clearable
              class="form-row-elem-2"
              type="email"
              v-model="lname"
              label="Last Name"
              color="secondary"
              hint="Last Name:Doe"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Last name is required']"
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
              v-model="age"
              label="Age"
              color="secondary"
              hint="Age: 18"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Age is required']"
            />
            <!-- Gender -->
            <q-select
              filled
              outlined
              clearable
              class="form-row-elem-3"
              v-model="gender"
              label="Gender"
              color="secondary"
              hint="Gender: Male/Female/Others"
              :options="genderOptions"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Gender is required']"
            />
            <!-- Country -->
            <q-select
              filled
              outlined
              clearable
              class="form-row-elem-3"
              type="email"
              v-model="country"
              label="Country"
              color="secondary"
              hint="Country: Nepal"
              :options="countryOptions"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Country is required']"
            />
          </div>
          <!-- Contact -->
          <q-input
            filled
            outlined
            clearable
            type="tel"
            v-model="contact"
            label="Contact number *"
            color="secondary"
            hint="Contact Number: 986543210"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please enter contact details']"
          >
            <template v-slot:prepend>
              <q-icon name="call" />
            </template>
          </q-input>
          <!-- Email -->
          <q-input
            filled
            outlined
            clearable
            type="email"
            v-model="email"
            label="Email *"
            color="secondary"
            hint="For example: johndoe@gmail.com"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          >
            <template v-slot:prepend>
              <q-icon name="email" />
            </template>
          </q-input>
          <!-- Password and save passwords -->
          <confirm-password-comp
            :status="isOk"
            :showWarning="showWarning"
            @changeStatus="isOk=$event"
          ></confirm-password-comp>
          <!-- Buttons -->
          <div class="btns">
            <q-btn
              label="Sign Up"
              type="submit"
              color="secondary"
              :disable="isOk"
              @click.native.prevent="submitForm"
              icon="how_to_reg"
              size="18px"
            />
            <q-btn
              label="Reset"
              type="reset"
              color="secondary"
              flat
              size="16px"
              icon-right="clear_all"
              @click="resetDetails"
            />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // General info data for the user
      fname: "",
      lname: "",
      email: "",
      age: 0,
      gender: "",
      country: "",
      contact: 0,
      genderOptions: ["Male", "Female", "Others"],
      countryOptions: ["Nepal", "India", "China", "Bhutan", "Pakistan"],

      //For the password setting component
      isOk: false,
      showWarning: false,
    };
  },
  methods: {
    submitForm() {
      console.log("Submit");
    },
    resetDetails() {
      this.email = "";
      this.password = "";
    },
  },
  components: {
    confirmPasswordComp: () => import("../shared/ConfirmPasswordComponent.vue"),
  },
};
</script>

<style lang="scss">
.registration-form {
  background: red;
  width: 60%;
}
.form-row {
  box-sizing: content-box;
  width: 100%;
  display: flex;
  justify-content: space-around;
  .form-row-elem-2 {
    width: 50%;
    margin-right: 15px;
  }
  .form-row-elem-3 {
    width: 30%;
    margin-right: 15px;
  }
}
.btns {
  display: flex;
  justify-content: center;
}
</style>
