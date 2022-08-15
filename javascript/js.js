let elementos = document.querySelectorAll('[type=radio]');

// ------------- Para a resposta correta

    for(var i = 0; i < elementos.length; i++){
        elementos[i].addEventListener('change',function(e){
            let marcado = e.target.value;
            if(marcado == "correta"){
                        
                let parentNode = e.target.parentNode;
                parentNode.style.backgroundColor = '#32CD32';
                    alert('Sempre soube que você sabia! #emocionada');


                    let els = parentNode.parentNode.querySelectorAll('[type=radio]');

                        for(var n = 0; n < els.length; n++){
                            els[n].disabled = true;
                            }

// ------------- Para a resposta incorreta
                        
    }else if(marcado == "incorreta"){
        let parentNode = e.target.parentNode;
        parentNode.style.backgroundColor = '#FF0000';
            alert('É, você errou! Acho que está precisando dormir em!');

                let els = parentNode.parentNode.querySelectorAll('[type=radio]');

                        for(var n = 0; n < els.length; n++){
                            els[n].disabled = true;}
            }
        })
    }