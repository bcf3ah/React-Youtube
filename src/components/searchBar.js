import React from 'react';

class SearchBar extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {searchTerm: ''};
	}

	render(){
		return (
			<div className='search-bar'>
				<input
					//value={this.state.searchTerm}
					onKeyPress={(event) => this.onInputChange(event, event.target.value)} 
				/>
				
			</div>
		);	
	}

	onInputChange(event, searchTerm){
		if(event.which == 13){
			this.props.onVideoSearch(searchTerm);
		}
		//this.setState({searchTerm});
	}
	
}

export default SearchBar;