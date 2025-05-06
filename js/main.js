// main.js

import { changeEmotion } from './emotions.js';  // Importa a função para lidar com as emoções
import { playAudio } from './audio.js';  // Importa a função para manipulação de áudio

// Função para chamar quando o usuário mudar a emoção
function handleEmotionChange() {
    const emotionSelect = document.getElementById('emotion-select');
    const emotion = emotionSelect.value;  // Obtém o valor da emoção selecionada
    changeEmotion(emotion);  // Chama a função que altera a emoção
}

// Adiciona o ouvinte de evento ao botão
const emotionButton = document.querySelector('button');
emotionButton.addEventListener('click', handleEmotionChange);
