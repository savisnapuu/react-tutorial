import React from 'react'
import Person from './Person'

function NameList() {
  const names = ['Bruce', 'Clark', 'Diana']
  const persons = [
    { id: 1, name: 'Diana', age: 28, skill: 'Vue' },
    { id: 2, name: 'Clark', age: 30, skill: 'React' },
    { id: 3, name: 'Kent', age: 25, skill: 'Angular' },
  ]
  const personList = names.map((person, index) => (
    <h2 key={index}>
      {index}
      {person}
    </h2>
  ))
  return <div>{personList}</div>
}

export default NameList
