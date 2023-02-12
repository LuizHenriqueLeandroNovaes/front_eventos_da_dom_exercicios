let body = document.querySelector('body');
let ash = document.querySelector('.Ash');

function func_horizontal (){
    return parseInt(ash.style.right.split('px')[0]) || 2 ;
}

function func_vertical (){
    return parseInt(ash.style.top.split('px')[0]) || 2 ;
}

body.addEventListener('keydown',(evento)=>{
    evento.stopPropagation();

    switch(evento.key){

        case 'ArrowLeft':
            ash.src = `./assets/left.png`;
            if(func_horizontal() < 770){
                ash.style.right = `${func_horizontal() + 8 }px`;
            }

        break ;

        case 'ArrowRight':
            ash.src = `./assets/right.png`;
            if(func_horizontal() > 2){
                ash.style.right = `${func_horizontal() - 8 }px`;
            }

        break ;
        
        case 'ArrowDown':
            ash.src = `./assets/front.png`;
            if(func_vertical() < 625){
                ash.style.top = `${func_vertical() + 8 }px`;
            }

        break ;
        
        case 'ArrowUp':
            ash.src = `./assets/back.png`;
            if(func_vertical() > 2){
                ash.style.top = `${func_vertical() - 8 }px`;
            }

        break ;

        default:

        break ;
    }
});