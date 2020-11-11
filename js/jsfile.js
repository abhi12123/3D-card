const keanu = document.querySelector('.card');
const container = document.querySelector('.container');

container.addEventListener('mousemove',(e)=>{
    let xAxis=(window.innerWidth/2- e.pageX)/10;
    let yAxis=(window.innerHeight/2 - e.pageY)/10;
    keanu.style.transform='rotateY('+xAxis+'deg) rotateX('+yAxis+'deg)';
});
container.addEventListener('mouseenter',(e)=>{
    keanu.style.transition='none';
    keanu.style.transition='all 0.1s ease';
});
container.addEventListener('mouseleave',(e)=>{
    keanu.style.transform='rotateY(0deg) rotateX(0deg)';
    keanu.style.transition='all 0.5s ease';
});