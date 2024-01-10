function removeClasssFromNodes(className, ...nodes) {
  nodes.forEach(node => {
    node.forEach(element => {
      element.classList.remove(className);
    });
  });
}

function addClasssFromNodes(className, ...nodes) {
  nodes.forEach(node => {
    node.forEach(element => {
      element.classList.add(className);
    });
  });
}

function setInertAttributeFromNodes(...nodes) {
  nodes.forEach(node => {
    node.forEach(element => {
      element.setAttribute('inert', '');
    });
  });
}

function removeInertAttributeFromNodes(...nodes) {
  nodes.forEach(node => {
    node.forEach(element => {
      element.removeAttribute('inert');
    });
  });
}

function setTypeForButtons() {
  const buttons = [...document.getElementsByTagName('button')];

  buttons.forEach(button => {
    if (button.closest('form') && !button.hasAttribute('type')) {
      button.setAttribute('type', 'submit');
      return;
    }
    if (!button.closest('form') && !button.hasAttribute('type')) {
      button.setAttribute('type', 'button');
    }
  });
}

export {removeClasssFromNodes, addClasssFromNodes, setInertAttributeFromNodes, removeInertAttributeFromNodes, setTypeForButtons};
