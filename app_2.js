

function showNotification(options){
    let div = document.createElement('div');
    div.innerHTML = options.html;
    document.body.append(div);
    
    div.style.color=(options.color);

    setTimeout(()=>{
        document.body.remove(div)}, 1500)
    
    
}

showNotification({

html:'Hello',
color:'green',
})