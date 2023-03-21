export function SectionSkills() {

    let slides = document.querySelectorAll(".clide-single");
    let slider = [];
    let timer;

    for (let i = 0; i < slides.length; i++) {
        slider[i] = slides[i].src;
        slides[i].remove();
    }

    let step = 0;
    let offset = 0;

    function draw() {
        let img = document.createElement("img");
        img.src = slider[step];
        img.classList.add('clide-single');
        img.style.left = offset * 3072 + 'px';
        document.querySelector(".slide").appendChild(img);
        if (step + 1 == slider.length) {
            step = 0
        }
        else {
            step++;
        }
        offset = 1;

    }
    
    function leftFun() {

       timer = setTimeout(function () {

            let slides2 = document.querySelectorAll(".clide-single")
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

