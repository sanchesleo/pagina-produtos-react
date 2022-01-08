import React from 'react'
import styled from './ProdutoDesafio.module.css'
import loading from '../../../../assets/loading-buffering.gif'
import {useParams} from 'react-router-dom'
import Head from '../head/Head'

const ProdutoDesafio = () => {
    const [produto, setProduto] = React.useState(null);
    const params = useParams();

    React.useEffect(() => {
        fetch(`https://ranekapi.origamid.dev/json/api/produto/${params.id}`)
            .then((r) => r.json())
            .then(json => setProduto(json))
    }, [params.id]);

    if (produto == null) {
        return (
            <img src={loading} alt="loading" style={{width: '100px'}}/>
        )
    }
    else{
    return (
        <div key={produto.id} className={styled.produtoContainer}>
            <Head title={produto.nome}/>
            <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
            <div className={styled.produtoTexts}>
                <h1>{produto.nome}</h1>
                <p className={styled.precoProduto}>R$ {produto.preco}</p>
                <p className={styled.produtoDescription}>
                    {produto.descricao}
                </p>
            </div>
        </div>
    )
}
}

export default ProdutoDesafio
