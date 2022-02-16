document.addEventListener('keypress',function(e){
    playSound(e.key);
});
document.querySelectorAll('button').forEach((button)=>button.addEventListener('click',function(e){
    playSound(this.innerHTML);
}))
function playSound(key){
    switch(key){
        case'w':
            const wAudio=new Audio('/sounds/crash.mp3');
            wAudio.play();
            animation(key);
            break;
        case'a':
            const aAudio=new Audio('/sounds/kick-bass.mp3');
            aAudio.play();
            animation(key);
            break;
        case's':
            const sAudio=new Audio('/sounds/snare.mp3');
            sAudio.play();
            animation(key);
            break;
        case'd':
            const dAudio=new Audio('/sounds/tom-1.mp3');
            dAudio.play();
            animation(key);
            break;
        case'j':
            const jAudio=new Audio('/sounds/tom-2.mp3');
            jAudio.play();
            animation(key);
            break;
        case'k':
            const kAudio=new Audio('/sounds/tom-3.mp3');
            kAudio.play();
            animation(key);
            break;
        case'l':
            const lAudio=new Audio('/sounds/tom-4.mp3');
            lAudio.play();
            animation(key);
            break;
            
    }
}
function animation(key){
    document.querySelector(`.${key}`).classList.add('pressed');
    setTimeout(function(){document.querySelector(`.${key}`).classList.remove('pressed');},200);
}
