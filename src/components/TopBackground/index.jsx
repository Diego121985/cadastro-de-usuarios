import { Background } from "./styles";
import image from "..//..//assets/users.png"

function MyImage() {
   
    return (
        <Background>
            <img src={image} alt='imagem' />
        </Background>

    )
}
export default MyImage 