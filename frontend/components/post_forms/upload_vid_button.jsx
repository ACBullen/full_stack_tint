import React from 'react';

class UploadVidButton extends React.Component {
  constructor(props){
    super(props);
  }

  uploadMedia (e){
    e.preventDefault();
    cloudinary.openUploadWidget(
      this.props.cloudinaryOptions,
      (err, images) => {
        if(err === null){
          this.props.getMediaUrl(images[0].secure_url);
        }
      }
    )
  }

  render () {
    return(
      <div className= "uploader">
      <i role="button" className="fa fa-video-camera" aria-hidden="true"onClick={this.uploadMedia.bind(this)}></i>
      </div>
    )
  }
}

export default UploadVidButton;
