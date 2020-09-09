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
              <b>{{userDetails.name}}</b>
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

        <!-- New password -->
        <div class="column" v-show="oldPassword.password.length>0">
          <label>New Password</label>
          <q-input
            :type="newPassword.isPassword ? 'password' : 'text'"
            filled
            outlined
            v-model="newPassword.password"
            label="Password *"
          >
            <template v-slot:prepend>
              <q-icon name="vpn_key" />
            </template>
            <template v-slot:append>
              <q-icon
                :name="newPassword.isPassword ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="newPassword.isPassword = !newPassword.isPassword"
              />
            </template>
          </q-input>

          <label>Confirm New Password</label>
          <q-input
            :type="confirmNewPassword.isPassword ? 'password' : 'text'"
            filled
            outlined
            v-model="confirmNewPassword.password"
            label="Password *"
          >
            <template v-slot:prepend>
              <q-icon name="vpn_key" />
            </template>
            <template v-slot:append>
              <q-icon
                :name="confirmNewPassword.isPassword ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="confirmNewPassword.isPassword = !confirmNewPassword.isPassword"
              />
            </template>
          </q-input>
        </div>

        <!-- Change password status -->
        <div class="column btns" v-show="oldPassword.password.length>0 ">
          <div v-show="newPassword.password==confirmNewPassword.password">
            <q-btn
              rounded
              label="Save"
              type="submit"
              color="primary"
              icon-right="save"
              size="18px"
              @click="savePassword"
            />
          </div>
          <div v-show="newPassword.password!=confirmNewPassword.password">
            <q-banner inline-actions class="text-white bg-red">The passwords don't match.</q-banner>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userDetails: {
        name: "Divyaswor Makai",
        country: "Nepal",
        age: 22,
        gender: "Male",
        email: "makaidivya@gmail.com",
        contact: "+977-9860656332",
      },
      imageSrc: "https://homepages.cae.wisc.edu/~ece533/images/boat.png",
      oldPassword: {
        password: "",
        isPassword: true,
      },
      newPassword: {
        password: "",
        isPassword: true,
      },
      confirmNewPassword: {
        password: "",
        isPassword: true,
      },
    };
  },
  methods: {
    savePassword() {
      console.log("Password");
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: content-box;
  margin: 0px;
  padding: 0px;
}
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
  min-height: 30vh;
  .row {
    display: flex;
    flex-direction: row;

    width: 100%;
    .column {
      min-width: 30%;
      padding: 0px 10px;
    }
    .btns {
      display: flex;
      justify-content: center;
    }
  }
}
</style>
