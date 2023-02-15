import Post from "./Post";
import Meowed from "../assets/img/meowed.svg"
import Gato from "../assets/img/gato-telefone.svg"
import Responde from "../assets/img/respondeai.svg"
import Barked from "../assets/img/barked.svg"
import Dog from "../assets/img/dog.svg"
import Adorable from "../assets/img/adorable_animals.svg"
import Gag from "../assets/img/9gag.svg"
import Got from "../assets/img/house-of-the-dragon.jpeg"
import Chibi from "../assets/img/chibirdart.svg"

export default function Posts() {
    const post = [
        {
            userName: "meowed",
            userImage: Meowed,
            postImage: Gato,
            likesImage: Responde,
            likesText: "respondeai",
            likesAmount: "101523",
        },
        {
            userName: "barked",
            userImage: Barked,
            postImage: Dog,
            likesImage: Adorable,
            likesText: "adorable_animals",
            likesAmount: "99159",  
        },
        {
            userName: "9gag",
            userImage: Gag,
            postImage: Got,
            likesImage: Chibi,
            likesText: "chibidart",
            likesAmount: "225532",  
        }
    ];

    return (
        <div class="posts">
            {post.map((p) => (
                <Post
                    userName={p.userName}
                    userImage={p.userImage}
                    postImage={p.postImage}
                    likesImage={p.likesImage}
                    likesText={p.likesText}
                    likesAmount={p.likesAmount}
                />
            ))}
        </div>
    );
}

