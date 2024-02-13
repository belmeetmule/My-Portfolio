const expandArrows = document.querySelectorAll('.skills');

expandArrows.forEach((item)=>{ 
item.addEventListener('click', () => {
    console.log('clicked');
    const target = item.dataset.target;
    const skill = document.getElementById(target);
    
    skill.classList.toggle('hidden');
    item.parentElement.classList.toggle('border')

    if(skill.classList.contains('hidden')){
        item.src = 'images/icons/horizontal-arrow.svg'
    }else{
        item.src = 'images/down-arrow.svg'
    }
});

})
