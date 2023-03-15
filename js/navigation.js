export function navigation() {

    const buttonTarget = document.getElementById("button-target");
    const buttonPortfolio = document.getElementById("button-portfolio");
    const buttonTechnologies = document.getElementById("button-technologies");
    const buttonAbout = document.getElementById("button-about");
    const buttonContacts = document.getElementById("button-contacts");

    const objectClass = {
        ACTIV: "menu-navigation__activity"
    }

    function addingOrRemovingClassWhenScrolling() {
        let windowwScroll = window.pageYOffset;
        if (windowwScroll >= 850 && windowwScroll < 1500) {
            buttonTarget.classList.add(objectClass.ACTIV);
            buttonPortfolio.classList.remove(objectClass.ACTIV);
            buttonTechnologies.classList.remove(objectClass.ACTIV);
            buttonAbout.classList.remove(objectClass.ACTIV);
            buttonContacts.classList.remove(objectClass.ACTIV);
        }
        else if (windowwScroll >= 1500 && windowwScroll <= 2500) {
            buttonPortfolio.classList.add(objectClass.ACTIV);
            buttonTarget.classList.remove(objectClass.ACTIV);
            buttonTechnologies.classList.remove(objectClass.ACTIV);
            buttonAbout.classList.remove(objectClass.ACTIV);
            buttonContacts.classList.remove(objectClass.ACTIV);
        }
        else if (windowwScroll >= 2500 && windowwScroll <= 3200) {
            buttonTechnologies.classList.add(objectClass.ACTIV);
            buttonPortfolio.classList.remove(objectClass.ACTIV);
            buttonAbout.classList.remove(objectClass.ACTIV);
            buttonContacts.classList.remove(objectClass.ACTIV);
        }
        else if (windowwScroll >= 3300 && windowwScroll <= 4100) {
            buttonAbout.classList.add(objectClass.ACTIV);
            buttonTarget.classList.remove(objectClass.ACTIV);
            buttonPortfolio.classList.remove(objectClass.ACTIV);
            buttonContacts.classList.remove(objectClass.ACTIV);
            buttonTechnologies.classList.remove(objectClass.ACTIV);
        }
        else if (windowwScroll >= 4200) {
            buttonContacts.classList.add(objectClass.ACTIV);
            buttonTarget.classList.remove(objectClass.ACTIV);
            buttonPortfolio.classList.remove(objectClass.ACTIV);
            buttonTechnologies.classList.remove(objectClass.ACTIV);
            buttonAbout.classList.remove(objectClass.ACTIV);

        }
    }

    document.getElementById('button-title__button-next').onclick = function () {
        const element = document.getElementById('Id-My-activity-title');
        element.scrollIntoView({ block: "start", inline: "center", behavior: "smooth" });
    }

    document.getElementById('button-target').onclick = function () {
        const element = document.getElementById('Id-My-activity-title');
        element.scrollIntoView({ block: "start", inline: "center", behavior: "smooth" });
    }

    document.getElementById('button-portfolio').onclick = function () {
        const element = document.getElementById('Id-My-work-scroll');
        element.scrollIntoView({ block: "start", inline: "center", behavior: "smooth" });
    }

    document.getElementById('button-technologies').onclick = function () {
        const element = document.getElementById('Scroll-technologies');
        element.scrollIntoView({ block: "center", inline: "center", behavior: "smooth" });
    }

    document.getElementById('button-about').onclick = function () {
        const element = document.getElementById('Id-im-person-scroll');
        element.scrollIntoView({ block: "start", inline: "center", behavior: "smooth" });
    }

    document.getElementById('button-contacts').onclick = function () {
        window.scrollTo({ top: 5500, left: 0, behavior: 'smooth' });
    }

    window.onscroll = function () {
        addingOrRemovingClassWhenScrolling()
    }

    document.getElementById('IdLinkVk').onclick = function () {
        window.location.href = 'https://vk.com/arturvladimirovichh';
    }

    document.getElementById('IdLinkTelegram').onclick = function () {
        window.location.href = 'https://t.me/faunra';
    }

    document.getElementById('IdLinkGithub').onclick = function () {
        window.location.href = 'https://github.com/Artur78r';
    }

    document.querySelector('.footer-button').onclick = function () {
        window.location.href = 'https://t.me/faunra';
    }
}
