import {Redirect} from "react-router-dom";

function withLoginCheck(WrapperComponent) {
    const NewComponent = (props) => {

            if (!props.isAuth){

               return <Redirect to="/"/>
            }



        return <WrapperComponent  {...props}/>
    };

    return NewComponent
}

export default withLoginCheck