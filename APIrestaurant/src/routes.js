const express = require('express');
const router = express.Router();

const Controller = require('./controllers/Controller');

router.get('/cliente', Controller.buscarCliente);
router.get('/fornecedor', Controller.buscarFornecedor);
router.get('/funcionario', Controller.buscarFuncionario);
router.get('/produto', Controller.buscarProduto);
router.get('/estoque', Controller.buscarEstoque);
router.get('/pedido', Controller.buscarPedido);

//router.get('/tes/:id', Controller.buscarUm);

router.post('/cliente/cadastrar', Controller.inserirCliente);
router.post('/fornecedor/cadastrar', Controller.inserirFornecedor);
router.post('/funcionario/cadastrar', Controller.inserirFuncionario);
router.post('/produto/cadastrar', Controller.inserirProduto);
router.post('/pedido/lancar', Controller.inserirPedido);

router.put('/pedido/fechar/:id', Controller.alterarPedido);
router.put('/estoque/controle/:id', Controller.alterarEstoque);  

//router.delete('/tira/:id', Controller.excluir);

module.exports = router;