import { useState } from "react"

export default function Post(props) {
    const [isLike, setIsLike] = useState(false)
    const [isFavorite, setIsFavorite] = useState(false)
    return (
        <div class="post">
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
                <img src={props.postImage} onDoubleClick={() => setIsLike(true)} alt="gato-telefone"/>
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name={isLike === true ? "heart" : "heart-outline"} class={isLike === true ? "red" : ""} onClick={() => setIsLike(!isLike)}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={isFavorite === true ? "bookmark" : "bookmark-outline"} onClick={() => setIsFavorite(!isFavorite)}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.likesImage} alt={props.likesText}/>
                    <div class="texto">
                        Curtido por <strong>{props.likesText}</strong> e <strong>outras {isLike === true ? parseInt(props.likesAmount) + 1 : props.likesAmount} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}
//{isLike === true ? <ion-icon name="heart" class="red" onClick={() => setIsLike(false)}></ion-icon> : <ion-icon name="heart-outline"  onClick={() => setIsLike(true)}></ion-icon>}
//{isFavorite === true ? <ion-icon name="bookmark" onClick={() => setIsFavorite(false)}></ion-icon> : <ion-icon name="bookmark-outline" onClick={() => setIsFavorite(true)}></ion-icon>}
