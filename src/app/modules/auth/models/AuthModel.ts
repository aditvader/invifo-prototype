export interface UserLogin {
  username: string
  password: string
}

export interface UserAuth {
  userID: number
  userName: string
  fullName: string
  token: string
  isAuthorized: boolean
}
