import "./CardWidget.scss";
import { GiSadCrab} from "react-icons/gi";


const CardWidget = () => {
    return (
        <div className="containerCrab">
            <GiSadCrab style={{
                fontSize: "2rem"
            }} />
        </div>
    )
}

// eslint-disable-next-line no-lone-blocks
{/* <GiSadCrab style={{
    fontSize: "2rem",
    color: "white",
}} /> */}

export default CardWidget