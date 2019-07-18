import request from './base';
import qs from 'qs';
import { userRequest, userParam } from '@/interface/userApi';

const mergeCommonParam = (payload: any):userRequest => {
  let commonParam:userParam = {
    partnerNo: 'USERNO',
    reqNo: '122',
    reqDate: '2019-07-18 12:32:12',
    apiVersion: '1.0.0',
    platform: 'h5',
    sensordataVersion: '2.1.0',
    versionCode: '230',
    systemFrom: 'h5',
    thirdUserNo: '',
    userId: '',
    accessKey: ''
  }
  return Object.assign({}, commonParam, payload)
}

const userAPI = (id: string, payload: any): Promise<any> => {
  let param:string = JSON.stringify(mergeCommonParam(payload))
  return request.post('/api', qs.stringify({
    id,
    param
  })).then(data => data.data.data)
}

export default userAPI 