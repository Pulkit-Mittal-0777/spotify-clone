const audio=new Audio('songs/1.mp3');
// audio.play();
let index=0;
const play=document.querySelector('.play');
const bar=document.querySelector('.bar');
const gif=document.querySelector('.gif');
const singer=document.querySelector('.singer');
const title=document.querySelector('.title');
const forward=document.querySelector('.forward')
const back=document.querySelector('.back')


const songitem=Array.from(document.querySelectorAll('.songitem'));
const icon=Array.from(document.querySelectorAll('.playitem'));

let songs=[

    {songName:"Tum Hi Ho",filepath:"songs/1.mp3",coverpath:"cover/1.jpeg",singer:"(Arijit singh)"},
    {songName:"Love Me Thoda Aur",filepath:"songs/2.mp3",coverpath:"cover/2.jpeg",singer:"(darsan raval)"},
    {songName:"O Bedardeya",filepath:"songs/3.mp3",coverpath:"cover/3.jpeg",singer:"(b.parak)"},
    {songName:"Savan Aya H",filepath:"songs/4.mp3",coverpath:"cover/4.jpeg",singer:"(pulkit)"},

]
songitem.forEach((element,i)=>{
    // console.log(element,i);
    element.querySelector('img').src=songs[i].coverpath;
    element.querySelector('span').innerText=songs[i].songName;
    
})
function makeAllPlays(){
    icon.forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');    
        play.classList.remove('fa-circle-pause');
        play.classList.add('fa-circle-play');
    })
}
icon.forEach((element)=>{
    element.addEventListener('click',(e)=>{
        // index=parseInt(e.target.id-1);
        // singer.innerText=songs[index].singer;
        // title.innerText=songs[index].songName+" --";
        // audio.src=songs[index].filepath;
        // makeAllPlays();
        // e.target.classList.remove('fa-circle-play');
        // e.target.classList.add('fa-circle-pause');
        // play.classList.remove('fa-circle-play');
        // play.classList.add('fa-circle-pause');
        // audio.currentTime=0;
        // audio.play();
        // gif.style .opacity=1;
        index=parseInt(e.target.id-1);
        // audio.pause();
        // audio.src=songs[index].filepath;
        
        
        if(audio.paused){
            // makeAllPlays();
            audio.src=songs[index].filepath;
            audio.play();
            singer.innerText=songs[index].singer;
            title.innerText=songs[index].songName+" --";
                        
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            play.classList.remove('fa-circle-play');
            play.classList.add('fa-circle-pause');
            audio.currentTime=0;
            
            gif.style .opacity=1;
        }
        else{
            audio.src=songs[index].filepath;
            audio.pause();
            makeAllPlays();
            e.target.classList.remove('fa-circle-pause');
            e.target.classList.add('fa-circle-play');     
            play.classList.remove('fa-circle-pause');
            play.classList.add('fa-circle-play');                                                         






play.classList.remove('fa-circle-pause');
            play.classList.add('fa-circle-play');
            gif.style .opacity=0;    
        }
        
        
        

    })
})
back.addEventListener('click',(e)=>{
    if(index==0){
        index=0;
    }
    else{
        index=index-1;
    }
    audio.src=songs[index].filepath;
    singer.innerText=songs[index].singer;
    title.innerText=songs[index].songName;
    makeAllPlays();
    
    play.classList.remove('fa-circle-play');
    play.classList.add('fa-circle-pause');
    audio.currentTime=0;
    audio.play();
    gif.style .opacity=1;

})
forward.addEventListener('click',(e)=>{
    if(index==3){
        index=0;
    }
    else{
        index=index+1;
    }
    audio.src=songs[index].filepath;
    singer.innerText=songs[index].singer;
    title.innerText=songs[index].songName;
    makeAllPlays();
    
    play.classList.remove('fa-circle-play');
    play.classList.add('fa-circle-pause');
    audio.currentTime=0;
    audio.play();
    gif.style .opacity=1;

})
play.addEventListener('click',()=>{
    if(audio.paused ){
        singer.innerText=songs[index].singer;
        title.innerText=songs[index].songName;
        audio.play();
        play.classList.remove('fa-circle-play');
        play.classList.add('fa-circle-pause');
        gif.style .opacity=1;
 
    }
    else{
        audio.pause();
        play.classList.remove('fa-circle-pause');
        play.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})
audio.addEventListener('timeupdate',()=>{
    progress=parseInt((audio.currentTime/audio.duration)*100);
    bar.value=progress;
    if(audio.currentTime==audio.duration){
        if(index==3){
            index=0;
        }
        else{
            index=index+1;
        }
        audio.src=songs[index].filepath;
        singer.innerText=songs[index].singer;
        title.innerText=songs[index].songName;
        makeAllPlays();
        
        play.classList.remove('fa-circle-play');
        play.classList.add('fa-circle-pause');
        audio.currentTime=0;
        audio.play();
        gif.style .opacity=1;

    }
})
bar.addEventListener('change',()=>{
    audio.currentTime=(bar.value*audio.duration)/100;
})