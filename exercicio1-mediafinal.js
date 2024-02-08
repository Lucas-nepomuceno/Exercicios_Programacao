//nota dos alunos
var prova1 = 10;
var prova2 = 4;

//calculador de media
let mediaFinal = (prova1 + prova2)/2;

//verificador de passagem de ano
var passou = mediaFinal >= 6;

//Exibindo o histórico para o aluno
console.log("Sua Primeira nota foi:", prova1);
console.log("Sua Segunda nota foi:", prova2);
console.log("Sua Média foi:", mediaFinal);


//feedback para o aluno
if (passou) {
    console.log("Você passou! :D")
}
else {
    console.log("Você reprovou! :(")
}

