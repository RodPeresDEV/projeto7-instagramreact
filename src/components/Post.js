import { useState } from "react"

export default function Post(props) {
    const [isLike, setIsLike] = useState(false)
    const [isFavorite, setIsFavorite] = useState(false)
    return (
        <div class="post" data-test="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.userImage} alt={props.userName}/>
                    {props.userName}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img data-test="post-image" src={props.postImage} onDoubleClick={() => setIsLike(true)} alt="gato-telefone"/>
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon data-test="like-post" name={isLike === true ? "heart" : "heart-outline"} class={isLike === true ? "red" : ""} onClick={() => setIsLike(!isLike)}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon data-test="save-post" name={isFavorite === true ? "bookmark" : "bookmark-outline"} onClick={() => setIsFavorite(!isFavorite)}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.likesImage} alt={props.likesText}/>
                    <div class="texto">
                        Curtido por <strong>{props.likesText}</strong> e <strong data-test="likes-number" >outras {isLike === true ? parseInt(props.likesAmount) + 1 : props.likesAmount} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}