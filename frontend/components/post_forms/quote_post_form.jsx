import React from 'react';

import { withRouter, Link } from 'react-router-dom';
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

      post_type: 'quote',
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
    if (this.title.length < 3 || this.body.length < 3 ){
      alert("Please fill out both the quote and the author")
    } else{
      this.props.createPost(this.state).then(this.props.history.push('/'));
    }
  }


  render() {
    return(
      <form id={this.formName} className="baseLozenge" >
        <textarea onChange={this.handleQuoteInput} placeholder="Give us a quote..." value={this.state.body}></textarea>
        <lable> —
        <input onChange={this.handleAuthorInput} placeholder="Quote Author" value={this.state.title}/>
        </lable>
        <div id="controlButtons">
          <Link to='/'><button type="button">Close</button></Link>
        <button onClick={this.handleSubmit}>Post</button>
        </div>
      </form>

    )
  }
}



export default withRouter(PFContainer(QuotePostForm));
