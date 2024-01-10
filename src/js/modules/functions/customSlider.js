export function customSlider(config = {}, scrollableObject) {
  if (config.prev && config.next) {
    const prevButton = document.querySelector(`${config.prev}`);
    const nextButton = document.querySelector(`${config.next}`);
    const object = document.querySelector(`${scrollableObject}`);

    prevButton.onclick = () => {
      if (object.scrollLeft !== 0) object.scrollLeft -= object.clientWidth;
    };
    nextButton.onclick = () => {
      if (object.scrollRight !== 0) object.scrollLeft += object.clientWidth;
    };
  }
}
