var greetingMessage = "Saludos desde el archivo .js";

function sayHello() {
    alert(greetingMessage);
}

// solventa el error de carga cuando el DOM no esta listo
window.addEventListener('DOMContentLoaded', () => {

    const principalHeader = document.getElementById('header');

    // indicamos que cambie el color cuando el mouse esta sobre el item
    principalHeader.addEventListener('mouseover', function handleMouseOver() {
        principalHeader.style.color = 'red';
    });

    // indicamos que recupere el color cuando el mouse no esta sobre el item
    principalHeader.addEventListener('mouseout', function handleMouseOut() {
        principalHeader.style.color = '#226666';
    });

    const secundaryItem = document.getElementById('image');

    // indicamos que cambie el color cuando el mouse esta sobre el item
    secundaryItem.addEventListener('mouseover', function handleMouseOverOnImage() {
        principalHeader.style.color = '#D46A6A';
    });

    // indicamos que recupere el color cuando el mouse no esta sobre el item
    secundaryItem.addEventListener('mouseout', function handleMouseOutOnImage() {
        principalHeader.style.color = '#226666';
    });

});
