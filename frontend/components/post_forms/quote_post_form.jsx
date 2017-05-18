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
    this.handleQuoteInput = this.handleQuoteInput.bind(this);
    this.handleAuthorInput = this.handleAuthorInput.bind(this);
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
    console.log("click!");
  }

  render() {
    return(
      <div id="QuotePostForm" className="baseLozenge" >
        <textarea onChange={this.handleQuoteInput} placeholder="Give us a quote..." value={this.state.body}></textarea>
        <input onChange={this.handleAuthorInput} placeholder="Quote Author" value={this.state.title}/>
        <button onClick={this.handleSubmit}>Post Quote</button>
      </div>
    )
  }
}



export default PFContainer(QuotePostForm);
