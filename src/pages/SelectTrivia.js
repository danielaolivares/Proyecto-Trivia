import React from 'react';
import '../styles/Badge.css';
import ButtonList from '../components/buttonList';
//import 'bootstrap/dist/css/bootstrap.css';

class ChoiceTrivia extends React.Component{
    state = { 
        form: {
        name: '',},
        dataButton: [
            {
                "id":"1",
                "nameTrivia": "Grandes Mujeres"},
            {
                "id":"2",
                "nameTrivia": "Conceptos Feministas"
        }
    ]
};
    render(){
        return(
            <React.Fragment>
            
            
            <ButtonList data={this.state.dataButton}/>
            
           <div className="footerSection">
                <div >
                Creado por Daniela Olivares & Domi Olivares 2020
                </div>
           </div>
           
            </React.Fragment> 

        )
    }
};

export default ChoiceTrivia;