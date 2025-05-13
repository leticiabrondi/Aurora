import { changeEmotion } from './emotions.js';

const emotionButton = document.querySelector('button');
emotionButton.addEventListener('click', () => {
    const emotionSelect = document.getElementById('emotion-select');
    const emotion = emotionSelect.value;
    changeEmotion(emotion);
});
