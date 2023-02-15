import Sugestao from "./Sugestao"
import Memes from "../assets/img/bad.vibes.memes.svg"
import Chibi from "../assets/img/chibirdart.svg"
import Razoes from "../assets/img/razoesparaacreditar.svg"
import Adorable from "../assets/img/adorable_animals.svg"
import Small from "../assets/img/smallcutecats.svg"


export default function Sugestoes() {
    const suggestions = [
        {name:"bad.vibes.memes", image:Memes, reason:"Segue você"},
        {name:"chibirdart", image:Chibi, reason:"Segue você"},
        {name:"razoesparaacreditar", image:Razoes, reason:"Novo no Instagram"},
        {name:"adorable_animals", image:Adorable, reason:"Segue você"},
        {name:"smallcutecats", image:Small, reason:"Segue você"}
    ];
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {suggestions.map((s) => <Sugestao name={s.name} image={s.image} reason={s.reason} />)}

        </div>
    );
}