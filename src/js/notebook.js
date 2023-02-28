const greetingMessage = "Saludos desde el archivo .js";

function sayHello() {
    alert(greetingMessage);
}

// Colors
const principal = "#226666";
const tertiary =  "#D46A6A";

// solventa el error de carga cuando el DOM no esta listo
window.addEventListener('DOMContentLoaded', () => {

    const headerElement = document.getElementById('header');
    const imageElement = document.getElementById('image');

    const eventHandler = (targetItem, color = 'red') => {
        targetItem.style.color = color;
    }

    // indicamos que cambie el color cuando el mouse esta sobre el item
    headerElement.addEventListener('mouseover', () => eventHandler(headerElement));

    // indicamos que recupere el color cuando el mouse no esta sobre el item
    headerElement.addEventListener('mouseout', () => eventHandler(headerElement, principal));

    // indicamos que cambie el color cuando el mouse esta sobre el item
    imageElement.addEventListener('mouseover', () => eventHandler(headerElement, tertiary));

    // indicamos que recupere el color cuando el mouse no esta sobre el item
    imageElement.addEventListener('mouseout', () => eventHandler(headerElement, principal));

});
