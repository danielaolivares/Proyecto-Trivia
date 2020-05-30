import React from 'react';
import logoApp from '../images/lenovo-logo.png';
import '../styles/Badge.css';
//import 'bootstrap/dist/css/bootstrap.css';

class Nav extends React.Component{
    state = { form: {
             name: '',
          }};

          handleChange = e=>{
     this.setState({
         form: {
             ...this.state.form,
             [e.target.name]: e.target.value,
         },
     });
 };
    render(){
        //const userName = this.props
        return(
            
            <div className="headerLayout">
                <img src={logoApp} alt="Logo" className="logoImg"></img>
                <div className="userSection">
                    <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y" alt="avatarUser" className="avatarUser"></img>
                    <div className="userName"></div>
                </div>               
            </div>
        )
    }
}

export default Nav;