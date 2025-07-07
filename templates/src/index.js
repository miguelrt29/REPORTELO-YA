function toggleMenu() {
    document.getElementById("sidebar").classList.toggle("active");
    document.getElementById("overlay").classList.toggle("active");
}
// Selecciona todos los elementos con la clase .menu-item
 const menuItems = document.querySelectorAll('.menu-item');
 const firstItem = document.querySelector('.menu-item.active');

 // Añade un evento de mouseover a cada botón
 menuItems.forEach(item => {
     item.addEventListener('mouseover', () => {
         // Quita la clase 'active' de cualquier elemento que la tenga
         document.querySelector('.menu-item.active').classList.remove('active');
         
         // Agrega la clase 'active' al botón actual (el que está debajo del mouse)
         item.classList.add('active');
     });

     // Evento para que el botón "Products" recupere la clase 'active' al salir el mouse
     item.addEventListener('mouseleave', () => {
         // Quita la clase 'active' del elemento actual y la vuelve a asignar al primer botón
         item.classList.remove('active');
         firstItem.classList.add('active');
     });
 });


 const sidebarToggle = document.getElementById('sidebarToggle');
 const sidebar = document.querySelector('.sidebar');
 const overlay = document.getElementById('overlay');
 const closeSidebar = document.getElementById('closeSidebar');
 
 // Función para abrir el sidebar
 const openSidebar = () => {
     sidebar.classList.add('active');
     overlay.classList.add('active');
 };
 
 // Función para cerrar el sidebar
 const closeSidebarFunc = () => {
     sidebar.classList.remove('active');
     overlay.classList.remove('active');
 };
 
 // Agregar eventos
 sidebarToggle.addEventListener('click', openSidebar);
 closeSidebar.addEventListener('click', closeSidebarFunc);
 overlay.addEventListener('click', closeSidebarFunc);


