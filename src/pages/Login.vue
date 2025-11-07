<!-- eslint-disable no-unused-vars -->
<script setup>
import axiosClient from "@/axios.js";
import router from "@/router";
import { ref } from "vue";
import GuestLayout from "../components/GuestLayout.vue";

// data는 로그인 폼의 입력 필드 값을 저장하는 반응형 객체입니다.
// ref는 Vue 3 Composition API에서 반응형 상태를 선언할 때 사용됩니다.
// `ref`로 감싸진 변수는 `.value` 속성을 통해 접근하고 수정할 수 있습니다.
// .value를 하지않고 data상태로 사용하면 Vue에서 경고메세지를 출력함
const data = ref({
  email: "",
  password: "",
});
// ref를 이용한 문자열 errorMessage
// ref는 Vue 3 Composition API에서 반응형 상태를 선언할 때 사용됩니다.
// `ref`로 감싸진 변수는 `.value` 속성을 통해 접근하고 수정할 수 있습니다.
const errorMessage = ref("");


// Login form의 /login에 PostRequest할 submit함수
function submit() {
  // eslint-disable-next-line no-unused-vars
  axiosClient.get("/sanctum/csrf-cookie").then((response) => {
    // axiosInstance의 .then은 Promise를 반환
    // /login path로 form에 입력된 data.value값을 post request
    axiosClient.post("/login", data.value)
    .then((response) => {
      router.push({ name: "Home" });
    })
    .catch((error) => {
      // error은 Axios의 json error임
      // json구조를 참고해서 해당하는 key를 찾아서 정확히 참조해야함
      console.log(error);
      errorMessage.value = error.response.data.message;
    });
  });
}
</script>

<template>
  <GuestLayout>
    <h2
      class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900"
    >
      Sign in to your account
    </h2>

    <!-- login 위쪽에 에러메세지 출력-->
    <!-- div 블록에 v-if 디렉티브를 사용 -->
    <div
      v-if="errorMessage"
      class="mt-4 py-2 px-3 rounded text-white bg-red-400 sm:mx-auto sm:w-full sm:max-w-sm">
      {{ errorMessage }}
    </div>

    <div class="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
      <!-- @는 vue에서 v-on의 축약형 @submit는 form의 submit동작을감지하고 가로챔-->
      <!-- v-on은 vue의 디렉티브이고 vue에서 html태그에 기능을 추가하기위한 문법 -->
      <!-- submit가 되지만 페이지의 새로고침은 막기위해서 prevent처리 -->
      <form class="space-y-6" @submit.prevent="submit">
        <div>
          <label for="email" class="block text-sm/6 font-medium text-gray-900"
            >Email address</label
          >
          <div class="mt-2">
            <input
              id="email"
              v-model="data.email"
              type="email"
              name="email"
              autocomplete="email"
              required
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm/6 font-medium text-gray-900"
              >Password</label
            >
          </div>
          <div class="mt-2">
            <input
              id="password"
              v-model="data.password"
              type="password"
              name="password"
              autocomplete="current-password"
              required
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm/6 text-gray-500">
        Not a member?
        {{ " " }}
        <RouterLink
          :to="{ name: 'Signup' }"
          class="font-semibold text-indigo-600 hover:text-indigo-500"
        >
          Create an Account
        </RouterLink>
      </p>
    </div>
  </GuestLayout>
</template>

<style scoped></style>
