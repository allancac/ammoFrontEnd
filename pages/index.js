import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Produtos from '../components/Produtos'
import Paginacao from '../components/Paginacao'

 const  Home = (props) => {
  // Variáveis de estado para controlar a paginação
  const [listaProdutos, setListaProdutos] = useState([])
  const [carregando, setCarregando] = useState(false)
  const [pagAtual, setPagAtual]= useState(1)
  const [prodPorPag, setProdPorPag] = useState(6)

  //função assíncrona para realizar a captura de dados na API
  const fetchBuscaProdutos = async (busca) =>{
    setCarregando(true);  
    const res = await axios.get(`https://api-ammo-interview.herokuapp.com/api/produtos/${busca}`)
    setListaProdutos(res.data);
    setCarregando(false);
  }

  //Variável de estado para controlar ciclo de vida da página(mount)
  useEffect(()=>{
    const fetchListaProdutos = async ()=>{
      setCarregando(true);  
      const res = await axios.get('https://api-ammo-interview.herokuapp.com/api/produtos/')
      setListaProdutos(res.data);
      setCarregando(false);
    }
    fetchListaProdutos();
  },[]);

  //Função para alterar a paginação no componente Paginacao
  const paginar =(pagina)=>setPagAtual(pagina)

  //Obter produtos listados atualmente
  // Faz um slice da lista atual de produtos de acordo com a quantidade definida por página.
  const indUltimoProd = pagAtual * prodPorPag;
  const indPrimeiroProd = indUltimoProd - prodPorPag;

  const listaProdutosAtual = listaProdutos.slice(indPrimeiroProd, indUltimoProd)

  return (
    <div>
     
      <div>{listaProdutos.length} produtos encontrados</div>
      <Produtos produtos={listaProdutosAtual} carregando={carregando}/>
      <Paginacao prodPorPag={prodPorPag} totalProdutos={listaProdutos.length} paginar={paginar}/>
      
    </div>
  )
}

export default Home