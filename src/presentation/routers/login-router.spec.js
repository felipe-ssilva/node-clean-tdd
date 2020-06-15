class LoginRouter {
  route (httpReqquest) {
    if (!httpReqquest || !httpReqquest.body) {
      return {
        statusCode: 500
      }
    }
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

  test('Should return 500 if no httpRequest is provided', () => {
    const sut = new LoginRouter()
    const httpResponse = sut.route()
    expect(httpResponse.statusCode).toBe(500)
  })

  test('Should return 500 if no httpRequest has no body', () => {
    const sut = new LoginRouter()
    const httpResponse = sut.route({})
    expect(httpResponse.statusCode).toBe(500)
  })
})
