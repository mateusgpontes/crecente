function query (tag){
    return document.querySelector(tag);
}

function create (tag){
    return document.querySelector(tag);
}

const ordemCrescente = query('#ordemCrescente');
const p = query('p');
let lista = [10,3,6,2,4,5,7,9,1,8];

for(let i = 0; i < lista.length; i++){
    let menor = i;
    //compara o maior com o menor
    for(let j = i + 1; j < lista.length; j++){
        if(lista[j] < lista[menor]){
            menor = j;
        };
    };
    //troca
    if(i != menor){
        [lista[i], lista[menor]] = [lista[menor], lista[i]];
    };
    p.innerText = lista;
};


