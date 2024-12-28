(function(){
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event){
        event.preventDefault(); // preventDefault will prevent the page from refreshing
        const msg = document.querySelector('.message'); 
        const content = document.querySelector('.output');
        
        //use textContent to show value

        content.textContent = `${msg.value}`;
        msg.value = ""
    })
})()