import React, { Component } from 'react'

export default class AddProductForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            desc: ''
        }
    }

    onSubmit = (e) => {
        e.preventDefault()

        this.props.addProduct({
            id: Date.now().toString(),
            name: this.state.name,
            desc: this.state.desc
        })
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
          <input type="text" value={this.state.name} name="name" placeholder='Name' className='form-control' onChange={this.onChange}/>
          <input type="text" value={this.state.desc} name="desc" placeholder='Description' className='form-control' onChange={this.onChange}/>
          <button className='btn'>Lägg till produkt</button>

          {/* <br />
          { this.state.name }
          <br />
          { this.state.desc} */}
      </form>
    )
  }
}
