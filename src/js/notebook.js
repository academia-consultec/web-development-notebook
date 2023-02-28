var greetingMessage = "Saludos desde el archivo .js";

function sayHello() {
    alert(greetingMessage);
}

// solventa el error de carga cuando el DOM no esta listo
window.addEventListener('DOMContentLoaded', () => {

    const principalItem = document.getElementById('header');
    const secundaryItem = document.getElementById('image');

    const eventHandler = (targetItem, color = 'red') => {
        targetItem.style.color = color;
    }

    // indicamos que cambie el color cuando el mouse esta sobre el item
    principalItem.addEventListener('mouseover', () => eventHandler(principalItem));

    // indicamos que recupere el color cuando el mouse no esta sobre el item
    principalItem.addEventListener('mouseout', () => eventHandler(principalItem, '#226666'));

    // indicamos que cambie el color cuando el mouse esta sobre el item
    secundaryItem.addEventListener('mouseover', () => eventHandler(principalItem, '#D46A6A'));

    // indicamos que recupere el color cuando el mouse no esta sobre el item
    secundaryItem.addEventListener('mouseout', () => eventHandler(principalItem, '#226666'));

});
