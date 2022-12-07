import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player(document.querySelector('iframe'));

player.on('timeupdate', throttle((data) => {
  localStorage.setItem("videoplayer-current-time", data.seconds)
}, 1000));

player.setCurrentTime(localStorage.getItem("videoplayer-current-time") || 0);
