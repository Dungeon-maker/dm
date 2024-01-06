async function getComponent() {
  const element = document.createElement('div');


  element.innerHTML = _.join([
    'Hello',
    'webpack'
  ], ' ');

  const {default: _} = await import('lodash')
  return element;
}

getComponent().then((component) => {
  document.body.appendChild(component);
});
