import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  // The syntax {video, onVideoSelected} is eqaul to following:
  //const video = props.video;
  //const onVideoSelect = props.onVideoSelect;
  console.log(video);
  const imageUrl = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;
  return <li onClick={() => onVideoSelect(video)} className="list-group-item">
    <div className="video-list media">
      <div className="media-left">
        <img className="media-object" src={imageUrl} alt="" />
      </div>
      <div className="media-body">
        <div className="media-heading">{title}</div>
      </div>
    </div>
  </li>
};

export default VideoListItem;