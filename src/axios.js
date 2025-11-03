import axios from "axios";
import router from "./router";

// axios 인스턴스를 생성합니다.
// 이 인스턴스를 통해 API 요청을 보낼 수 있습니다.
// 모든 요청에 대해 기본적으로 적용될 URL을 설정합니다.
// 이 URL은 .env 파일에서 VITE_API_BASE_URL 변수로 설정됩니다.
// withCreditials 옵션은 쿠키를 포함하여 요청을 보낼지 여부를 결정합니다.
// withXSRFToken 옵션은 XSRF 토큰을 자동으로 포함시킬지 여부를 결정합니다.
// Laravel Sanctum + SPA의 조합이라면 CSRF쿠키로 인증가능
// 브라우저기반 인증방식
//모바일 앱/외부 API 클라이언트에서는 사용 불가 (쿠키 불가)
const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
  withXSRFToken: true,
});

// 참고용
// 이방식은 모든 요청에 대해 공통 헤더를 추가하는 방법입니다.
// Laravel Passport, JWT, OAuth2는 이쪽으로
// token기반인증은 interceptors를 보통 사용해서 요청에 대해서 공통 헤더를 추가한다
// axiosClient.interceptors.request.use((config) => {
//   config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
//   return config;
// });

// 응답 인터셉터를 설정합니다.
// 모든 응답에 대해 공통적으로 처리할 로직을 정의합니다.
// 예를 들어, 401 Unauthorized 에러가 발생하면 로그인 페이지로 리다이렉트할 수 있습니다.

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      router.push({ name: "Login" });
    } 
    throw error;
  }
);

export default axiosClient;
