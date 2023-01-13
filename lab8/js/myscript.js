var form = document.getElementById('form');
var add = document.getElementById('add1');
var save = document.getElementById('save1');

add.onclick = function(){
    const line = document.querySelector('.line');
    const elem  = line.cloneNode(true);
    form.appendChild(elem);
   
}

form.addEventListener('click',(event)=>{
    tar=event.target;
    el= tar.parentNode;
    if(tar.id == 'up'){  
        const prev = el.previousSibling;
        if(prev != document.getElementsByClassName('line')[0])
        form.insertBefore(el,prev);
    }
    if(tar.id == 'down'){
        const next = el.nextSibling;
        form.insertBefore(el,next.nextSibling);
    } 
    if(tar.id == 'delete'){
        form.removeChild(el);
    }
})

save.onclick = function(){

    var text = '{';
    
    const line = document.getElementsByClassName('line');
    for(const prop in line){
        if(line.hasOwnProperty(prop))
        {
            const el = line[prop];
            if(el !=document.querySelector(".line:first-child"))
            {
                text+= '"' + el.children[0].value + '":"' + el.children[1].value + '"'; 
            
                if (el != document.querySelector(".line:last-child")){
                    text+= ','; 
                }
            }
        }
    }
    text +='}';
    let div = document.createElement('div');
    div.innerHTML = text;
    document.body.appendChild(div);
}
