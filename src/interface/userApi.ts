export interface userRequest {
  id: string,
  param: userParam
}

export interface userParam {
  partnerNo: string,
  thirdUserNo: string,
  reqNo: string,
  reqDate: string,
  userId: string,
  apiVersion: string,
  accessKey: string,
  platform: string,
  sensordataVersion: string,
  versionCode: string,
  systemFrom: string
}

export interface userResponse {
  code: string,
  data: any,
  message: string,
  status: string
}