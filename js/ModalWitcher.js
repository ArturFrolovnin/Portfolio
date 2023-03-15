window.addEventListener('load', function ModalWitcher() {

    document.getElementById("ID-icon-modal-box-position-Witcher").addEventListener("click", function () {
        document.getElementById("ID-modal-witcher").classList.add("Open-Witcher");
    });

    document.getElementById("ID-modal-witcher").addEventListener("click", function bagraundClose(event) {
        let dataTab = event.target.getAttribute('data-modal');
        if (dataTab == 0) {
            document.getElementById("ID-modal-witcher").classList.remove("Open-Witcher");
        }
    });

    const ImgWitherBox = document.querySelectorAll('.ImgWither');

    document.querySelector('.button-naw-modal-box-Witcher').addEventListener('click', event => {
        if (event.target.tagName !== 'LI') return false;

        let filterclass = event.target.dataset['btn'];

        ImgWitherBox.forEach(elem => {

            elem.classList.remove('Animation-class');

            if (!elem.classList.contains(filterclass) && filterclass !== 'all') {
                elem.classList.add('Animation-class');
            }
        });

    });
})