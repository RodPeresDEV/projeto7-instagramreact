import { useState } from "react";

export default function Usuario(props) {
    const [userName, setUserName] = useState(props.name)
    const [userImage, setUserImage] = useState(props.image)
    function changeImage () {
        const image = prompt("Qual sua nova foto?")
        if (image.length === 0) return
        setUserImage(image)
    }
    function changeName() {
        const name = prompt("Qual seu novo nome?")
        if (name.length === 0) return
        setUserName(name)
    }
    return (
        <div class="usuario">
            <img src={userImage} onClick={changeImage} alt="imagem de perfil"/>
            <div class="texto">
                <span>
                    <strong>{userName}</strong>
                    <ion-icon name="pencil" onClick={changeName}></ion-icon>
                </span>
            </div>
        </div>
    );
}