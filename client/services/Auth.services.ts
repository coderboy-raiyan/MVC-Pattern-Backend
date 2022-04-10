import httpReq from './http.service'

class AuthRequest {
  async login(payload: any) {
    const { data } = await httpReq
      .post('/auth/login', payload)
      .then((data) => data)
    return data
  }

  async register(payload: any) {
    const { data } = await httpReq
      .post('/auth/register', payload)
      .then((data) => data)

    return data
  }
}

const AuthHttp = new AuthRequest()

export default AuthHttp
