import React from 'react';
import PFContainer from './post_form_container';

class QuotePostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      link_url: '',
      media_link: '',
      post_type: 'text',
      user_id: this.props.userId
    };
  }

  render() {
    return(
      <div className="baseLozenge" >
        <h1>Qu</h1>
      </div>
    )
  }
}



export default PFContainer(QuotePostForm);
