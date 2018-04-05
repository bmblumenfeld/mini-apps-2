import Axios from 'axios'
import React from 'react'
import {Line} from 'react-chartjs-2';
// import priceList from '../priceList'
// import topDashboard from '../topDashboard'
// import mainPriceChart from '../mainPriceChart'



class App extends React.Component {
	constructor(props) {
		super(props)
		this.data = {
        labels: [],
        datasets: [{
        label: "CryptoMania!",
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(44, 179, 247)',
        data: [],
        }],
        maintainAspectRatio: false,
    }	
	}

	componentDidMount () {
		Axios.get('http://localhost:3000/crypto/coins').then((results)=>{
			this.setState({historicalPrices:results.data});
			results.data.forEach((element)=>{
				this.data.datasets[0].data.push({y:Math.round(element.price), x:element.date})	
				this.data.labels.push(element.date)	
			})
			console.log(this.data.datasets[0].data)
		})
	}



// scales: {
//             xAxes: [
//               {
//                   ticks: {
//                      callback: function(label, index, labels) {
//                        return label.toFixed(2) + "%";
//                      }
//                   }
//               }
//             ],
//             yAxes: [
//               {
//                   ticks: {
//                      callback: function(label, index, labels) {
//                        return label;
//                      },
//                      fontSize: 18,
//                      fontColor: 'black'
//                   },
//                    display: true,
// }
//             ]
//         }


	render() {
		return (
			<div>
				<Line
					data={this.data}
          // options={chartOptions}
          height={500}
          width={700}
				/>
			</div>

		)
	}
}

export default App