import React from 'react'
import data from '../../data/users.json'
import Data from './Data'

export default function Userdata() {
  return (
    <div>
      <Data mydata={data.users}/>
    </div>
  )
}
