import React, { Component } from 'react'


class NewComment extends Component {
    state = {
        newComment: ''
    }
    handleChange  = event => {
        this.setState({
          newComment: event.target.value       
        })
    }
    sendComment = () => {
        this.props.sendComment(this.state.newComment)
        this.setState({
            newComment: ''
        })
    }
    render() {
        return(
            <div>
                <form className='form'>
                    <textarea className='form-control mt-2' value={this.state.newComment} onChange={this.handleChange} ></textarea>
                    <p>
                        <button className='btn btn-primary mt-1' onClick={this.sendComment} >Enviar</button>          
                    </p>
                </form>
            </div> 
        )
    }
}

export default NewComment