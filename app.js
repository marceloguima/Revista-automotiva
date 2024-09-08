function pesquisar() {
    //obtem a seção html onde os dados serão exibidos
    let section = document.getElementById("resultado-pesquisa");

    let campoPesquisa = document.getElementById(campoPesquisa).value;

    //inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    //para cada dado dentro da lista de dados
    for (let dado of dados) {
        if (dado.titulo.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta"> ${dado.descricao}
                </p>
                <a href=${dado.link} target="_blank">Saiba mais</a>Mais informações
            </div> `;
 
        }


    }


  //  section.innerHTML = resultados;
}