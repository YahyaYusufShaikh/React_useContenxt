/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { AppContext } from './AppContext'

const Contacts = () => {
    const phone = useContext(AppContext)
  return (
    <div>
        <h2>Contacts</h2>
        <h3>Phone: {phone}</h3>
    </div>
  )
}

export default Contacts