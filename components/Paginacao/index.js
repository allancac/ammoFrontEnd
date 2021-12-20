import React from 'react'

const Paginacao = ({prodPorPag, totalProdutos, paginar}) =>{

    // Array com a numeração das páginas
    const numeracao = [];
    // Preenche o array de numeração até o limite de páginas necessárias de acordo com quantidade por página
    for(let i=1; i<= Math.ceil(totalProdutos/prodPorPag); i++){
        numeracao.push(i) 
    }
    return(
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="flex-1 flex justify-between">
                <ul>
                    {numeracao.map(numPagina=>(
                        <li key={numPagina} className="bg-white border-gray-300 text-blu-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 
                            <a onClick={()=>{paginar(numPagina)}} href="#">{numPagina}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    );
}

export default Paginacao;