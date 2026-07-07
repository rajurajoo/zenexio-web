(function () {
  'use strict';

  const video = document.getElementById('hero-video');
  if (!video) return;

  const FADE_MS = 900;

  video.addEventListener('ended', () => {
    video.classList.add('is-fading');
    setTimeout(() => {
      video.currentTime = 0;
      video.play();
      requestAnimationFrame(() => video.classList.remove('is-fading'));
    }, FADE_MS);
  });
})();
