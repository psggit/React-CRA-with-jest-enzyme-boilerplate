import React from 'react'
import { render } from '@testing-library/react'
import { shallow } from "enzyme"
import Login from 'Container/Login/index.js'
import '@testing-library/jest-dom/extend-expect'

describe("Login component tests", () => {
  it("should have lgin form", () => {
    const loginComponent = shallow(<Login />)
    expect(loginComponent.find("#login").exists()).toBe(true)
  })

  it("should have input for email and password", () => {
    const { getByTestId } = render(<Login />)
    const output = getByTestId("email")
    expect(output).toBeInTheDocument()
  })
})