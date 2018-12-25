import React, { Component } from 'react'

class Login extends Component{
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
    login = () => {
        this.props.login(this.state.email, this.state.passwd)
    }
    render(){
        const errorMessages = {
           'auth/wrong-password': 'E-mail e/ou senha inválidos.',
           'auth/user-not-found': 'Usuário não encontrado.',
           'auth/invalid-email': 'E-mail inválido.' 
        }
        return(
            <div>
                {
                    this.props.isAuthError && 
                        <div className='card text-white bg-danger'>
                            <div className='card-header'><strong>Erro ao entrar</strong></div>
                            <div className='card-body'>
                                {errorMessages[this.props.authError]}
                            </div>
                        </div>
                }
                <h4>Entre para comentar:</h4>
                <form className='form-inline'>
                    <input type='text' className='form-control mr-1' onChange={this.handleChange('email')} placeholder='email' />
                    <input type='password' className='form-control mr-1' onChange={this.handleChange('passwd')} placeholder='senha' />
                    <button type='button' className='btn btn-primary mr-1' onClick={this.login}>Entrar</button>
                    <button className='btn' onClick={() => this.props.changeScreen('signup')} >Criar conta</button>               
                    
                </form>
            </div>
        )
    }
} 
export default Login