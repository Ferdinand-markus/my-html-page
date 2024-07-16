const messages = [
    "Aku cuman mau bilang",
    "Semagat menjalani hari harinya yaa",
    "BTW aku kangen",
    "TAPI BOONG",
    "HAHAHAHAHAHAHAHAHA engga kok, serius aku kangen banget",
    "Segitu dulu yaa, WOPYOU" // Pesan terakhir
];

const images = [
    "panda4.png",
    "panda7.png",
    "panda2.png",
    "panda10.png",
    "panda1.png",
    "panda8.png" // Gambar khusus untuk pesan terakhir
];

let currentIndex = 0;

document.getElementById('envelope').addEventListener('click', function() {
    document.getElementById('intro').classList.add('hidden');
    document.getElementById('main').classList.remove('hidden');
    startSlideshow();
});

function startSlideshow() {
    let timeLeft = 3;
    const timerElement = document.getElementById('timer');
    const countdown = setInterval(() => {
        if (timeLeft > 0) {
            timerElement.textContent = `Tunggu ${timeLeft} detik...`;
            timeLeft--;
        } else {
            changeMessage();
            timeLeft = 3;
            if (currentIndex >= messages.length) {
                clearInterval(countdown);
            }
        }
    }, 1000);
}

function changeMessage() {
    const messageElement = document.getElementById('message');
    const pandaImage = document.getElementById('pandaImage');
    
    messageElement.textContent = messages[currentIndex];
    pandaImage.src = images[currentIndex];
    currentIndex++;
}
