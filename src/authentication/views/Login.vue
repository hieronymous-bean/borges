<template>
  <div class="flex mx-auto items-center min-h-screen min-w-screen bg-white dark:bg-gray-900">
    <div class="container mx-auto">
      <div class="mx-auto">
        <img src="../../assets/images/logo.png">
          <div class="">
            <button v-show="!this.UserIsLoggedIn" v-on:click="login()" type="button" class="w-full block bg-white hover:bg-gray-50 focus:bg-gray-100 text-gray-900 font-semibold rounded-sm px-4 py-3 border border-gray-300">
              <div class="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="w-6 h-6" viewBox="0 0 48 48"><defs><path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z"/><path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"/><path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"/><path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"/></svg>
                <span class="ml-4">
                Log in with Google</span>
            </div>
          </button>
          <div class="text-xl" v-show="this.UserIsLoggedIn">You are already logged in.<br/><router-link to="/" class="text-primary text-md underline cursor-pointer">Click here</router-link> to go to the dashboard.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
async function loginProcessing() {
  $store.dispatch('authentication/login').then(() => {
    return this.$router.push('/');
  });
}
export default {
  name: "LoginPage",
  data: () => ({

  }),
  components: {

  },
  computed: {
    UserIsLoggedIn() {
      if (this.$store.getters['authentication/isAuthenticated']) return true;
    }
  },
  methods: {
    login() {
      this.$store.dispatch('authentication/login').then((res) => {
        return res
      });
    }
  }
}
</script>