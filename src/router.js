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
import useUserStore from "./store/user";

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
    // `beforeEnter`는 특정 라우트에 진입하기 전에 실행되는 가드(Guard)입니다.
    // 이 함수는 라우트 진입을 허용하거나, 다른 라우트로 리다이렉트하거나, 진입을 취소할 수 있습니다.
    // `to`: 이동하려는 대상 라우트 객체입니다. (어디로 갈 것인가)
    // `from`: 현재 위치하고 있는 라우트 객체입니다. (어디에서 왔는가)
    // `next`: 라우트 이동을 제어하는 함수입니다.
    //         - `next()`: 다음 훅으로 이동하거나 라우트 진입을 허용합니다.
    //         - `next(false)`: 현재 라우트 진입을 취소합니다.
    //         - `next('/login')` 또는 `next({ name: 'Login' })`: 지정된 라우트로 리다이렉트합니다.
    beforeEnter: async (to, from, next) => {
      try {
        // Pinia 스토어에서 `useUserStore`를 사용하여 사용자 스토어 인스턴스를 가져옵니다.
        const userStore = useUserStore();
        
        // 사용자 정보를 비동기적으로 가져옵니다.
        // 이 함수는 API 요청을 보내 사용자 데이터를 스토어에 저장합니다.
        await userStore.fetchUser();
        // 사용자 정보를 성공적으로 가져왔으므로, 라우트 진입을 허용합니다.
        next();
       
      } catch (error) {
        console.error('Error fetching user:', error);
        next(false);
      }
    }
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
