const jwt = require('jsonwebtoken');
const Service = require('../services/Service');

module.exports = {
    buscarCliente: async (req, res)=> {
        let json = {error:'', result:[]};

        let cliente = await Service.buscarCliente();

        for(let i in cliente){
            json.result.push({
                nome: cliente[i].nome,
                senha: cliente[i].senha,
                email: cliente[i].email,
                endereco: cliente[i].endereco
            });
        }
        res.json(json);
    },

    buscarFornecedor: async (req, res)=> {
        let json = {error:'', result:[]};

        let fornecedor = await Service.buscarFornecedor();

        for(let i in fornecedor){
            json.result.push({
                nome: fornecedor[i].nome,
                senha: fornecedor[i].senha,
                email: fornecedor[i].email,
                fornece: fornecedor[i].fornece
            });
        }
        res.json(json);
    },

    buscarFuncionario: async (req, res)=> {
        let json = {error:'', result:[]};

        let funcionario = await Service.buscarFuncionario();

        for(let i in funcionario){
            json.result.push({
                nome: funcionario[i].nome,
                senha: funcionario[i].senha,
                email: funcionario[i].email,
                cargo: funcionario[i].cargo
            });
        }
        res.json(json);
    },

    buscarProduto: async (req, res)=> {
        let json = {error:'', result:[]};

        let produto = await Service.buscarProduto();

        for(let i in produto){
            json.result.push({
                nome: produto[i].nome,
                preco: produto[i].preco,
                ingredientes: produto[i].ingredientes,
                descricao: produto[i].descricao
            });
        }
        res.json(json);
    },

    buscarEstoque: async (req, res)=> {
        let json = {error:'', result:[]};

        let estoque = await Service.buscarEstoque();

        for(let i in estoque){
            json.result.push({
                ingrediente: estoque[i].ingrediente,
                quantidade: estoque[i].quantidade
            });
        }
        res.json(json);
    },

    buscarPedido: async (req, res)=> {
        let json = {error:'', result:[]};

        let pedido = await Service.buscarPedido();

        for(let i in pedido){
            json.result.push({
                id_cliente: pedido[i].id_cliente,
                pedido_item: pedido[i].pedido_item
            });
        }
        res.json(json);
    },

/*     buscarUm: async(req,res) => {
        let json = {error:'', result:{}};

        let id = req.params.id;
        let tes = await Service.buscarUm(id);

        if(tes){
            json.result = tes;
        }

       res.json(json);
    },
 */

    inserirCliente: async(req,res) => {
        let json = {error:'', result:{}};

        let nome = req.body.nome;
        let senha = req.body.senha;
        let email = req.body.email;
        let endereco = req.body.endereco;

        if(nome && senha && email && endereco){
            let cliente = await Service.inserirCliente(nome, senha, email, endereco);
            json.result = {
                id: cliente,
                nome,
                senha,
                email,
                endereco
            };
        }else{
            json.error = 'Campos não enviados';
        }

        res.json(json);
    },

    inserirFornecedor: async(req,res) => {
        let json = {error:'', result:{}};

        let nome = req.body.nome;
        let senha = req.body.senha;
        let email = req.body.email;
        let fornece = req.body.fornece;

        if(nome && senha && email && fornece){
            let fornecedor = await Service.inserirFornecedor(nome, senha, email, fornece);
            json.result = {
                id: fornecedor,
                nome,
                senha,
                email,
                fornece
            };
        }else{
            json.error = 'Campos não enviados';
        }

        res.json(json);
    },

    inserirFuncionario: async(req,res) => {
        let json = {error:'', result:{}};

        let nome = req.body.nome;
        let senha = req.body.senha;
        let email = req.body.email;
        let cargo = req.body.cargo;

        if(nome && senha && email && cargo){
            let funcionario = await Service.inserirFuncionario(nome, senha, email, cargo);
            json.result = {
                id: funcionario,
                nome,
                senha,
                email,
                cargo
            };
        }else{
            json.error = 'Campos não enviados';
        }

        res.json(json);
    },

    inserirProduto: async(req,res) => {
        let json = {error:'', result:{}};

        let nome = req.body.nome;
        let preco = req.body.preco;
        let ingrediente = req.body.ingrediente;
        let descricao = req.body.descricao;

        if(nome && preco && ingrediente && descricao){
            let produto = await Service.inserirProduto(nome, preco, ingrediente, descricao);
            json.result = {
                id: produto,
                nome,
                preco,
                ingrediente,
                descricao
            };
        }else{
            json.error = 'Campos não enviados';
        }

        res.json(json);
    },

    inserirPedido: async(req,res) => {
        let json = {error:'', result:{}};

        let id_cliente = req.body.id_cliente;
        let pedido_item = req.body.pedido_item;
        let concluido = req.body.concluido;

        if(id_cliente && pedido_item && concluido){
            let pedido = await Service.inserirPedido(id_cliente, pedido_item, concluido);
            json.result = {
                id: pedido,
                id_cliente,
                pedido_item,
                concluido,
            };
        }else{
            json.error = 'Campos não enviados';
        }

        res.json(json);
    },

     alterarPedido: async(req,res) => {
        let json = {error:'', result:{}};

        let id = req.params.id;
        let concluido = req.body.concluido;

        if(id && concluido){
            await Service.alterarPedido(id, concluido);
            json.result = {
                id,
                concluido,
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    }, 

    alterarEstoque: async(req,res) => {
        let json = {error:'', result:{}};

        let id = req.params.id;
        let quantidade = req.body.quantidade;

        if(id && quantidade){
            await Service.alterarEstoque(id, quantidade);
            json.result = {
                id,
                quantidade,
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    }, 

/*     excluir: async(req, res) => {
        let json = {error:'', result:{}};

        await Service.excluir(req.params.id);
        
        res.json(json);
    } */

    login: async(req, res) => {

        let nome = req.body.nome;
        let senha = req.body.senha;
        let user = await Service.buscarUm(nome, senha);

        //verififcar usuario ??
/*         const user = {
            id: 1,
            username: 'richard',
            email: 'dick@bol.com' 
        } */
        if(user) {
            jwt.sign({user: user}, 'segredo', { expiresIn: '600s' }, (err, token) => {
                res.json({
                    token: token
                });
            });
        } else {res.json({
                message: 'Nome ou senha invalidos'
            });
        };
    },

    verificar: async(req, res) => {
        jwt.verify(req.token, 'segredo', (err, authData) => {
            if(err) {
                res.sendStatus(403);
            } else {
                res.json({
                    message: 'Tudo supinpa :D',
                    authData
                })
            }
        });
    },
    
}