
function converte_em_Grokiriano(palavra){ //função que converte palavras para o padrão Grokiriano

    let primeira_letra = palavra[0]; //Pega a 1° letra(prle) das palavras para comparação

    if(/^[AEIOUY]/.test(primeira_letra)){ //Se a prle for vogal e caixa alta

        return "G" + palavra[0].toLowerCase() + palavra.slice(1); //retorna G + a primeira letra minuscula 

    }else if(/^[aeiouy]/i.test(primeira_letra)){ //Se a letra for vogal minuscula

        return "g" + palavra; // retorna g + palavra

    }else if ((/^g/i.test(primeira_letra) || /^G/i.test(primeira_letra)) && !/g$/i.test(palavra)){ //Se a prle for g minusculo ou maiusculo e a palavra não terminar em g

        return palavra + "g"; //retorna palavra + g no final

    }else if(/^[A-Z]/.test(primeira_letra)){ //Se a prle for caixa alta

        return "G" + palavra.slice(1).toLowerCase(); //retorna G + a palavra sem a vogal inicial

    }else{ //Caso contrario
        
        return palavra.replace(/^./i, "g"); //some com a consoante do começo e troca por g

    }

}

function Traduz_em_Grokiriano(){ //

    let input_frase = $("#frase");

    let texto = input_frase.val();

    let palavras = texto.split(" ");

    let traducao = palavras.map(converte_em_Grokiriano);

    traducao = traducao.join(" ");
    
    alert("Geg diz: " + traducao);
    
    input_frase.val("");
}