ui_model = function(){
    return {
        pegaValores : function(){
            return {
                tipoMovimento : document.querySelector('#tipoMovimento').value,
                descricao : document.querySelector('#descricao').value,
                valor : document.querySelector('#valor').value
            }
        }
    };
};

data_model = function(){

};

controller = function(ui, data){
    let adicionarItem = function(){
        //1.Pegar os valores dos inputs
        console.log(ui().pegaValores());
        //2.Adicionar o item na nossa estrutura de dados
        //3.Adicionar na nossa UI (tabela) a entrada
        //4.Calcular o novo budget total
        //5.Atualizar a UI (totais)
        //console.log('Adicionado o item');
    };

    let configuraOsListeners = function(){
        document.querySelector('#btnSalvar').addEventListener('click', function(){
            adicionarItem();
            //console.log('Clicou no botão')
        });
        document.addEventListener('keyup', function(event){
            if(event.key === 'Enter'){
                adicionarItem();
                //console.log('O Enter foi clicado');
            }
        });
    }

    return {
        init: function(){
            console.log('Inicia a aplicação!');
            configuraOsListeners();
        }
    }
};

controller(ui_model, data_model).init();