import {withRouter} from "react-router-dom"
// function PageThree() {
//     return(
//         <div>Page 3</div>
//     )
//
// }


import React from "react";

class PageThree extends React.Component{
 render(){
     console.log(this.props);
     return(
         <div>This is a Page 3</div>
     )
 }
}


export default withRouter(PageThree)