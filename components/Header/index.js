import react, {useState} from 'react'
import Link from 'next/link'

const Header = () =>{
    //Variável de estado para controlar o texto do input
    const [busca, setBusca] = useState('')

    const textoInput = (event) =>{
        setBusca(event.target.value);
    }

    

    return(    
        <div>

            <div className='nav bg-gray-200 p-4'>
                <div className='container mx-auto flex flex-nowrap justify-between'>
                    <div className='' >
                        <img className='h-14' src='/AMMO-VAREJO-2.png'/>
                    </div>

                    {/* <div className=''>
                        <Link href="/" ><a className='px-2 mx-2'>Home</a></Link>
                        <Link href='/buscar'><a className='px-2 mx-2'>Buscar</a></Link>
                        <Link href='/cadastrar'><a className='px-2 mx-2'>Cadastrar</a></Link>
                        <Link href='/atualizar'><a className='px-2 mx-2'>Atualizar</a></Link>
                        <Link href='/excluir'><a className='px-2 mx-2'>Excluir</a></Link>  
                    </div> */}

                    <div className=''>
                        <input 
                            type='text' 
                            value={busca}
                            onChange={textoInput.bind(this)}
                        

                        />


                    </div>
                </div>


            </div>
            <div className='bg-gray-500 p-2'>
                Busca
            </div>
        </div>
        )
}

export default Header
