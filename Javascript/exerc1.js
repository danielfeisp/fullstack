var idade = prompt("NOVA PESSOA!\nDigite sua Indade")
var sexo = 0;
var salário = 0;
var somsalário = 0;
var numpessoas = 0;
var menIdade = 1000;
var maiIdade = 0;
var muierica = 0;
var medsalário = (somsalário + parseInt(salário))/numpessoas;


while (parseInt(idade) >= 0){
    
    if (parseInt(idade) > maiIdade){
        maiIdade = idade
    }
    else if (parseInt(idade) < menIdade){
        menIdade = parseInt(idade)
    }

    sexo = prompt("NOVA PESSOA!\nDigite seu Sexo com F para femea e M para mano")
    salário = prompt("Digita quanto tu ganha em reaos")

    if (sexo == "F" && parseInt(salário) > 5000){
        muierica = muierica + 1
    }



    medsalário = (somsalário + parseInt(salário))/numpessoas
    somsalário = somsalário + parseInt(salário)




    numpessoas = numpessoas + 1
    
    idade = prompt("NOVA PESSOA!\nDigite sua Indade")
}

console.log("Media de salario:");
console.log(medsalário)
console.log("Maior idade:");
console.log(maiIdade);
console.log("Menor idade:")
console.log(menIdade);
console.log("muié mai rica:")
console.log(muierica);