import React from 'react'; 
import {Link} from 'react-router-dom';


class UserForm extends React.Component{
    state={};
    handleChange = (e) =>{
        // console.log({
        //     name: e.target.name,
        // value: e.target.value
        // })
        this.setState({
            name: e.target.value,
        })
        
    }
    handleClick = (e) =>{
        //let userName = this.props.formValues.name
       //console.log(userName);
        //console.log("botón clickeando")
    };
    render(){
        return(
            <div className="main ">
                <h1>Hola, esto es...</h1>
                <p>Una página donde podrás jugar con trivias que pondrán a prueba tu conocimiento sobre mujeres históricas y conceptos feministas ¿Te  atreves?</p>
                <div className="userInfo">
                <div className="inputContainer">
                    <input onChange={this.props.onChange} name="name" className="effect-1" type="text" placeholder="Ingresa tu nombre" value={this.props.formValues.name}/>
                    <span className="focus-border"></span>
                </div>
                <Link to="/choicetrivias" type="button" onClick={this.handleClick} className="buttonPrimary">Ingresar</Link>
                </div>  
            </div>
        )
    }
}

export default UserForm;