import request from '@/api/base/base'

export const getTopics = ():Promise<any> => request.get('/api/topics').then(data => data.data.data)