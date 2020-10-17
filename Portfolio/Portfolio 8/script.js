const mobileMenu = () => {
    const menu = document.querySelector('ul');

    menu.classList.toggle('mobilemenu');
}

const backToButton = document.getElementById("back-to-top");

window.onscroll = () => scrollCheck();

const scrollCheck = () => {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 20) {
          backToButton.style.display = "flex";
        } else {
          backToButton.style.display = "none";
        }
};