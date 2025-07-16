let titulo = document.getElementById('titulo');

setTimeout(() => {
    titulo.classList.add('tituloOculto');
    setTimeout(() => {
        titulo.remove();
    }, 1000)
}, 5000);

const mensajes = [
            "¡Eres una estrella también!",
            "Sigue brillando ✨",
            "Nunca dejes de soñar",
            "Tu forma de ver el mundo siempre me sorprende",
            "Tienes una luz muy tuya que se nota incluso en los detalles pequeños",
            "Toca otra estrella, hay más sorpresas",
            "Eres una de esas personas que hacen que todo se sienta un poco más bonito",
            "Admiro mucho tu forma de ser, tan auténtica",
            "Gracias por existir así, tal cual eres",
            "Contigo todo se siente un poco más tranquilo, más bonito",
            "No sé si lo sabes, pero eres especial de una forma única",
            "Tu esencia tiene algo que no se puede imitar",
            "Algunas personas son ruido, tú eres melodía",
            "Hay belleza en tu forma de estar, incluso cuando estás en silencio",
            "No cambies nunca esa forma tuya de hacer las cosas con el corazón",
            "Eres como una estrella fugaz discreta: no todos la ven, pero quien la nota no la olvida"
        ];

        function mensajeAleatorio() {
            const indice = Math.floor(Math.random() * mensajes.length);
            return mensajes[indice];
        }

function mostrarMensaje(texto, x, y) {
    const burbuja = document.createElement("div");
    burbuja.className = "mensaje";
    burbuja.textContent = texto;

    burbuja.style.position = "absolute";
    burbuja.style.visibility = "hidden";
    document.body.appendChild(burbuja);

    const burbujaWidth = burbuja.offsetWidth;
    const burbujaHeight = burbuja.offsetHeight;

    let posX = x + 10;
    let posY = y - 10;

    // Ajuste para evitar que se salga del borde
    if (posX + burbujaWidth > window.innerWidth) {
        posX = x - burbujaWidth - 10;
    }
    if (posY + burbujaHeight > window.innerHeight) {
        posY = y - burbujaHeight - 10;
    }
    if (posX < 0) posX = 5;
    if (posY < 0) posY = 5;

    burbuja.style.left = `${posX}px`;
    burbuja.style.top = `${posY}px`;
    burbuja.style.visibility = "visible";

    setTimeout(() => {
        burbuja.remove();
    }, 2300);
}


        function generarEstrellas(cantidad) {
            for (let i = 0; i < cantidad; i++) {
            const estrella = document.createElement("div");
            estrella.classList.add("estrella");

            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;

            estrella.style.left = `${x}px`;
            estrella.style.top = `${y}px`;

            estrella.addEventListener("click", (e) => {
            const mensaje = mensajeAleatorio();
            mostrarMensaje(mensaje, e.clientX + 10, e.clientY - 10);
            });

            document.body.appendChild(estrella);
            }
        }

        window.addEventListener("DOMContentLoaded", () => {
            generarEstrellas(100);
        });
