export const redirectToKakao = () => {
  // const kakaoLoginUrl = 'http://52.79.47.101:8080/oauth2/authorization/kakao';
  // const kakaoLoginUrl = 'https://www.team-gugi.site/oauth2/authorization/kakao';
  const kakaoLoginUrl = 'https://api.team-gugi.site/oauth2/authorization/kakao'; //url 변경
  window.location.href = kakaoLoginUrl;
};
