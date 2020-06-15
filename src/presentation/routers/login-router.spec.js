class LoginRouter {
  route (httpReqquest) {
    const { email, password } = httpReqquest.body
    if (!email || !password) {
      return {
        statusCode: 400
      }
    }
  }
}

describe('Login router', () => {
  test('Should return 400 if no email is provided', () => {
    const sut = new LoginRouter()
    const httpReqquest = {
      body: {
        password: 'password'
      }
    }
    const httpResponse = sut.route(httpReqquest)
    expect(httpResponse.statusCode).toBe(400)
  })

  test('Should return 400 if no password is provided', () => {
    const sut = new LoginRouter()
    const httpReqquest = {
      body: {
        email: 'teste@email.com'
      }
    }
    const httpResponse = sut.route(httpReqquest)
    expect(httpResponse.statusCode).toBe(400)
  })
})
