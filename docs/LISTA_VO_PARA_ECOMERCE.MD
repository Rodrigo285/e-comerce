CHECKLIST DE VALUE OBJECTS — E-COMMERCE

1. Produtos e estoque
   [ ] Quantidade — Quantidade.ts: Inteiro positivo e limites permitidos.
   [ ] Sku — Sku.ts: Código obrigatório, formato e normalização.
   [ ] Peso — Peso.ts: Valor não negativo e unidade definida.
   [ ] Dimensoes — Dimensoes.ts: Comprimento, largura e altura válidos.

2. Preços e pagamentos
   [ ] Preco — Preco.ts: Valor monetário válido e operações de preço.
   [ ] Moeda — Moeda.ts: Código de moeda aceito, como BRL.
   [ ] NumeroParcelas — NumeroParcelas.ts: Inteiro dentro dos limites permitidos.

3. Cupons e promoções
   [ ] CodigoCupom — CodigoCupom.ts: Código obrigatório, formato e padronização.
   [ ] Desconto — Desconto.ts: Percentual ou valor fixo dentro dos limites.
   [ ] ValorMinimoPedido — ValorMinimoPedido.ts: Valor mínimo válido para a promoção.
   [ ] PeriodoValidade — PeriodoValidade.ts: Datas válidas e início anterior ou igual ao fim.

4. Carrinho e pedidos
   [ ] NumeroPedido — NumeroPedido.ts: Formato e regras do identificador do pedido.
   [ ] CodigoRastreio — CodigoRastreio.ts: Código de rastreio no formato adotado.
   [ ] PrazoEntrega — PrazoEntrega.ts: Prazo válido em dias ou outra unidade definida.

5. Cliente e endereço
   [ ] NomePessoa — NomePessoa.ts: Texto obrigatório e normalização.
   [ ] Email — Email.ts: Formato e normalização.
   [ ] Telefone — Telefone.ts: Formato e extração de DDD e número.
   [ ] Cpf — Cpf.ts: Formato e dígitos verificadores.
   [ ] Cep — Cep.ts: Oito dígitos e formato aceito.
   [ ] Endereco — Endereco.ts: Campos obrigatórios e regras de endereço.
