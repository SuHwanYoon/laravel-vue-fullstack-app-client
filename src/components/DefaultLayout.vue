 <!--tamplate 블록은 HTML구조, script에서정의된 데이터나 상태를 표시, 
  사용자의 상호작용(클릭 입력)등을 처리하기 위한 이벤트처리연결, 목록 반복 및 조건부 렌더링 처리가 들어감 -->
<template>
  <!-- RouterView는 Vue Router에 의해 현재 경로에 해당하는 컴포넌트를 렌더링하는 자리입니다. -->
  <!-- 예를 들어, /home 경로로 이동하면 Home.vue 컴포넌트가 이 자리에 표시됩니다. -->
  <RouterView />
</template>

<!-- script블록은 컴포넌트의 데이터, 로직, 상태를 정의함 화면이 어떻게 동작할지를 정의 -->
<script setup>
// 이 <script setup> 블록은 Vue 3의 Composition API를 사용하여 컴포넌트 로직을 작성하는 곳입니다.
// 현재는 비어 있지만, 나중에 상태(data), 메서드(methods), 라이프사이클 훅(lifecycle hooks) 등을 추가할 수 있습니다.
</script>

<style lang="scss" scoped>

</style>