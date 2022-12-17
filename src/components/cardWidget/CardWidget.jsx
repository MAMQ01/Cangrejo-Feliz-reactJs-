import "./CardWidget.scss";
import { GiSadCrab} from "react-icons/gi";


const CardWidget = () => {
    return (
        <div className="containerCrab">
            <GiSadCrab style={{
                fontSize: "2rem",
                color: "white",
            }} />
        </div>
    )
}

export default CardWidget