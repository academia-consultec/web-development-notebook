var greetingMessage = "Saludos desde el archivo .js";

function sayHello() {
    alert(greetingMessage);
}

// solventa el error de carga cuando el DOM no esta listo
window.addEventListener('DOMContentLoaded', () => {

    const principalItem = document.getElementById('header');
    const secundaryItem = document.getElementById('image');

    const handleMouseOut = (targetItem) => {
        targetItem.style.color = '#226666';
    }

    // indicamos que cambie el color cuando el mouse esta sobre el item
    principalItem.addEventListener('mouseover', function handleMouseOver() {
        principalItem.style.color = 'red';
    });

    // indicamos que recupere el color cuando el mouse no esta sobre el item
    principalItem.addEventListener('mouseout', () => handleMouseOut(principalItem));

    // indicamos que cambie el color cuando el mouse esta sobre el item
    secundaryItem.addEventListener('mouseover', function handleMouseOverOnImage() {
        principalItem.style.color = '#D46A6A';
    });

    // indicamos que recupere el color cuando el mouse no esta sobre el item
    secundaryItem.addEventListener('mouseout', () => handleMouseOut(principalItem));

});
