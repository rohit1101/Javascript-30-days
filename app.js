const audio = document.querySelectorAll('audio');

const handleSound = event => {
  if (
    event.keyCode === 82 ||
    event.keyCode === 79 ||
    event.keyCode === 72 ||
    event.keyCode === 73 ||
    event.keyCode === 84
  ) {
    audio.forEach(a => {
      if (a.classList.value === 'r' && event.keyCode === 82) {
        a.play();
      } else if (a.classList.value === 'o' && event.keyCode === 79) {
        a.play();
      } else if (a.classList.value === 'h' && event.keyCode === 72) {
        a.play();
      } else if (a.classList.value === 'i' && event.keyCode === 73) {
        a.play();
      } else if (a.classList.value === 't' && event.keyCode === 84) {
        a.play();
      }
    });
  }
};

// const handleCSS = () => {
//   const divEl = document.querySelectorAll('.key');
//   divEl.forEach(div => {
//     if (div.dataset.value === '82') {
//       console.log(div);
//     }
//   });
// };

window.addEventListener('keydown', handleSound);
// window.addEventListener('keydown', handleCSS);
