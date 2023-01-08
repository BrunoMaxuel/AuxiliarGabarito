gabaritoAluno = [];
contExecution = 0;
display = false;
function increment(letra){
    let contador = parseInt(document.querySelector('#contador').innerHTML);
    gabaritoAluno[contador] = letra;
    contador++;
    document.querySelector('#contador').innerHTML = contador;
    contExecution++;
    if(display){
        document.querySelect('#mostrar').innerHTML = gabaritoAluno;
    }
}
function mostrarGabarito(){
    if(display){
        document.querySelector('#mostrar').innerHTML = '';
        display = false;
    }else{
        document.querySelector('#mostrar').innerHTML = gabaritoAluno;
        
        display = true
    }
    
}
function limparTudo(){
    var resp = confirm("DESEJA LIMPAR TUDO MESMO?");
    if(resp){
    document.querySelector('#contador').innerHTML = 0;
    gabaritoAluno = [];
    document.querySelector('#mostrar').innerHTML = '';
    contExecution = 0;
    display = false;
    }
    
}
function removerQuestao(){
    if(contExecution > 0){
        if(display){
        contExecution--;
        document.querySelector('#contador').innerHTML = contExecution;
        gabaritoAluno.pop();
        document.querySelector('#mostrar').innerHTML = gabaritoAluno;
        }else{
            contExecution--;
            document.querySelector('#contador').innerHTML = contExecution;
            gabaritoAluno.pop();
        }
    }
}
