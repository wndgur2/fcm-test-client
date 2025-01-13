export function registerServiceWorker() {
  navigator.serviceWorker
    .register('notification-worker.js')
    .then(function (registration) {
      console.log('Service Worker 등록 성공:', registration)
    })
    .catch(function (error) {
      console.log('Service Worker 등록 실패:', error)
    })
}
