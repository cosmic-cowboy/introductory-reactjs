var Alert = ReactBootstrap.Alert;
var Input = ReactBootstrap.Input;
var Button = ReactBootstrap.Button;
var ButtonInput = ReactBootstrap.ButtonInput;




// フォーム

const formInstance = (
      <form>
        <h2 class="text-center">Please sign in</h2>

		<Input
	        type='email'
	        placeholder='Email address'
	        bsStyle='success'
	        hasFeedback
	        ref='input'/>
	        
		<Input
	        type='password'
	        placeholder='Password'
	        bsStyle='success'
	        hasFeedback
	        ref='input'/>

        <Input type='checkbox' label='remember-me' checked readOnly />

        <ButtonInput type="submit" bsStyle='primary' bsSize='large' block>Sign in</ButtonInput>
      </form>
);
React.render(
        formInstance,
        document.getElementById('test-form')
);

// アラート
const alertInstance = (
  <Alert bsStyle='warning'>
    アラートメッセージ
  </Alert>
);
React.render(
        alertInstance,
        document.getElementById('test-container')
);