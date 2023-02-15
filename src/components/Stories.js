import Story from "./Story";
import Meowed from "../assets/img/meowed.svg"
import Gag from "../assets/img/9gag.svg"
import Responde from "../assets/img/respondeai.svg"
import Barked from "../assets/img/barked.svg"
import Nathan from "../assets/img/nathanwpylestrangeplanet.svg"
import Wawa from "../assets/img/wawawicomics.svg"
import Filo from "../assets/img/filomoderna.svg"
import Memeria from "../assets/img/memeriagourmet.svg"

export default function Stories() {
    const stories = [
        {name: "9gag", image: Gag },
        {name: "meowed", image: Meowed },
        {name: "barked", image: Barked },
        {name: "nathanwpylestrangeplanet", image: Nathan },
        {name: "wawawicomics", image: Wawa },
        {name: "respondeai", image: Responde },
        {name: "filomoderna", image: Filo },
        {name: "memeriagourmet", image: Memeria },
    ];
    return (
        <div>
            <div class="stories">
                {stories.map((s) => <Story name={s.name} image={s.image}/>)}

                <div class="setinha">
                    <ion-icon name="chevron-forward-circle"></ion-icon>
                </div>
            </div>
        </div>
    );
}
