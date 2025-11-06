<script setup></script>

<!-- tailwind tamplate사용 -->
<template>
  <div
    class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="mx-auto h-10 w-auto"
        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      />
    </div>
    <!-- slot 자리에 부모 컴포넌트 GuestLayout 감싼 자식 컴포넌트가 랜더링됨 -->
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped></style>
