import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComonent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      parentName: 'Parent',
    }
    this.greetParent = this.greetParent.bind(this)
  }

  greetParent(childName) {
    alert(`Hello ${this.state.parentName} from ${childName}`)
  }

  render() {
    return <ChildComponent greetHandler={this.greetParent} />
  }
}

export default ParentComonent
