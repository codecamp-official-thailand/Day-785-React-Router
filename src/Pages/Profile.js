import React, { Component } from 'react'

export default class Profile extends Component {

  state = {
    studentList:
      [{
        name: "Nat",
        age: 25
      }, {
        name: "Sonter",
        age: 19
      }, {
        name: "Tobtab",
        age: 25
      },
      ]
  }

  render() {
    const studentList = this.state.studentList;
    const idx = this.props.match.params.idx;

    return (
      <div>
        <h1>Name: {studentList[idx].name}</h1>
        <h2>Age: {studentList[idx].age}</h2>
      </div>
    )
  }
}
