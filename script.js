const cardData = [
    {
        title: "Constitución de la Sociedad Anónima",
        text: "La constitución de una sociedad anónima en Colombia es un proceso formal que requiere cumplir con requisitos legales específicos. Desde la escritura pública hasta la inscripción en el registro mercantil, cada paso está regulado por el Código de Comercio y la Ley 222 de 1995. En este segmento, exploraremos los elementos clave para crear una sociedad anónima. ¡Descubre cómo se establece legalmente una S.A.!"
    },
    {
        title: "Socios y Número de Socios",
        text: "Las sociedades anónimas en Colombia tienen reglas claras sobre el número mínimo y máximo de socios. Según la ley, deben contar con al menos cinco socios, pero no existe un límite superior. Acompáñanos a entender cómo esta estructura permite flexibilidad en la conformación de estas empresas. ¿Sabías que las S.A. pueden tener cientos o incluso miles de accionistas?"
    },
    {
        title: "Capital para Constituirse",
        text: "A diferencia de otros tipos de sociedades, las S.A. no tienen un capital mínimo fijo establecido por ley. Sin embargo, el capital debe ser adecuado para cumplir con el objeto social y estar representado en acciones. En este video, te explicamos cómo se organiza el capital en una sociedad anónima. ¡Descubre las opciones para aportar en efectivo o en especie!"
    },
    {
        title: "Causales de Disolución y Liquidación",
        text: "La disolución de una sociedad anónima puede ocurrir por diversas razones, desde el cumplimiento de su objeto social hasta decisiones judiciales. Una vez disuelta, inicia un proceso de liquidación para saldar deudas y distribuir remanentes. En este segmento, analizaremos las causales más comunes y sus implicaciones legales. ¿Qué pasa cuando una S.A. llega a su fin?"
    }
];

let lastViewedCard = null;

function expandCard(index) {
    let card = document.getElementsByClassName("card")[index];

    // Si la tarjeta ya fue vista, evitar que se vuelva a abrir
    if (card.classList.contains("viewed")) return;

    let text = cardData[index].text;

    text = text.replace(/S\.A\./g, "SA_TEMP");
    text = text.replace(/\.\s+/g, ".<br><br>");
    text = text.replace(/SA_TEMP/g, "S.A.");

    document.getElementById("modal-title").innerText = cardData[index].title;
    document.getElementById("modal-text").innerHTML = text;
    document.getElementById("modal").style.display = "flex";

    lastViewedCard = card;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";

    if (lastViewedCard) {
        lastViewedCard.classList.add("viewed");
    }
}

// Restaurar tarjeta al hacer clic cuando tiene la "X"
document.addEventListener("click", function(event) {
    if (event.target.classList.contains("viewed")) {
        event.target.classList.remove("viewed");
    }
});
