<script setup>
// 임시 이미지 데이터
const images = [
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
  <header class="relative bg-white shadow">
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900">My Images</h1>
    </div>
  </header>
  <main>
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div
        class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <div
          v-for="image in images"
          :key="image.id"
          class="bg-white overflow-hidden shadow rounded-lg"
        >
          <img
            :src="image.url"
            alt="Image"
            class="w-full h-48 object-contain"
          />
          <div class="px-4 py-4">
            <h3 class="text-lg font-semibold text-gray-900">
              {{ image.name }}
            </h3>
            <p class="text-sm text-gray-500 mb-4">{{ image.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
