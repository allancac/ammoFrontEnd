import react, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/AMMO-VAREJO-2.png'

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
                        <Image width={250} height={100} src={logo} alt="Logotipo"/>
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
                            name='inputBuscar'
                            id='inputBuscar'
                            type='text' 
                            value={busca}
                            onChange={textoInput.bind(this)}
                            placeholder='Buscar um produto.'
            
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
