import React from 'react';


const VideoListItem = ({video, onVideoSelect}) => {
	//const video = props.video; same as if we just passed props to the function
	const imgUrl = video.snippet.thumbnails.default.url;
	const title = video.snippet.title;

	return (
		<li 
		  onClick={() => onVideoSelect(video)}
		  className='list-group-item'>
			<div className='videoList media'>
				<div className='media-left'>
					<img className='media-object' src={imgUrl} alt=""/>	
				</div>

				<div className='media-body'>
					<div className='media-heading'>{title}</div>
				</div>
			</div>
		</li>
	);
}


export default VideoListItem;