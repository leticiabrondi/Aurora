// audio.js

// Função para tocar o áudio da emoção selecionada
export function playAudio(audioPath) {
    const audio = new Audio(audioPath);  // Cria o objeto de áudio
    audio.play();  // Reproduz o áudio
}
