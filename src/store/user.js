import axiosClient from '@/axios';
import { defineStore } from 'pinia';

// `defineStore`는 Pinia 라이브러리에서 스토어(Store)를 정의하는 함수입니다.
// 스토어는 애플리케이션의 중앙 집중식 상태 관리 시스템으로, 여러 컴포넌트 간에 공유되는 데이터를 저장하고 관리합니다.
// 첫 번째 인자 `'user'`는 이 스토어의 고유한 ID입니다. 이 ID는 개발자 도구에서 스토어를 식별하거나, 다른 스토어와 구분할 때 사용됩니다.
// 두 번째 인자는 스토어의 옵션 객체입니다. 이 객체 안에는 `state`, `actions`, `getters` 등의 속성을 정의할 수 있습니다.
const useUserStore = defineStore('user', {
  // `state`는 스토어의 상태(데이터)를 정의하는 함수입니다.
  // 이 함수는 객체를 반환하며, 이 객체의 속성들이 스토어의 반응형 상태가 됩니다.
  state: () => ({
    // `user`는 현재 로그인한 사용자 정보를 저장할 상태입니다.
    // 초기 값은 `null`로 설정되어 있으며, 사용자가 로그인하면 실제 사용자 객체로 업데이트됩니다.
    user: null,
  }),

  // `actions`는 스토어의 상태를 변경하거나 비동기 작업을 수행하는 메서드들을 정의하는 객체입니다.
  // 액션 내에서는 `this`를 통해 스토어의 다른 상태나 액션에 접근할 수 있습니다.
  actions: {

    async fetchUser() {
      
      const response = await axiosClient.get('/api/user')
      .then((response) => {
        this.user = response.data;
      })

      return response;
    },

    /**
     * `logoutUser` 액션은 백엔드에 로그아웃 요청을 보내고 성공 여부와 관계없이
     * 프론트엔드의 사용자 상태를 초기화합니다.
     * @returns {Promise<void>}
     */
    async logoutUser() {
      try {
        await axiosClient.post('/logout');
        console.log('User logged out successfully.');
      } finally {
        this.user = null;
      }
    }
  },
});

export default useUserStore;
