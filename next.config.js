/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
// reactStrictMode: true로 설정되어 있다면, 개발 모드에서는 컴포넌트의 렌더링이 2번 실행된다.
// 그렇기에 콘솔이 2번 찍히는 것...!
module.exports = nextConfig
