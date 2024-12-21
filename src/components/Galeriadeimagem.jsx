import { useState } from "react";


function GaleriaDeImagens() {
    const [imagens, setImagens] = useState([
        'https://rollingstone.com.br/media/uploads/tom_cruise_em_top_gun_maverick_foto_reproducao.jpg',
        'https://cinebuzz.com.br/media/uploads/top_gun_2_retorno_de_iceman_foi_sugestao_do_proprio_val_kilmer_revela_diretor.jpg',
        'https://i0.wp.com/br.nacaodamusica.com/wp-content/uploads/2022/07/top-gun-maverick.jpg',
    ]);

    const adicionarImagem = () => {
        setImagens([...imagens, 'https://cinepop.com.br/wp-content/uploads/2022/06/Top-gun-maverick-tom-cruise-reason-for-doing-his-own-stunts.jpg,'])
    }

    return(
        <>
        <h2>Galeria de Imagens</h2>
        <div style={{display: 'flex',  flexWrap: 'wrap',  justifyContent: 'center'}}>

        {imagens.map((imagem, index) => (
            <img key={index} src={imagem} alt={`Imagem ${index + 1}`} style={{margin: '5px', maxWidth:'20em'}}/>
        ))}
        </div>
        <button onClick={adicionarImagem} style={{marginTop: '10px´'}}>Adicionar Imagem</button>
        </>
    )
}

export default GaleriaDeImagens