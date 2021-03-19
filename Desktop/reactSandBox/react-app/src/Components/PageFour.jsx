import {useHistory} from "react-router-dom";
import withLoginCheck from "../HOC/withLoginCheck";

function PageFour() {
    const history = useHistory();

    const onClick = () => {
        history.push("/");
    };



    console.log(history)
    return (
        <>
            <button
                onClick={onClick}
            >History</button>
            <div>Page 4</div>
        </>
    )
}


export default PageFour