import React from 'react';
import Nav from './Navbar';
import '../styles/Badge.css';

//import '../bootstrap/dist/css/bootstrap.css';
function Layout (props){
    
    //const children = props.children;
return (
    <React.Fragment>
    <div className="totalContainer">
    <div className="containerMain col-lg-6 offset-lg-3">
      <Nav/>  
      {props.children}
      </div>
      </div>
    </React.Fragment>
)

}

export default Layout;