//Selecciones para barra de navegación burger
//esta variable de burger es cuando seleccionen la barrita de menú de hamburguesa.
const burger =  document.querySelector("#burger-menu"); 
//el ul es cuando seleccionen los elementos de la lista de los enlaces que tenemos en la barra de navegación.
const ul = document.querySelector("nav ul"); 
//el nav es cuando se selecciona el propio contenedor donde está la barrita de navegación.
const nav = document.querySelector("nav"); 

//activar en el javascript la class de show en el archivo css, está como nav ul.show, cuando alguien hace click en el menu de hamburguesa esto va a hacer que se muestre el menú y lo almacenamos en la variable que se llama ".burger".
burger.addEventListener("click", () => {
    ul.classList.toggle("show");
});

//Cerrar el menu burger
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
    link.addEventListener("click", () => {
        ul.classList.remove("show");
    })
    
);

//Selección de desplazar hacia arriba
const scrollUp = document.querySelector("#scroll-up");

//Funcionalidad de desplazar hacia arriba
scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});