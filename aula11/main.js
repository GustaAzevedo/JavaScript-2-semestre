let ui_Model = (function () {
    let DomStrings = {
        inputMov: '#PouN',
        inputDesc: '#descrincao',
        inputValor: '#valor',
        btnSub: '#save',
        tabelaEntra: '#entra',
        tabelaSai: '#sai',

    }

    return {
        pega_valor: function () {
            return {
                tipoMov: document.querySelector(DomStrings.inputMov).value,
                desc: document.querySelector(DomStrings.inputDesc).value,
                valor: document.querySelector(DomStrings.inputValor).value
            }
        },
        addItemNaTabela: function (item, tipoMov) {
            // 1 Criar o Html da Linha
            let linha = document.createElement("tr");
            let colunaDesc = document.createElement("td");
            let colunaValor = document.createElement("td");

            // 2. Colocar os valores nas colunas
            colunaDesc.textContent = item.desc;
            colunaValor.textContent = item.valor;


            // 3. Incluir essa linha na Dom Principal(table)
            linha.appendChild(colunaDesc);
            linha.appendChild(colunaValor);

            // 4. Qual a tabela 
            let table;
            if (tipoMov == "rendas") {
                table = document.querySelector(DomStrings.tabelaEntra);
            }
            else {
                table = document.querySelector(DomStrings.tabelaSai);

            }

            // 5. imcluir na tabela
            table.appendChild(linha);


        },
        getDomStrings: function () {
            return DomStrings;
        }
    }

})();

data_Model = (function () {

    let despesa = function (id, desc, valor) {
        this.id = id;
        this.desc = desc;
        this.valor = valor;
    }

    let renda = function (id, desc, valor) {
        this.id = id;
        this.desc = desc;
        this.valor = valor;
    }

    let dados = {
        items: {
            despesas: [],
            rendas: [],
        },
        totais: {
            despesas: 0,
            rendas: 0,
        }
    }

    return {
        adicionaItem: function (tipoMov, desc, valor) {
            let id = 0;

            let sizeArray = dados.items[tipoMov].length;

            if (sizeArray > 0) {
                id = dados.items[tipoMov][sizeArray - 1].id + 1;
            }

            let NovoProd;
            switch (tipoMov) {
                case 'despesas':
                    NovoProd = new despesa(id, desc, valor);
                    break;
                case 'rendas':
                    NovoProd = new renda(id, desc, valor);
            }

            dados.items[tipoMov].push(NovoProd);
            return NovoProd;
            ;
        },

        testeDados: function () {   //----- FUNCÃO TESTE DE DADOS NA ARRAY
            console.log(dados);
        }
    }

})();

controller = function (ui, model) {
    //1.Pegar os valores dos inputs

    //2.Adicionar o item na nossa estrutura de dados

    //3.Adicionar na nossa UI (tabela) a entrada
    //4.Calcular o novo budget total
    //5.Atualizar a UI (totais)
    //console.log('Adicionado o item');
    let adicionaValor = function () {
        //1.Pegar os valores dos inputs
        //console.log('Adicionado o item');
        let inp = ui.pega_valor();

        //2.Adicionar o item na nossa estrutura de dados
        let novoProd = model.adicionaItem(inp.tipoMov, inp.desc, inp.valor);
        model.testeDados();

        //3.Adicionar na nossa UI (tabela) a entrada
        ui.addItemNaTabela(novoProd, inp.tipoMov);
        //4.Calcular o novo budget total
        //5.Atualizar a UI (totais)

    }

    let configListeners = function () {
        let DomStrings = ui.getDomStrings();
        document.querySelector(DomStrings.btnSub).addEventListener('click', function () {
            adicionaValor()
        });
        document.addEventListener('keydown', function (e) {
            if (e.key == 'Enter') {
                adicionaValor()
            }
        });
    }

    return {
        init: function () {
            configListeners();
        }
    }

};

controller(ui_Model, data_Model).init();