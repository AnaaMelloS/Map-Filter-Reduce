function calculaSaldo(saldo, itens) {
	if (!saldo || !itens || !itens.length) return 'Envie todos os parâmetros';

	const saldoFinal = itens.reduce((acc, item) => acc - item.preco, saldo);

	return `O saldo final será de ${saldoFinal} reais`;
}

lista = [
	{
		preco: 18,
		nome: 'arroz',
	},
	{
		preco: 3.5,
		nome: 'macarrão',
	},
	{
		preco: 29,
		nome: 'carne',
	},
];

saldo = 100;

console.log(calculaSaldo(saldo, lista));