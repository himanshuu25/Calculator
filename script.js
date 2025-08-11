let box=document.getElementById('in');
let buttons=document.querySelectorAll('button');
let buttonsArr=Array.from(buttons);
let str='';
buttonsArr.forEach(function(btn){
    btn.addEventListener('click',function(e){
        if(e.target.textContent=='DEL'){
            str=str.substring(0,str.length-1);
            box.value=str;
        }
        else if(e.target.textContent=='AC'){
            str=' ';
            box.value=str;
        }
        else if(e.target.textContent=='='){
            let result;
            try{
            result=eval(str);
            str=result
            box.value=str;
            }
            catch(e){
                box.value="error";
            }
        }
        else{
            str=str+e.target.textContent;
            box.value=str;
        }
    })
})


