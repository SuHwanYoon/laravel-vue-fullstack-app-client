<script setup>
import { PhotoIcon } from "@heroicons/vue/24/solid";
// PhotoIcon 컴포넌트를 Heroicons 라이브러리에서 가져옵니다.
</script>

<template>
  <header class="relative bg-white shadow">
    <!-- 페이지 헤더 섹션 -->
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900">Upload</h1>
    </div>
  </header>
  <!-- 메인 콘텐츠 영역 -->
  <main>
    <!-- 페이지의 주요 내용을 담는 영역 -->
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div class="mb-4">
        <label
          for="cover-photo"
          class="block text-sm/6 font-medium text-gray-900"
        >
          Image
        </label>
        <div
          class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"
        >
          <!-- 이미지 업로드 영역 -->
          <div class="text-center">
            <PhotoIcon
              class="mx-auto size-12 text-gray-300"
              aria-hidden="true"
            />
            <!-- 파일 선택 및 드래그 앤 드롭 안내 -->
            <div class="mt-4 flex text-sm/6 text-gray-600">
              <label
                for="file-upload"
                class="relative cursor-pointer rounded-md bg-transparent font-semibold text-indigo-600 focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-indigo-600 hover:text-indigo-500"
              >
                <span>Upload a file</span>
                <!-- 파일 업로드 input (실제 파일 선택 창) -->
                <!-- sr-only 클래스는 화면에는 보이지 않지만 스크린 리더가 읽을 수 있도록 합니다. -->
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  class="sr-only"
                />
              </label>
              <p class="pl-1">or drag and drop</p>
            </div>
            <!-- 파일 형식 및 크기 제한 안내 -->
            <p class="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
          </div>
        </div>
      </div>
      <!-- 이미지 라벨 입력 필드 -->
      <div class="mb-4">
        <label for="label" class="block text-sm/6 font-medium text-gray-900">
          Label
        </label>
        <div class="mt-2">
          <input
            type="text"
            name="label"
            id="label"
            autocomplete="given-name"
            class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          />
        </div>
      </div>
      <!-- 이미지 업로드 제출 버튼 -->
      <button
        type="submit"
        class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Upload
      </button>
    </div>
  </main>
</template>

<style scoped></style>
