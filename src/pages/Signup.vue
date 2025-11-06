<!-- eslint-disable no-unused-vars -->
<script setup>
import { ref } from "vue";
import GuestLayout from "../components/GuestLayout.vue";
import axiosClient from "@/axios.js";

// data는 회원가입 폼의 입력 필드 값을 저장하는 반응형 객체입니다.
// ref는 Vue 3 Composition API에서 반응형 상태를 선언할 때 사용됩니다.
// `ref`로 감싸진 변수는 `.value` 속성을 통해 접근하고 수정할 수 있습니다.
const data = ref({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});

// ref를 이용한 문자열 errorMessage
// ref는 Vue 3 Composition API에서 반응형 상태를 선언할 때 사용됩니다.
// `ref`로 감싸진 변수는 `.value` 속성을 통해 접근하고 수정할 수 있습니다.
const errorMessage = ref("");

// 회원가입 form의 /register에 PostRequest할 submit함수
async function submit() {
  try {
    await axiosClient.get("/sanctum/csrf-cookie");
    await axiosClient.post("/register", data.value);
  } catch (error) {
    console.log(error);
    errorMessage.value = error.response.data.message;
  }
}
</script>

<template>
  <GuestLayout>
    <h2
      class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900"
    >
      Create New Account
    </h2>

    <!-- Sign up form 위쪽에 에러메세지 출력-->
    <!-- div 블록에 v-if 디렉티브를 사용 -->
    <div
      v-if="errorMessage"
      class="mt-4 py-2 px-3 rounded text-white bg-red-400 sm:mx-auto sm:w-full sm:max-w-sm" >
      {{ errorMessage }}
    </div>

    <div class="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-4" @submit.prevent="submit">
        <!-- 이름 입력필드 -->
        <div>
          <label for="name" class="block text-sm/6 font-medium text-gray-900"
            >Full Name</label
          >
          <div class="mt-2">
            <input
              id="name"
              v-model="data.name"
              name="name"
              required
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>
        <!-- 이메일 입력필드 -->
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
        <!-- 비밀번호 입력필드-->
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
              required
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>
        <!-- 비밀번호 확인 입력필드-->
        <div>
          <div class="flex items-center justify-between">
            <label
              for="passwordConfirmation"
              class="block text-sm/6 font-medium text-gray-900"
            >
              Repeat Password</label
            >
          </div>
          <div class="mt-2">
            <input
              id="passwordConfirmation"
              v-model="data.password_confirmation"
              type="password"
              name="password"
              required
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>
        <!-- 회원가입 버튼 -->
        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Create an Account
          </button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm/6 text-gray-500">
        Already have an account?
        {{ " " }}
        <!-- RouterLink는 클릭하면 지정된 경로로 이동합니다.
        `:to` 속성은 이동할 경로를 지정하며, 객체 형태로 `name` 속성을 사용하여 라우트 이름을 지정할 수 있습니다.-->
        <RouterLink
          :to="{ name: 'Login' }"
          class="font-semibold text-indigo-600 hover:text-indigo-500"
        >
          Login from here
        </RouterLink>
      </p>
    </div>
  </GuestLayout>
</template>

<style scoped></style>
