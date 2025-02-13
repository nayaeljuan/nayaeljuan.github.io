let audio = new Audio("son.mp3");
audio.loop = true;  // Active la lecture en boucle
audio.volume = 0.01; // Régle le volume à 50% (ajuste selon tes besoins)

function hideSplash() {
    let splash = document.getElementById("splash-screen");

    audio.play().then(() => {
        console.log("Audio en cours de lecture...");
    }).catch(error => {
        console.log("Lecture audio bloquée par le navigateur :", error);
    });

    splash.style.transform = "translateY(-100%)";
    
    setTimeout(() => {
        splash.style.display = "none";
        document.getElementById("main-content").style.display = "block";
    }, 900);
}




let clickCount = 0; // Initialise le compteur

document.getElementById("wake-up-btn").addEventListener("click", function() {
    // Incrémente le compteur de clics
    clickCount++;

    // === 1️⃣ Afficher un message aléatoire lettre par lettre ===
    let messages = [
        "non",
        "...",
        "pour faire quoi?",
        "je suis fatiguée."
    ];

    let randomIndex = Math.floor(Math.random() * messages.length); // Sélection aléatoire
    let message = messages[randomIndex];

    let container = document.getElementById("message-container");
    container.innerHTML = ""; // Effacer le message précédent
    container.style.display = "block"; // Afficher le conteneur

    let index = 0;

    function typeLetter() {
        if (index < message.length) {
            container.innerHTML += message[index]; // Ajouter la lettre
            index++;
            setTimeout(typeLetter, 100); // Attendre 100ms avant d'ajouter la suivante
        }
    }

    typeLetter(); // Lancer l'effet d'écriture

    // === 2️⃣ Faire grossir le bouton ===
    let btn = this; // Récupère le bouton
    let currentSize = parseFloat(window.getComputedStyle(btn).width); // Taille actuelle
    let newSize = currentSize * 1.2; // Augmente de 20%
    
    btn.style.width = newSize + "px"; // Applique la nouvelle largeur
    btn.style.height = newSize + "px"; // Applique la nouvelle hauteur

    // === 3️⃣ Vérifier si on a atteint 10 clics ===
    if (clickCount >= 10) {
        window.location.href = "PAGE2.html"; // Redirige vers la nouvelle page
    }
});
