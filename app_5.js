
function positionAt(anchor, position, elem) {
    
    let pos = anchor.getBoundingClientRect();
    let x = window.pageXOffset; 
    let y = window.pageYOffset;

    if (position=='top'){
        x=x+pos.x;
        y=y+pos.y-elem.offsetHeight;
        console.log (x, y)
    }
    if (position=="right"){
        x=x+pos.x+anchor.offsetWidth;
        y=y+pos.y;
        console.log (x, y)
    }
    if (position=='bottom'){
        x=x+pos.x;
        y=y+pos.y+anchor.offsetHeight;
        console.log (x, y)
    }
    elem.style.position = 'absolute';
    console.log(elem.style.position)

    elem.style.left = x+"px";
    console.log(elem.style.left)

    elem.style.top = y+"px";
    console.log(elem.style.top)
    
}

function showNote(anchor, position, html) {
     let note = document.createElement('div');
    note.className = "note";
    note.innerHTML = html;
    document.body.append(note);
    positionAt(anchor, position, note);
}
    // test it
 let blockquote = document.querySelector('blockquote');
    
showNote(blockquote, "top", "note above");
showNote(blockquote, "right", "note at the right");
showNote(blockquote, "bottom", "note below");


