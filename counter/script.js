(function(){
    const  buttons=document.querySelectorAll('.btn-counter') //querySelectorAll when wwe want to access more than one element

    let count=0;
    buttons.forEach(function(button){  //button in function parameter is button tag in html file
        button.addEventListener('click',function(){
            if(button.classList.contains('decrease-btn')){ //button.classList represent button class
                count--;
            }else if(button.classList.contains('increase-btn')){
                count++;
            }else if(button.classList.contains('reset-btn')){
                count=0;
            }  
            
            const counter=document.querySelector('.counter');
            counter.textContent=count;

            if(count>0){
                counter.style.color="green";
            }else if(count<0){
                counter.style.color="red";
            }else{
                counter.style.color="blue"
            }
        })
    }) 
})()
    