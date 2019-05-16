import React, { Component } from 'react'

export default class RegisterForm extends Component {
  render() {
    return (
      <div>
        <form>
            <label>
                First name
                <input type='text' name='something'/>
            </label>
            <label>
                Last name
                <input type='text' name='something'/>
            </label>
            <label>
                Email
                <input type='text' name='something'/>
            </label>
            <label>
                Password
                <input type='text' name='something'/>
            </label>
            <label>
                Streetname
                <input type='text' name='something'/>
            </label>
            <label>
                Housenumber
                <input type='text' name='something'/>
            </label>
            <label>
                Zipcode
                <input type='text' name='something'/>
            </label>
            <label>
                City
                <input type='text' name='something'/>
            </label>
            <label>
                Phonenumber
                <input type='text' name='something'/>
            </label>
        </form>
      </div>
    )
  }
}
