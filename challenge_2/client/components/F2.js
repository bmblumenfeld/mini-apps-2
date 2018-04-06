import Axios from 'axios'
import React from 'react'
import {Modal,Button,Form,Row,Input} from 'react-materialize'
import F3 from './F3'



const F2 = function (props) {

	
		return (
			<Modal
  			header='Shipping Info'
			  trigger={<Button waves='light'>Next</Button>}>
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
				<F3/>
			</Modal>
		)	
	
}


export default F2