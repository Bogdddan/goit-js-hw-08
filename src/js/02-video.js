import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player(document.getElementById('vimeo-player'));
const STORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle((event) => {
    const currentTime = event.seconds;
    localStorage.setItem(STORAGE_KEY, currentTime);
}, 1000));

const savedTime = localStorage.getItem(STORAGE_KEY);
if (savedTime) {
    player.setCurrentTime(savedTime);
}
