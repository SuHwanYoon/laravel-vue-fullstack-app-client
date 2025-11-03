<script setup>
// 임시 이미지 데이터 배열
const images = [
  // 각 이미지 객체는 고유 id, 라벨, 이미지 URL을 포함
  {
    id: 1,
    label: "Label 1",
    url: "https://via.placeholder.com/300x200.png?text=Image+1",
  },
  {
    id: 2,
    label: "Label 2",
    url: "https://via.placeholder.com/300x200.png?text=Image+2",
  },
  {
    id: 3,
    label: "Label 3",
    url: "https://via.placeholder.com/300x200.png?text=Image+3",
  },
  {
    id: 4,
    label: "Label 4",
    url: "https://via.placeholder.com/300x200.png?text=Image+4",
  },
];
</script>

<template>
  <!-- 페이지 헤더 섹션 -->
  <header class="relative bg-white shadow">
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900">My Images</h1>
    </div>
  </header>
  <!-- 메인 콘텐츠 영역 -->
  <main>
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <!-- 이미지 목록을 표시하는 그리드 레이아웃 -->
      <div
        class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <!-- images 배열을 순회하며 각 이미지를 카드 형태로 렌더링 -->
        <div
          v-for="image in images"
          :key="image.id"
          class="bg-white overflow-hidden shadow rounded-lg"
        >
          <!-- 이미지 썸네일 -->
          <img :src="image.url" alt="Image" class="w-full h-48 object-contain" />
          <div class="px-4 py-4">
            <!-- 이미지 이름 (현재는 image.name이 없으므로 비어있음) -->
            <h3 class="text-lg font-semibold text-gray-900"> {{ image.name }} </h3>
            <!-- 이미지 라벨 -->
            <p class="text-sm text-gray-500 mb-4">{{ image.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
