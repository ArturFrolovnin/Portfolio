export function SectionSkills() {

    const arrayImg = document.querySelectorAll(".slider-img");
    let emptyArray = [];
    let timer;
    let step = 0;
    let offset = 0;

    for (let index = 0; index < arrayImg.length; index++) {
        emptyArray[index] = arrayImg[index].src;
        arrayImg[index].remove();
    }

    function createImg(){
        return document.createElement("img");
    }
    function draw() {
        let img = createImg();
        img.src = emptyArray[step];
        img.classList.add('slider-img');
        img.style.left = offset * 2000 + 'px';
        document.querySelector(".slide").appendChild(img);
        if (step + 1 == emptyArray.length) {
            step = 0
        }
        else {
            step++;
        }
        offset = 1;
    }

    function leftFun() {
        timer = setTimeout(function () {
            let slides2 = document.querySelectorAll(".slider-img")
            let offset = 0;
            for (let index = 0; index < slides2.length; index++) {
                slides2[index].style.left = offset * 20 - 18 + "%";
                offset++;
            }
            setTimeout(function () {
                slides2[0].remove();
                draw();
                leftFun();
            }, 2000)
        }, 1000)
    }
    draw(); draw(); draw(); draw(); draw(); draw();
    leftFun();
}

