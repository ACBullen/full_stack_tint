import React from 'react';
import PFContainer from './post_form_container';
import { closeForm } from '../../util/post_form_util.js';

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

    this.formName = "QuotePostForm"


    this.handleAuthorInput = this.handleAuthorInput.bind(this);
    this.handleQuoteInput = this.handleQuoteInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeForm = closeForm.bind(this)(this.formName);
  }

  handleQuoteInput(e){
    e.preventDefault();
    this.setState({body: e.target.value});
  }

  handleAuthorInput(e){
    e.preventDefault();
    this.setState({title: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createPost;
    this.closeForm(e);
  }


  render() {
    return(
      <form id={this.formName} className="baseLozenge" >
        <textarea onChange={this.handleQuoteInput} placeholder="Give us a quote..." value={this.state.body}></textarea>
        <lable> —
        <input onChange={this.handleAuthorInput} placeholder="Quote Author" value={this.state.title}/>
        </lable>
        <div id="controlButtons">
          <button onClick={this.closeForm}>Close</button>
        <button onClick={this.handleSubmit}>Post Quote</button>
        </div>
      </form>
    )
  }
}



export default PFContainer(QuotePostForm);
