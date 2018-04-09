import Axios from 'axios'
import React from 'react';
import ReactPaginate from 'react-paginate';
import {Input,Row} from 'react-materialize'



class App extends React.Component {
	constructor(props) {
		super(props)

		this.handleSearch = this.handleSearch.bind(this)

	}

	componentDidMount() {
		Axios.get('http://localhost:3000/events')
		.then((results) => {console.log(results)})
		.catch((err)=>{console.log(err)})
	}

	handleSearch(e) {
		this.setState({search:e.target.value})
	}

	render () {
		return (
			<div className="search-bar">
				<Row>
 					<Input 
 						type='Search'
 						label='Search'
 						onChange={this.handleSearch}
 					/>
				</Row>
				<ReactPaginate 
					className="paginate"
					pageCount={50}
					pageRangeDisplayed={10}
					marginPagesDisplayed={10}
					onPageChange={this.handlePageClick}
				/>
			</div>
		)	
	}
}

export default App