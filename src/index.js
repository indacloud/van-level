import _ from 'lodash';
import { registerServiceWorker } from './serviceworker';
import { cache } from './cache';

function component() {

  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

registerServiceWorker().then(() => {
  document.body.appendChild(component());
  cache();
});
