self.addEventListener('install', (e) => {
  console.log('Service Worker: Installed');
});

self.addEventListener('fetch', (e) => {
  // 앱 설치 조건 충족을 위한 기본 fetch 이벤트 핸들러
});
