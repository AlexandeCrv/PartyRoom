let foto = document.getElementById('adicionar')
let espada = document.getElementById('espada')
let escudo = document.getElementById('escudo')
let espadadefogo = document.getElementById('espadadefogo')
let cajado = document.getElementById('cajado')
let varinha = document.getElementById('varinha')
let soco = document.getElementById('soco')
let pata = document.getElementById('pata')
let dual = document.getElementById('dual')
let olho = document.getElementById('olho')
let arvore = document.getElementById('arvore')




function bibiu(){
    let text = document.getElementById('inpt').value
    let questb = document.getElementById('questb')
    let questt = document.getElementById('questt')
    let questpp = document.getElementById('questp')
    let questm = document.getElementById('questm')
    let questh = document.getElementById('questh')
    let questf = document.getElementById('questf')
    let questa = document.getElementById('questa')
    let questsd = document.getElementById('questsd')
    let questar = document.getElementById('questar')
    let quests = document.getElementById('quests')
    let sc = document.getElementById('classeselect')
    
    let espada = document.getElementById('espada')
    let escudo = document.getElementById('escudo')
    let espadadefogo = document.getElementById('espadadefogo')
    let cajado = document.getElementById('cajado')
    let varinha = document.getElementById('varinha')
    let soco = document.getElementById('soco')
    let pata = document.getElementById('pata')
    let dual = document.getElementById('dual')
    let olho = document.getElementById('olho')
    let arvore = document.getElementById('arvore')



        //--- berseker ---//

    if (sc.value === 'Berseker' &&  text === 'dar suporte') {
        questb.innerHTML = text + ' <br> (Não recomendado)'
        
    }

    else if(sc.value === 'Berseker' ){
        questb.innerHTML = text 
        espada.src = 'espadagg.png'
    }

    //--- tank ---//

    else if ( sc.value === 'Tanker'  &&  text == 'dar dano') {
        questt.innerHTML =  text + '(  <br> Não recomendado)'

    }else if (sc.value === 'Tanker'){
        questt.innerHTML = text
        escudo.src = 'escudogrande.png'   
    }


     //--- paladin ---//


    else if ( sc.value == 'Paladin'  && text == 'mobilidade' ){
        questpp.innerHTML =  text + '(  <br> Não recomendado )'

    }else if (sc.value == 'Paladin'){
        questpp.innerHTML = text
        espadadefogo.src = 'espadagrande.png' 
    }

     //--- mago ---//


     else if ( sc.value == 'Wizard'  && text == 'segurar dano'){
        questm.innerHTML =  text + '(  <br> Não recomendado )'

    }else if (sc.value == 'Wizard'){
        questm.innerHTML = text
        cajado.src = 'cajadogrande.png'
    }

     //--- healer ---//

     else if ( sc.value == 'Healer'  && text == 'segurar dano'){
        questh.innerHTML =  text + '(  <br> Não recomendado )'

    }else if (sc.value == 'Healer'){
        questh.innerHTML = text
        varinha.src = 'varinhagrande.png' }

         //--- Fighter ---//


         else if ( sc.value == 'Fighter'  && text == 'suporte'){
            questf.innerHTML =  text + '(  <br> Não recomendado )'
    
        }else if (sc.value == 'Fighter'){
            questf.innerHTML = text 
            soco.src = 'brass-knuckles 64.png'}


             //--- Animago ---//



             else if ( sc.value == 'Animago'  && text == 'segurar dano'){
                questa.innerHTML =  text + '(  <br> Não recomendado )'
        
            }else if (sc.value == 'Animago'){
                questa.innerHTML = text
                pata.src = 'druid (1).png'  }


                 //--- Soul Duelist ---//

                 else if ( sc.value == 'Soul Duelist'  && text == 'suporte'){
                    questsd.innerHTML =  text + '(  <br> Não recomendado )'
            
                }else if (sc.value == 'Soul Duelist'){
                    questsd.innerHTML = text
                    dual.src = 'swords 64.png' }


                    //--- Arcanist ---//


                    else if ( sc.value == 'Arcanist'  && text == 'suporte'){
                        questar.innerHTML =  text + '(  <br> Não recomendado )'
                
                    }else if (sc.value == 'Arcanist'){
                        questar.innerHTML = text
                        olho.src = 'star-of-david 64.png'   }

                          //--- Skull Void ---//


                          else if ( sc.value == 'Skull Void'  && text == 'dar dano'){
                            quests.innerHTML =  text + '(  <br> Não recomendado )'
                    
                        }else if (sc.value == 'Skull Void'){
                            quests.innerHTML = text
                            arvore.src = 'cranio.png'  }







    if(text == ''){
        alert('Digite uma função pra classe!')
    }
   
}


function sair(armasmenores){
    
    switch(armasmenores){

        case 'add':
            foto.src = 'adicionar.png'
          
            break

        case 'espada':
            espada.src = 'espada.png'
            questb.innerHTML = ''
            break

        case 'escudo':
            escudo.src = 'escudo.png'
            questt.innerHTML = ''
            break

        case 'espadadefogo':
            espadadefogo.src = 'espadaf.png'
            questpp.innerHTML = ''
            break
            
        case 'cajado':
            cajado.src = 'cajadomagico.png'   
            questm.innerHTML =  ''
            break

        case 'varinha':
            varinha.src= 'varinhamagica.png'
            questh.innerHTML = '' 
            break
        
            case 'soco':
            soco.src= 'brass-knuckles.png'
            questf.innerHTML = '' 
            break

            case 'pata':
            pata.src= 'druid.png'
            questa.innerHTML =  ''
            break

            case 'dual':
            dual.src= 'swords.png'
            questsd.innerHTML = ''
            break

            case 'olho':
                olho.src = 'star-of-david.png'
                questar.innerHTML = ''
                break
            case 'arvore':
            arvore.src= 'cranio (1).png'
            quests.innerHTML = ''
            break
    }

}
