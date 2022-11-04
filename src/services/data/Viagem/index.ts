import { IViagemData, IViagemForm } from "interfaces/viagem.interface";
import api from "services/api";

class ViagemData {
  index() {
    return api.get<IViagemData[]>('/viagems')
  }
  store(data: IViagemForm) {
    return api.post(`/viagems`, data)
  }
  show(id: number) {
    return api.get<IViagemData>(`/viagems/${id}`)
  }
  update(id: number, data: IViagemForm) {
    return api.put(`/viagems/${id}`, data)
  }
  destroy(id: number) {
    return api.delete(`/viagems/${id}`)
  }
}

export default new ViagemData()