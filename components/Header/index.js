import react from 'react'
import Link from 'next/link'

const Header = () =>{
    return(    
        <div className='bg-gray-300 p-4'>
            <div className='container mx-auto'>
                <h2>Ammo Varejo</h2>
        
                <div className='text-center'>
                    <Link href="/" ><a className='px-2 mx-2'>Home</a></Link>
                    <Link href='/buscar'><a className='px-2 mx-2'>Buscar</a></Link>
                    <Link href='/cadastrar'><a className='px-2 mx-2'>Cadastrar</a></Link>
                    <Link href='/atualizar'><a className='px-2 mx-2'>Atualizar</a></Link>
                    <Link href='/excluir'><a className='px-2 mx-2'>Excluir</a></Link>  
                </div>
        
            </div>
        </div>
        )
}

export default Header
