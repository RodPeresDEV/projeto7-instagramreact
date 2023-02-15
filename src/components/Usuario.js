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
            <img src={userImage} data-test="profile-image" onClick={changeImage} alt="imagem de perfil"/>
            <div class="texto">
                <span>
                    <strong data-test="name">{userName}</strong>
                    <ion-icon data-test="edit-name" name="pencil" onClick={changeName}></ion-icon>
                </span>
            </div>
        </div>
    );
}