import React, { Component } from "react";
import modalStyles from '../styles/modal.module.scss'

export default class Modal extends Component{
    
    render(){
    return (
      <div className={modalStyles.modal}>
        <section className={modalStyles.modalMain}>
          <div className={modalStyles.close} onClick={this.props.handleClose}>&times;</div>
        </section>
      </div>
    );
  };
}
