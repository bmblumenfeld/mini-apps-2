import Axios from 'axios'
import React from 'react'
import {Modal,Button,Form,Row,Input} from 'react-materialize'
import F1 from './F1'
import F2 from './F2'
import F3 from './F3'



class App extends React.Component {
	constructor(props) {
		super(props)
		this.f1Checkout = this.f1Checkout.bind(this);
		this.f2Checkout = this.f2Checkout.bind(this);
		this.f3Checkout = this.f3Checkout.bind(this);

		this.state = {
			checkout1:false,
			checkout2:false,
			checkout3:false, 
		}

	}

	componentDidMount () {
		// Axios.get('http://localhost:3000/crypto/coins').then((results)=>{
		// 	this.setState({historicalPrices:results.data});
		// 	results.data.forEach((element)=>{
		// 		this.data.datasets[0].data.push({y:Math.round(element.price), x:element.date})	
		// 		this.data.labels.push(element.date)	
		// 	})
		// 	console.log(this.data.datasets[0].data)
		// })
	}

	f1Checkout (e) {
		this.setState({checkout1:true})
	}
	f2Checkout (e) {
		this.setState({checkout2:true})
	}
	f3Checkout (e) {
		this.setState({checkout3:true})
	}

	render() {
	
		return (
			<div>
				<F1
					handleNext={this.f1Checkout}
				/>
			</div>
		)
	}
}

export default App