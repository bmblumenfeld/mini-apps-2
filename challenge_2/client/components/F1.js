import Axios from 'axios'
import React from 'react'
import {Modal,Button,Form,Row,Input} from 'react-materialize'
import F2 from './F2'



const F1 = function (props) {

	
		return (
			<Modal
  			header='Login Info'
			  trigger={<Button waves='light'>Start Checkout</Button>}>
			  <Row>
  				<Input s={6} label="First Name" validate />
				</Row>
				<Row>
  				<Input s={6} label="Last Name" validate  />
				</Row>
				<Row>
  				<Input s={6} label="email" validate />
				</Row>
				<Row>
  				<Input s={6} label="password" validate />
				</Row>
				<F2/>
			</Modal>
		)	
	
}


export default F1