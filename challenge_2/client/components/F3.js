import Axios from 'axios'
import React from 'react'
import {Modal,Button,Form,Row,Input} from 'react-materialize'




const F3 = function (props) {

	
		return (
			<Modal
  			header='Shipping Info'
			  trigger={<Button waves='light'>Finish Checkout!</Button>}>
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
				<Button
				onClick={props.handleNext} 
				waves='light'
				>Next</Button>
			</Modal>
		)	
	
}


export default F3