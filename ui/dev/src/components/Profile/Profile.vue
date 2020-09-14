<template>
  <div class="profile-content">
    <h4>User Details</h4>
    <br />
    <hr />
    <div class="user-profile">
      <!-- First columsn of user details -->
      <div class="user-details">
        <!-- First row -->
        <div class="user-details-row">
          <!-- Full name -->
          <div class="row-elem">
            <label for="name">Full Name</label>
            <p>
              <b>{{userDetails.fname+" "+userDetails.lname}}</b>
            </p>
          </div>
        </div>
        <!-- Second row -->
        <div class="user-details-row">
          <!-- Country -->
          <div class="row-elem">
            <label for="country">Country</label>
            <p>
              <b>{{userDetails.country}}</b>
            </p>
          </div>
          <!-- Gender -->
          <div class="row-elem">
            <label for="gender">Gender</label>
            <p>
              <b>{{userDetails.gender}}</b>
            </p>
          </div>
          <!-- Age -->
          <div class="row-elem">
            <label for="age">Age</label>
            <p>
              <b>{{userDetails.age}}</b>
            </p>
          </div>
        </div>
        <!-- Contact -->
        <div class="user-details-row">
          <div class="row-elem">
            <label for="name">Contact Details</label>
            <p>
              <b>{{userDetails.contact}}</b>
            </p>
          </div>
        </div>
        <!-- Email -->
        <div class="user-details-row">
          <div class="row-elem">
            <label for="name">Email</label>
            <p>
              <b>{{userDetails.email}}</b>
            </p>
          </div>
        </div>
      </div>
      <!-- Second column of user picture -->
      <div class="user-pic">
        <div>
          <img src="https://homepages.cae.wisc.edu/~ece533/images/boat.png" spinner-color="white" />
        </div>
      </div>
    </div>
    <div class="user-password-change">
      <h5>Change Password</h5>
      <div class="row">
        <!-- Old password -->
        <div class="column">
          <label>Old Password</label>
          <q-input
            :type="oldPassword.isPassword ? 'password' : 'text'"
            filled
            outlined
            v-model="oldPassword.password"
            label="Old Password"
          >
            <template v-slot:prepend>
              <q-icon name="vpn_key" />
            </template>
            <template v-slot:append>
              <q-icon
                :name="oldPassword.isPassword ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="oldPassword.isPassword = !oldPassword.isPassword"
              />
            </template>
          </q-input>
        </div>

        <!-- New password and confirm password -->
        <div class="column">
          <confirm-password-comp
            :status="isOk"
            :showWarning="showWarning"
            @changeStatus="isOk=$event"
            v-show="oldPassword.password.length>0"
          ></confirm-password-comp>
        </div>

        <!-- Change password status -->
        <div class="column btns" v-show="oldPassword.password.length>0">
          <q-btn
            rounded
            label="Save"
            type="submit"
            color="primary"
            icon-right="save"
            size="18px"
            :disable="isOk"
            @click="savePassword"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userService from "src/services/userService";
export default {
  async beforeMount() {
    let id = localStorage.getItem("user-ext-user-id");
    console.log(id);
    let user = await userService.userProfile(id);
    console.log(user);
    delete user.password;
    this.userDetails = user;
  },
  data() {
    return {
      userDetails: {
        fname: "",
        lname: "",
        country: "",
        age: 0,
        gender: "",
        email: "",
        contact: "",
      },
      imageSrc: "https://homepages.cae.wisc.edu/~ece533/images/boat.png",
      oldPassword: {
        password: "",
        isPassword: true,
      },
      isOk: false,
      showWarning: true,
    };
  },
  methods: {
    savePassword() {
      console.log("Password");
    },
  },
  components: {
    confirmPasswordComp: () =>
      import("components/shared/ConfirmPasswordComponent.vue"),
  },
};
</script>

<style lang="scss" scoped>
p {
  font-size: 20px;
}

.profile-content {
  margin: 20px 50px;
}

.user-profile {
  max-width: 100%;
  display: flex;
  flex-direction: row;
  background: linear-gradient(white, wheat);
  padding-bottom: 20px;
  border-radius: 10px;
  .user-details {
    width: 40%;
    display: flex;
    flex-direction: column;
    .user-details-row {
      padding: 10px 20px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
  .user-pic {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 300px;
      width: 300px;
      border-radius: 50%;
    }
  }
}

.user-password-change {
  width: 100%;
  min-height: 50vh;
  .row {
    display: flex;
    flex-direction: row;

    width: 100%;
    .column {
      min-width: 33%;
      padding: 0px 10px;
    }
    .btns {
      display: flex;
      justify-content: center;
    }
  }
}
</style>
