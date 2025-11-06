<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable no-unused-vars -->
<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-gray-100">
    <body class="h-full">
    ```
  -->
  <div class="min-h-full">
    <Disclosure v-slot="{ open }" as="nav" class="bg-gray-800">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex items-center">
            <div class="shrink-0">
              <img
                class="size-8"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <!-- v-for 디렉티브는 `navigation` 배열의 각 항목에 대해 반복하여 링크를 생성합니다. -->
                 <!-- navigation은 script블록 내부에 정의된 js객체를 넣어놓은 배열 변수입니다.-->
                  <!-- 즉 메뉴를 반복해서 렌더링 하는것이다 -->
                   <!-- key는 참조할 변수를 지정 -->
                    <!-- to는 참조할 변수안에서 어디로 갈건지 지정 -->
                <RouterLink
                  v-for="item in navigation"
                  :key="item.name"
                  :to="item.to"
                  :class="[
                    // $route는 현재 URL과 관련된 라우트 정보가 담긴 개체로 Vue Router가 주입해주는것
                    // 현재 페이지, URL, 라우트 이름이 뭔지 알려주는 읽기 전용 상태
                    // 메뉴선택시 선택한 메뉴 강조 삼항 연산 로직
                    $route.name === item.to.name
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white',
                    'rounded-md px-3 py-2 text-sm font-medium',
                  ]"
                  :aria-current="$route.name === item.to.name ? 'page' : undefined">
                  {{ item.name }}
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="ml-4 flex items-center md:ml-6">


              <!-- Profile dropdown -->
              <Menu as="div" class="relative ml-3">
                <MenuButton
                  class="relative flex max-w-xs items-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  <span class="absolute -inset-1.5"></span>
                  <span class="sr-only">Open user menu</span>
                  <img
                    class="size-8 rounded-full outline outline-1 -outline-offset-1 outline-white/10"
                    :src="user.imageUrl"
                    alt=""
                  />
                </MenuButton>

                <transition
                  enter-active-class="transition ease-out duration-100"
                  enter-from-class="transform opacity-0 scale-95"
                  enter-to-class="transform scale-100"
                  leave-active-class="transition ease-in duration-75"
                  leave-from-class="transform scale-100"
                  leave-to-class="transform opacity-0 scale-95"
                >
                  <MenuItems
                    class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg outline outline-1 outline-black/5"
                  >
                  <!-- 로그아웃 버튼메뉴 -->
                    <MenuItem>
                      <button
:class="['block px-4 py-2 text-sm text-gray-700',]"
                        @click="logout">
                         Sign Out
                      </button>
                    </MenuItem>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
          </div>
          <div class="-mr-2 flex md:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton
              class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
            >
              <span class="absolute -inset-0.5"></span>
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block size-6" aria-hidden="true" />
              <XMarkIcon v-else class="block size-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </div>
      </div>
      <!-- DisclosurePanel은  Headless UI에서 제공하는 메뉴펼치는 햄버거버튼 클릭시 나타는 패널  -->
       <!-- md:hidden으로 인해 반응형으로 중간이상이면 숨기고 중간이하로 화면 작아지면 나타난다 -->
      <DisclosurePanel class="md:hidden">
        <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
      <!-- DisclosureBoutton은  메뉴펼치는 햄버거버튼 클릭시 나타는 패널  -->
          <RouterLink
            v-for="item in navigation"
            :key="item.name"
            :to="item.to"
            :class="[
              $route.name === item.to.name
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-white/5 hover:text-white',
              'block rounded-md px-3 py-2 text-base font-medium',
            ]"
            :aria-current="$route.name === item.to.name ? 'page' : undefined">
              {{ item.name }}
          </RouterLink>
        </div>
        <div class="border-t border-white/10 pb-3 pt-4">
          <div class="flex items-center px-5">
            <div class="shrink-0">
              <img
                class="size-10 rounded-full outline outline-1 -outline-offset-1 outline-white/10"
                :src="user.imageUrl"
                alt=""
              />
            </div>
            <div class="ml-3">
              <div class="text-base/5 font-medium text-white">
                {{ user.name }}
              </div>
              <div class="text-sm font-medium text-gray-400">
                {{ user.email }}
              </div>
            </div>

          </div>
          <div class="mt-3 space-y-1 px-2">
            <DisclosureButton
              class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-white/5 hover:text-white"
              @click="logout">
                Sign Out
            </DisclosureButton>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>

    <!-- 여기에 URL path에 따른 component가 표시됨 -->
    <RouterView />
  </div>
</template>

<script setup>
// import axiosClient from "@/axios";
import router from "@/router";
import useUserStore from "@/store/user";
import {
  Disclosure,
  DisclosureButton,

  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import { computed } from "vue";

const userStore = useUserStore();

const user = computed(() => {
  return userStore.user;
});


// const user = {
//   name: "YOON SUHWAN",
//   email: "yoon@example.com",
//   imageUrl:
//     "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
// };
const navigation = [
  { name: "Upload", to: { name: "Home" } },
  { name: "My Images", to: { name: "MyImages" } },
];
// 유저메뉴사용안함
// const userNavigation = [
//   { name: "Your profile", href: "#" },
//   { name: "Settings", href: "#" },
//   { name: "Sign out", href: "#" },
// ];

// 로그아웃 버튼클릭시 상태관리 userStore에서 함수호출
// 실행하고 Login 페이지로 이동
function logout() {
  userStore.logoutUser().then(() => {
    router.push({ name: "Login" });
  });
}
</script>

<style lang="scss" scoped></style>
