let currentAudio = null;  // Variável para armazenar o áudio atual

// Função para tocar o áudio da emoção selecionada
export function playAudio(audioPath) {
    // Se já existe um áudio tocando, pare-o
    if (currentAudio) {
        currentAudio.pause();  // Pausa o áudio anterior
        currentAudio.currentTime = 0;  // Reseta o tempo do áudio anterior
    }

    // Cria um novo objeto de áudio
    currentAudio = new Audio(audioPath);
    currentAudio.play();  // Reproduz o novo áudio
}
