import React from 'react'

const Produtos=({produtos, carregando})=>{
    if(carregando){

        return <h2>Carregando Produtos...</h2>
        
    }

    return (
   
        <div className='container mx-auto'>
            <div className='grid grid-cols-3 gap-4 '>
                {produtos.map(prod =>(
                    <div classname='bg-gray-100 max-w-xs h-96 rounded overflow-hidden shadow-lg'>
                        <img className='w-24 h-24' src={prod.album[0].imagem}/>
                        <div className='px-6 py-4'>
                            <div className='max-w-xs font-bold text-blue-800 text-xl mb-2'>
                                {prod.descricao}
                            </div>
                            <ul>
                                <li><strong>Preço: </strong> R$ {prod.precos.at(-1).valor}</li>
                                <li><strong>Categoria: </strong> R$ {prod.categoria}</li>
                                <li><strong>Referência do Produto: </strong>{prod.refProduto}</li>
                            </ul>
                        </div>
                    </div>
                ))}

            </div>
            
        </div>
    )
    
}

export default Produtos;
