import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router' // router.js에서 내보낸 라우터 인스턴스를 가져옵니다.
import { createPinia } from 'pinia'



// Vue 애플리케이션을 생성하고, 라우터와 Pinia를 사용하도록 설정한 후, #app 요소에 마운트합니다.
// `createApp` 함수는 Vue 애플리케이션 인스턴스를 생성합니다.
// `App`은 애플리케이션의 최상위 컴포넌트입니다.
const app = createApp(App);
// `createPinia` 함수는 Pinia 스토어 인스턴스를 생성합니다.
// Pinia는 Vue 애플리케이션의 상태(state)를 중앙 집중식으로 관리하는 라이브러리입니다.
// 이 인스턴스를 애플리케이션에 연결하여 모든 컴포넌트에서 스토어에 접근할 수 있게 합니다.
const pinia = createPinia(); // Pinia 인스턴스를 생성합니다.

// `app.use()` 메서드는 Vue 플러그인을 애플리케이션에 추가합니다.
// Pinia를 먼저 추가하는 이유는 라우터 가드(router.js의 beforeEnter)에서 Pinia 스토어에 접근할 수 있도록 하기 위함입니다.
// 라우터가 Pinia 스토어의 상태(예: 사용자 인증 정보)에 의존할 수 있기 때문에 Pinia를 먼저 설정하는 것이 일반적입니다.
app.use(pinia); // Pinia를 Vue 애플리케이션에 연결하여 전역적으로 사용할 수 있게 합니다.
app.use(router); // Vue Router를 Vue 애플리케이션에 연결하여 라우팅 기능을 활성화합니다.

// `app.mount('#app')`은 Vue 애플리케이션을 HTML 문서의 `#app` ID를 가진 요소에 마운트(연결)합니다.
// 이 시점부터 Vue 애플리케이션이 해당 DOM 요소를 제어하게 됩니다.
app.mount('#app');
