import React, { Component } from 'react'

class SignUp extends Component{
    state = {
        email: '',
        passwd: ''
    }
    // Esse é um handleChange curinga, pois, tem uma aero funtion que retorna outra.
    handleChange  = field => event => {
        this.setState({
          [field]: event.target.value       
        })
    }
    createAccount = () => {
        this.props.createAccount(this.state.email, this.state.passwd)
    }
    render(){
        const errorMessages = {
           'auth/email-already-in-use': 'Este e-mail já foi utilizado.',
           'auth/weak-password': 'Senha muito fraca.',
           'auth/invalid-email': 'E-mail inválido.' 
        }
        return(
            <div>
                {
                    this.props.isSignUpError && 
                        <div className='card text-white bg-danger'>
                            <div className='card-header'><strong>Erro ao criar uma nova conta</strong></div>
                            <div className='card-body'>
                                {errorMessages[this.props.signUpError]}
                            </div>
                        </div>
                }
                <h4>Criar conta</h4>
                <form className='form-inline'>
                    <input type='text' className='form-control mr-1' onChange={this.handleChange('email')} placeholder='email' />
                    <input type='password' className='form-control mr-1' onChange={this.handleChange('passwd')} placeholder='senha' />
                    <button type='button' className='btn btn-primary mr-1' onClick={this.createAccount}>Criar Conta</button>
                    <button className='btn' onClick={() => this.props.changeScreen('login')}>Já tenho uma conta, entrar!</button> 
                </form>
            </div>
        )
    }
} 
export default SignUp