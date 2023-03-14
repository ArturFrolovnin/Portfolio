document.getElementById('IdLinkVk').onclick = function () {
    window.location.href = 'https://vk.com/arturvladimirovichh';
    
}

document.getElementById('IdLinkTelegram').onclick =  function () {
    window.location.href = 'https://t.me/faunra';
}

document.getElementById('IdLinkGithub').onclick = function () {
    window.location.href = 'https://github.com/Artur78r';
}

document.querySelector('.footer-button').onclick = function () {
    window.location.href = 'https://t.me/faunra';
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
