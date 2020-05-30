import React from 'react';

import '../styles/Badge.css';
import UserForm from '../components/UserForm';
import 'bootstrap/dist/css/bootstrap.css';


class WelcomePage extends React.Component{
      state = { form: {
          name: '',
      }};

    //  handleChange = e =>{
    //      const nextForm = this.state.form
    //      nextForm[e.target.name]= e.target.value;
    //      this.setState({
    //       form: nextForm,
    //      })
    //  }

     handleChange = e=>{
         this.setState({
             form: {
                 ...this.state.form,
                 [e.target.name]: e.target.value,
             },
         });
     };
    render(){       
        return(
            <React.Fragment>
            
            
            <UserForm onChange={this.handleChange} formValues={this.state.form}/>
           <div className="footerSection">
                <div >
                Creado por Daniela Olivares & Domi Olivares 2020
                </div>
           </div>
             
            </React.Fragment> 
        )
    }
}

export default WelcomePage;