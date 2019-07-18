export interface user {
  loginInfo: loginInfo,
  userInfo: userInfo
}

export interface loginInfo {
  accessKey: string,
  thirdUserNo: string,
  userId: string
}

export interface userInfo {
  phoneNo: string
}
