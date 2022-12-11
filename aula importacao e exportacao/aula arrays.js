

/*
const alunos = ["Maria", "João", "Pedro"];

alunos.push("Gabriel");

alunos[4] = "Julia";

console.log(alunos[3]);

---

const alunos = ["João", "Maria", "Pedro"];

alunos.push("Teste");
alunos.push(10);

alunos.shift();  -> separa o primeiro da fila
alunos.pop(); -> separa o ultimo da lista

console.log(alunos);

-----

const notas = [];

notas.push[8];
notas.push[4];
notas.push[7];

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas.length;

console.log(media);*/


/*const nome = "Felipe da Silva Ferreira";

for (let i = 0; i < nome.length; i++) {
    const letra = nome[i];
    
    console.log(letra);

}*/

const nota = [2, 5, 8, 5];

let soma = 0;

for (let i = 0; i < nota.length; i++){

    const valor = nota[i];
    
    soma = soma + valor;

}

const media = soma / nota.length;

console.log(soma);
console.log(nota.length);
console.log(media);
