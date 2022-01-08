import React from 'react'
import styles from './HomeDesafio.module.css'
import {useNavigate} from 'react-router-dom';
import Head from '../head/Head'

const HomeDesafio = () => {

    const [produtos, setProdutos] = React.useState(null);
    const navigate = useNavigate();

    function navigateProduct(prodId) {
        navigate(`produto/${prodId}`);
    }

    React.useEffect(() => {
        fetch('https://ranekapi.origamid.dev/json/api/produto')
            .then((r) => r.json())
            .then(json => setProdutos(json))
    }, []);
    
    if (produtos === null) return null;
    return (
        <div className={styles.animeleft}>
            <Head title="Produtos"/>
            <section className={styles.produtosContainer}>
                {produtos.map((produto) => {
                    return (
                        <div key={produto.id} className={styles.produtoContent}>
                            <button onClick={() => {navigateProduct(produto.id)}}>
                                <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
                            </button>
                            <p>{produto.nome}</p>
                        </div>
                    )
                })}
            </section>
        </div>
    )
}

export default HomeDesafio
