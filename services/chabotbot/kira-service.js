import { api } from "../api";

const headers = {
    'Access-Control-Allow-Origin': '*'
}
export const kiraService = {
  startSession: () => api.get('/new-session'),
  sendMessage: (data) => api.post('/message', data, { headers }),
  deleteSession: (data) => api.post('/delete-session', data, { headers })
}