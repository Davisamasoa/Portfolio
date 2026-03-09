export function calcularIdade() {
	const hoje = new Date();
	const nascimento = new Date("2003-06-06");

	let idade = hoje.getFullYear() - nascimento.getFullYear();
	const mes = hoje.getMonth() - nascimento.getMonth();

	// Se o mês atual for menor que o de nascimento, ou se for o mesmo mês
	// mas o dia atual for menor que o dia de nascimento, subtrai 1.
	if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
		idade--;
	}

	return idade;
}

// Exemplo de uso:
console.log(calcularIdade());
