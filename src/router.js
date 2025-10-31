// vue-router 라이브러리에서 라우터 인스턴스를 생성하는 `createRouter`와
// HTML5 히스토리 모드(URL에서 #을 제거)를 사용하는 `createWebHistory` 함수를 가져옵니다.
import { createRouter, createWebHistory } from "vue-router";

// 라우트에서 사용할 컴포넌트들을 가져옵니다.
// DefaultLayout은 여러 페이지에서 공통으로 사용될 레이아웃 컴포넌트입니다.
import DefaultLayout from "./components/DefaultLayout.vue";
import Home from "./pages/Home.vue";
import MyImages from "./pages/MyImages.vue";
import Login from "./pages/Login.vue";
import Signup from "./pages/Signup.vue";
import NotFound from "./components/NotFound.vue";

// `routes` 배열은 애플리케이션의 모든 라우트(경로) 정보를 담고 있습니다.
const routes = [
  // DefaultLayout을 사용하는 라우트들입니다. (예: 로그인이 필요한 페이지)
  // 이 라우트들은 DefaultLayout 컴포넌트 내의 <RouterView/>에 렌더링됩니다.
  {
    path: "/",
    component: DefaultLayout,
    children: [
      // path: "/"는 최상위 경로를 의미합니다. Home 컴포넌트가 표시됩니다.
      { path: "/", name: "Home", component: Home },
      // path: "/images"는 사용자의 이미지 목록을 보여주는 페이지입니다.
      { path: "/images", name: "MyImages", component: MyImages },
    ],
  },
  // 아래는 DefaultLayout을 사용하지 않는 독립적인 페이지들입니다.
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  // 존재하지않는 path로 url이 입력된 경우
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  }
];

// `createRouter` 함수를 호출하여 라우터 인스턴스를 생성합니다.
const router = createRouter({
  // `history` 옵션은 라우팅 히스토리 관리 방식을 설정합니다.
  // `createWebHistory()`는 URL에서 해시(#)를 사용하지 않는 깨끗한 URL을 만듭니다.
  history: createWebHistory(),
  // `routes` 옵션에는 위에서 정의한 라우트 배열을 전달합니다.
  routes,
});

// 생성된 라우터 인스턴스를 다른 파일(예: main.js)에서 사용할 수 있도록 내보냅니다.
export default router;
