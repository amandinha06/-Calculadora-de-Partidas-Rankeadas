const vitorias = 96; 
const derrotas = 17; 

function partidas (vitorias, derrotas){
    let classe; 

    if (vitorias < 10){
            classe = 'Ferro';
    }
    else if (vitorias >= 11 && vitorias <= 20){
            classe = 'Bronze';
    }
    else if (vitorias >= 21 && vitorias <= 50){
            classe = 'Prata';
    }
    else if (vitorias >= 51 && vitorias <= 80){
            classe = 'Ouro';
    }  
    else if (vitorias >= 81 && vitorias <= 90){
            classe ='Diamente';
    }
    else if (vitorias >= 91 && vitorias <= 100){
            classe = 'Lendário';
    }
    else if (vitorias >= 101){
            classe = 'Imortal';
    }  

    const rankeadas = vitorias - derrotas; 

    console.log('O Herói tem de saldo de vitória: '+ vitorias + ' está no nível de ' + classe + ' e tem o total de '+ rankeadas + ' partidas Rankeadas!');
}
partidas (vitorias, derrotas);