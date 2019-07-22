export interface cnnodeResponse {
  success: boolean,
  data: [] | any,
}

export interface cnnodeTopics {
  topics: Array<cnnodeTopicsItem>,
}

export interface cnnodeTopicsItem {
  id: string,
  authorId: string,
  tab: string,
  content: string,
  title: string,
  lastReplyAt: string,
  good: boolean,
  top: boolean,
  replyCount: number,
  visitCount: number,
  createAt: string,
  author: {
    loginname: string,
    avatarUrl: string,
  },
}
