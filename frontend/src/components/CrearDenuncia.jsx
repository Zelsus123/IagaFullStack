import React, { Children, Component } from 'react'
import Portal from '../Portal'
import {ModalWindow, ModalB, ModalButton} from '../css/styles.module.scss'

export default class CrearDenuncia extends Component {
  render() {

    const {children, toggle, active} = this.props;

    return (
      <Portal>
        {active && (
            <div className={ModalWindow}>
                <div className={ModalB}>
                    <button className={ModalButton} onClick={toggle}>X</button>
                    <div>{children}</div>
                </div>
            </div>
            
        )}

      </Portal>
    )
  }
}
