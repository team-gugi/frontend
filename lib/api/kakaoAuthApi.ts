export const redirectToKakao = () => {
  const kakaoLoginUrl = 'http://52.79.47.101:8080/oauth2/authorization/kakao';
  window.location.href = kakaoLoginUrl;
};
