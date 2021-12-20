import React from 'react'
import Image from 'next/image'

const Produtos=({produtos, carregando})=>{
    if(carregando){

        return <h2>Carregando Produtos...</h2>
        
    }

    return (
   
        <div className='container mx-auto'>
            <div className='grid grid-cols-3 gap-4 '>
                {produtos.map(prod =>(
                    <div key ={prod.refProduto} className='bg-gray-100 max-w-xs h-150 rounded overflow-hidden shadow-lg'>
                        <Image width={220} height={220} src={prod.album[0].imagem} alt="produto"/>
                        <div className='px-6 py-4'>
                            <div className='max-w-xs font-bold text-blue-800 text-xl mb-2'>
                                {prod.descricao}
                            </div>
                            <ul>
                                <li key={prod.refProduto}><strong>Preço: </strong> R$ {prod.precos.at(-1).valor}</li>
                                <li key={prod.refProduto}><strong>Categoria: </strong> R$ {prod.categoria}</li>
                                <li key={prod.refProduto}><strong>Referência do Produto: </strong>{prod.refProduto}</li>
                            </ul>
                        </div>
                    </div>
                ))}

            </div>
            
        </div>
    )
    
}

export default Produtos;
