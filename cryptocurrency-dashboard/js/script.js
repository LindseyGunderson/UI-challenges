// toggle menu button
let toggle = document.querySelector('.top-toggle');
let navigation = document.querySelector('.nav');
let dashboard = document.querySelector('.dashboard');

toggle.addEventListener('click', () => {

    navigation.classList.toggle('nav-active');

    dashboard.classList.toggle('dashboard-active');


});

