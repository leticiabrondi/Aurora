// emotions.js

// Frases acolhedoras para cada emoção
const emotionMessages = {
    calm: "A paz está em você, no seu ritmo.",
    happy: "O mundo é mais bonito quando você sorri.",
    sad: "Às vezes, é necessário se acolher no silêncio.",
    anxious: "Tudo vai passar, lembra de tudo que já passou, só parece infinito agora.",
    relaxed: "Aproveite o momento para se reconectar consigo mesmo.",
    angry: "A raiva é uma emoção como as outras, mas lembre-se de que a paz interior é escolha sua."
};

// Função para alterar a emoção e o fundo baseado na escolha
export function changeEmotion(emotion) {
    const mensagem = document.getElementById('mensagem');
    // Atualizar a mensagem acolhedora da emoção
    mensagem.textContent = emotionMessages[emotion] || "Emoção não reconhecida. Tente novamente.";

    // Alterar o fundo de acordo com a emoção
    switch (emotion) {
        case 'calm':
            applyEmotion('calm', 'assets/audio/calm.mp3');
            break;
        case 'happy':
            applyEmotion('happy', 'assets/audio/happy.mp3');
            break;
        case 'sad':
            applyEmotion('sad', 'assets/audio/sad.mp3');
            break;
        case 'anxious':
            applyEmotion('anxious', 'assets/audio/anxious.mp3');
            break;
        case 'relaxed':
            applyEmotion('relaxed', 'assets/audio/relaxed.mp3');
            break;
        case 'angry':
            applyEmotion('angry', 'assets/audio/angry.mp3');
            break;
        default:
            console.log('Emoção não reconhecida');
    }
}

// Função auxiliar para capitalizar a primeira letra de uma string
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Função para aplicar a emoção (alterar fundo e tocar áudio)
function applyEmotion(emotionClass, audioPath) {
    document.body.className = emotionClass;  // Alterar a classe do body para refletir a emoção
    playAudio(audioPath);                    // Tocar o áudio correspondente
}
