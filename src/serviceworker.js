export function registerServiceWorker() {
  return new Promise((resolve, reject) => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
          console.log('SW registered : ', registration);
          resolve(registration);
        }).catch(registrationError => {
          console.log('SW registration failed: ', registrationError);
          reject(registrationError);
        });
      });
    } else {
      reject('no serviceWorker');
    }
  });
}
