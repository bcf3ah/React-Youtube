import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';

const API_KEY = 'AIzaSyASZnHeYpNQ9yQ0IF_lXNFv-Aoi6jc0rAk';

class App extends Component{
	constructor(props){
		super(props);

		this.state={
			videos: [],
			selectedVideo: null,
		};

		this.videoSearch('meteorjs');
	}

	videoSearch(searchTerm){
		YTSearch({key: API_KEY, term: searchTerm}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render(){
		return (
			<div>
				<SearchBar onVideoSearch={searchTerm => this.videoSearch(searchTerm)} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					videos={this.state.videos} 
					onVideoSelect={selectedVideo => this.setState({selectedVideo})} 
				/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector(".container"));