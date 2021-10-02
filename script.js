const scrollImgs = document.querySelectorAll(".slide-in");

function debounce(func, wait = 35, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function onScrollFn() {
  scrollImgs.forEach((scrollImg) => {
    // halfway through the img
    const slideInAt =
      [window.scrollY + window.innerHeight] - [scrollImg.height / 3];

    // bottom of the img
    const imgBottom = scrollImg.offsetTop + scrollImg.height;

    // Booleans
    const isHalfShown = slideInAt > scrollImg.offsetTop;
    const isNotScrolledPast = imgBottom > window.scrollY;

    if (isHalfShown && isNotScrolledPast) {
      scrollImg.classList.add("active");
    } else {
      scrollImg.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", debounce(onScrollFn));
