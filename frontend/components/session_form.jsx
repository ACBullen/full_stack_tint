import React from 'react';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  render() {
    return (
      <div id='SessionForm'>
        <lable> Username:
        <input type="text" />
        </lable>
        <lable>Password:
          <input type="password" />
        </lable>
        <button type='button' />
      </div>
    )
  }
}

export default SessionForm;
