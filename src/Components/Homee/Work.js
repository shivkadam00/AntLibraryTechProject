import React from "react";
import {Button,Modal}from 'antd';

class AppWorks extends React.Component {
 state ={visible :false};

 showModal = () =>{
     this.setState({
         visible:true,
        });
 };

 handleCancel = e =>{
    console.log(e);
    this.setState({
        visible:false,
    });
};
    render(){
        return(
           <div className="block worksBlock">
               <div className="container-fluid">
                   <div className ="titleHolder">
                       <h2>How it Works</h2>
                       <p>Perspiciatis vero similique, ut ducimus modi ipsam autem tempora</p>
                   </div>
                   <div className="contentHolder">
                   <Button onClick={this.showModal}>
                   <i class="fas fa-play"></i>
                   </Button>
                   </div>
                   <Modal
                   title="Besic Modal"
                   visible={this.state.visible}
                   onCancel={this.handleCancel}
                   footer={null}
                   >
                       <iframe title="Woocommerce Tutorial" width="100%" height="350" src="https://www.youtube.com/embed/8f8_JYIzOno?list=PLiUrl-SQRR7LQINGQGE99pXWDuKq4SxfU"></iframe>
                   </Modal>
               </div>
           </div>
        );
    }
}
export default AppWorks;