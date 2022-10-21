import { IMessageData, IMessageForm } from "interfaces/message.interface";
import api from "services/api";

class MessageData {
  index() {
    return api.get<IMessageData[]>('/messages')
  }
  store(data: IMessageForm) {
    return api.post(`/messages`, data)
  }
  show(id: number) {
    return api.get<IMessageData>(`/messages/${id}`)
  }
  update(id: number, data: IMessageForm) {
    return api.put(`/messages/${id}`, data)
  }
  destroy(id: number) {
    return api.delete(`/messages/${id}`)
  }
}

export default new MessageData()