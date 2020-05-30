import React from 'react';
//import 'bootstrap/dist/css/bootstrap.css';


class ButtonList extends React.Component{
    render(){
        return (
            <div>    
                {this.props.data.map((data) =>{
                    return(
                        <button key={data.id}>{data.nameTrivia}</button>                            
                        )
                    })}
                
            </div>
        )
    }
}

export default ButtonList;