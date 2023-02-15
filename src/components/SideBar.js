import Usuario from "./Usuario"
import Sugestoes from "./Sugestoes"
import Catana from "../assets/img/catanacomics.svg"

export default function SideBar() {
    return (
        <div>
            <div class="sidebar">
                <Usuario name={"catanacomics"} image={Catana}/>
                <Sugestoes />

                <div class="links">
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                    Hashtags • Idioma
                </div>

                <div class="copyright">
                    © 2021 INSTAGRAM DO FACEBOOK
                </div>
            </div>
        </div>
    );
}