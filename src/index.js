import _ from 'lodash';

function component() {

  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack...'], ' ');

  return element;
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
      document.body.appendChild(component());
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}
