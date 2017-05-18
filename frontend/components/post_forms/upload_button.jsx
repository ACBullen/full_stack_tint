import React from 'react';

class UploadButton extends React.Component {
  constructor(props){
    super(props);
  }

  uploadImg (e){
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.cloudinary_options,
      (err, images) => {
        if(err === null){
          this.props.getImgUrl(images[0].url);
        }
      }
    )
  }

  render () {
    return(
      <i className="fa fa-camera" aria-hidden="true"onClick={this.uploadImg.bind(this)}></i>
    )
  }
}

export default UploadButton;
