import request from '@/api/base/base';

const getTopics = ():Promise<any> => request.get('/api/topics').then(data => data.data.data);

export {
  getTopics,
};
