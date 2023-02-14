// 1 модальное окно ................................

document.getElementById("Id-icon-modal-box-x-0").addEventListener("click", function(){
    document.getElementById("Id-Modal-X_0").classList.add("Open-X_0");
});


// document.getElementById("close-my-modal-btn").addEventListener("click", function(){
//     document.getElementById("one-test-modal").classList.remove("open");
// });


document.getElementById("Id-Modal-X_0").addEventListener("click" , function bagraundClose(event){
    let dataTab = event.target.getAttribute('data-modal');
    if(dataTab == 0){ 
        document.getElementById("Id-Modal-X_0").classList.remove("Open-X_0");
    }
});


// игра для 1го модального окна 

window.onload = function(){


    for (var i = 0; i<9; i++)
    {
        document.getElementById('game').innerHTML+='<div class="block"></div>';
        
    }

    var hod = 0;

    document.getElementById('game').onclick = function(event)
    {
        console.log(event);
        if(event.target.className == 'block')
        {
            if(hod%2==0)
            {
                event.target.innerHTML = 'X';
            }
            else
            {
                event.target.innerHTML ='0';
            }
            hod++;
            checkWinner();
        }
    }

    function checkWinner()
    {
        let allBlock = document.getElementsByClassName('block');

        if(allBlock[0].innerHTML=='X' && allBlock[1].innerHTML=='X' && allBlock[2].innerHTML=='X') {alert('win X');}
        if(allBlock[3].innerHTML=='X' && allBlock[4].innerHTML=='X' && allBlock[5].innerHTML=='X') {alert('win X');}
        if(allBlock[6].innerHTML=='X' && allBlock[7].innerHTML=='X' && allBlock[8].innerHTML=='X') {alert('win X');}
    
        if(allBlock[0].innerHTML=='X' && allBlock[3].innerHTML=='X' && allBlock[6].innerHTML=='X') {alert('win X');}
        if(allBlock[1].innerHTML=='X' && allBlock[4].innerHTML=='X' && allBlock[7].innerHTML=='X') {alert('win X');}
        if(allBlock[2].innerHTML=='X' && allBlock[5].innerHTML=='X' && allBlock[8].innerHTML=='X') {alert('win X');}

        if(allBlock[0].innerHTML=='X' && allBlock[4].innerHTML=='X' && allBlock[8].innerHTML=='X') {alert('win X');}
        if(allBlock[2].innerHTML=='X' && allBlock[4].innerHTML=='X' && allBlock[6].innerHTML=='X') {alert('win X');}

    //00
        if(allBlock[0].innerHTML=='0' && allBlock[1].innerHTML=='0' && allBlock[2].innerHTML=='0') {alert('win 0');}
        if(allBlock[3].innerHTML=='0' && allBlock[4].innerHTML=='0' && allBlock[5].innerHTML=='0') {alert('win 0');}
        if(allBlock[6].innerHTML=='0' && allBlock[7].innerHTML=='0' && allBlock[8].innerHTML=='0') {alert('win 0');}
    
        if(allBlock[0].innerHTML=='0' && allBlock[3].innerHTML=='0' && allBlock[6].innerHTML=='0') {alert('win 0');}
        if(allBlock[1].innerHTML=='0' && allBlock[4].innerHTML=='0' && allBlock[7].innerHTML=='0') {alert('win 0');}
        if(allBlock[2].innerHTML=='0' && allBlock[5].innerHTML=='0' && allBlock[8].innerHTML=='0') {alert('win 0');}

        if(allBlock[0].innerHTML=='0' && allBlock[4].innerHTML=='0' && allBlock[8].innerHTML=='0') {alert('win 0');}
        if(allBlock[2].innerHTML=='0' && allBlock[4].innerHTML=='0' && allBlock[6].innerHTML=='0') {alert('win 0');}




    } 
}




let slides = document.querySelectorAll(".clide-single");

 let slider = [];

for (let i = 0; i < slides.length ; i++ ){
    slider[i] = slides[i].src;
    slides[i].remove();

}


let step = 0;
let offset = 0;

function draw(){
    let img = document.createElement("img");
    img.src = slider[step];
    img.classList.add('clide-single');
    img.style.left = offset*3072 + 'px';
    document.querySelector(".slide").appendChild(img);
    if(step + 1 == slider.length ){
        step = 0
    }
    else{
        step++;
    }
    offset = 1;
    
}
function left(){

    timer = setTimeout(function(){

          
        let slides2 = document.querySelectorAll(".clide-single")
        let offset = 0;
        for (let index = 0; index < slides2.length; index++) {
            slides2[index].style.left = offset*20 - 18 + "%";
            offset++;
        
        }
        setTimeout(function(){
            slides2[0].remove();
           
            draw();
            left();
        },2000)

    }, 1000)
   

}

draw();draw();draw();draw();draw();draw();

left();

