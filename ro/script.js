document.addEventListener("DOMContentLoaded", function() {
    const images = [
        "imagenes/1.jpg",
        "imagenes/2.jpg",
        "imagenes/3.jpg"
        // Agrega las rutas a tus imágenes aquí
    ];

    const challenges = [
        "Reto 1: Toma un chupito de licor sin hacer ninguna mueca",
        "Reto 2: Elige una canción al azar y canta el estribillo",
        "Reto 3: Chasqui a Mike o shot de fernet puro",
        "Reto 4: Imita a Rocio o toma",
        "Reto 5: Bailecito viral de tiktok o toma shot.",
        "Reto 6: Tómate una selfie con todos los invitados de la fiesta y subila a tu instagram",
        "Reto 7: Dale en la boca un trago a la cumplañera",
        "Reto 8: Forma una fila de 3 shots y tómalos uno tras otro en menos de 10 segundos",
        "Reto 9: Escaneaste? Toma un shot por curioso.",
        "Reto 10: Dibuja algo con los ojos vendados y deja que los demás adivinen qué es, si no adivina tomas un shot",
        "Reto 11: Sacate una selfie con cada uno en la fiesta o toma 3 shots",
        "Reto 12: Dale una nalgada al que tengas más cerca",
        "Reto 13: Intenta hacer un movimiento de danza del vientre",
        "Reto 14: Deja que alguien más elija y prepare un shot sorpresa para ti",
        "Reto 15: Otra vez vos? toma por gil.",
        "Reto 16: Imita el acento de otro país durante 2 minutos o toma un shot",
        "Reto 17: Haz 10 sentadillas o toma un shot",
        "Reto 18: Toma una foto graciosa y súbela a tus redes sociales",
        "Reto 19: Llama a un amigo y cuéntale un chiste, si no se ríe toma un shot",
        "Reto 20: Haz una pose de yoga por 1 minuto o toma un shot",
        "Reto 21: Haz una historia de Instagram diciendo lo mucho que amas a la cumpleañera",
        "Reto 22: Elige a alguien para que tome un shot contigo",
        "Reto 23: Imita a un animal durante 1 minuto o toma un shot",
        "Reto 24: Haz un brindis en honor a la cumpleañera y toma un shot",
        "Reto 25: Come una rodaja de limón sin hacer muecas o toma un shot",
        "Reto 26: Hazle cosquillas a alguien durante 30 segundos",
        "Reto 27: Di el alfabeto al revés o toma un shot",
        "Reto 28: Haz una declaración de amor falsa a alguien en la fiesta",
        "Reto 29: Cuenta un chiste, si no hace reír a nadie toma un shot",
        "Reto 30: Haz un desafío de pulseadas con alguien, el perdedor toma un shot"
    ];

    function getRandomItem(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }

    const randomImage = getRandomItem(images);
    const randomChallenge = getRandomItem(challenges);

    document.getElementById("randomImage").src = randomImage;
    document.getElementById("challengeText").innerText = randomChallenge;
});
