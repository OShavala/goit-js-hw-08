
import Player from '@vimeo/player';

import  throttle  from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const player = new Player(iframe, {
  loop: true,
  fullscreen: true,
  quality: '1080p',
});

const LOCALSTORAGE_KEY = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(e => {
    localStorage.setItem(LOCALSTORAGE_KEY, e.seconds); 
  }, 1000)
);

const currentTime = localStorage.getItem(LOCALSTORAGE_KEY);
if (currentTime) {
  player.setCurrentTime(currentTime);
}


