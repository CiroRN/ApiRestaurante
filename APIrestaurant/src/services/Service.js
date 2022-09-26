const db = require('../db');

module.exports = {
    buscarCliente: () =>{
        return new Promise((aceito, rejeitado)=>{
            db.query('SELECT * FROM cliente', (error, results)=>{
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    buscarFornecedor: () =>{
        return new Promise((aceito, rejeitado)=>{
            db.query('SELECT * FROM fornecedor', (error, results)=>{
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    buscarFuncionario: () =>{
        return new Promise((aceito, rejeitado)=>{
            db.query('SELECT * FROM funcionario', (error, results)=>{
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    buscarProduto: () =>{
        return new Promise((aceito, rejeitado)=>{
            db.query('SELECT * FROM produto', (error, results)=>{
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    buscarEstoque: () =>{
        return new Promise((aceito, rejeitado)=>{
            db.query('SELECT * FROM estoque', (error, results)=>{
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    buscarPedido: () =>{
        return new Promise((aceito, rejeitado)=>{
            db.query('SELECT * FROM pedido', (error, results)=>{
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },
    
/*     buscarUm: (id) => {
        return new Promise((aceito,rejeitado)=>{

            db.query('SELECT * FROM test WHERE id = ?', [id], (error, results)=>{
                if(error) { rejeitado(error); return; }
                if(results.length > 0){
                    aceito(results[0]);
                }else{
                    aceito(false);
                }
            });
        });
    }, */

     inserirCliente: (nome, senha, email, endereco) => {
        return new Promise((aceito,rejeitado)=>{

            db.query('INSERT INTO cliente (nome, senha, email, endereco) VALUES (?, ?, ?, ?)', [nome, senha, email, endereco], (error, results)=>{
                if(error) { rejeitado(error); return; }
                aceito(results.insertId);
            });
        });
    },

    inserirFornecedor: (nome, senha, email, fornece) => {
        return new Promise((aceito,rejeitado)=>{

            db.query('INSERT INTO fornecedor (nome, senha, email, fornece) VALUES (?, ?, ?, ?)', [nome, senha, email, fornece], (error, results)=>{
                if(error) { rejeitado(error); return; }
                aceito(results.insertId);
            });
        });
    },

    inserirFuncionario: (nome, senha, email, cargo) => {
        return new Promise((aceito,rejeitado)=>{

            db.query('INSERT INTO funcionario (nome, senha, email, cargo) VALUES (?, ?, ?, ?)', [nome, senha, email, cargo], (error, results)=>{
                if(error) { rejeitado(error); return; }
                aceito(results.insertId);
            });
        });
    },

    inserirProduto: (nome, preco, ingrediente, descricao) => {
        return new Promise((aceito,rejeitado)=>{

            db.query('INSERT INTO produto (nome, preco, ingrediente, descricao) VALUES (?, ?, ?, ?)', [nome, preco, ingrediente, descricao], (error, results)=>{
                if(error) { rejeitado(error); return; }
                aceito(results.insertId);
            });
        });
    },

    inserirPedido: (id_cliente, pedido_item, concluido) => {
        return new Promise((aceito,rejeitado)=>{

            db.query('INSERT INTO pedido (id_cliente, pedido_item, concluido) VALUES (?, ?, ?)', [id_cliente, pedido_item, concluido], (error, results)=>{
                if(error) { rejeitado(error); return; }
                aceito(results.insertId);
            });
        });
    },

     alterarPedido: (id, concluido) => {
        return new Promise((aceito,rejeitado)=>{

            db.query('UPDATE pedido SET concluido = ? WHERE id = ?', [concluido, id], (error, results)=>{
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },  

    alterarEstoque: (id, quantidade) => {
        return new Promise((aceito,rejeitado)=>{

            db.query('UPDATE estoque SET quantidade = ? WHERE id = ?', [quantidade, id], (error, results)=>{
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },  

/*     excluir: (id) =>{
        return new Promise((aceito, rejeitado)=>{
            db.query('DELETE FROM test WHERE id = ?',[id], (error, results)=>{
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    } */

};