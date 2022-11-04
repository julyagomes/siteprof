export interface IViagemData {
    id?: number
    title?: string
    viagem?: string
    created_at?: string
    user?: {
      name: string
    }
    viagemTopic?: {
      id: number
      name: string
    }[]
  }
  
  export interface IViagemForm {
    id?: number
    title?: string
    viagem?: string
    created_at?: string
    topic?: number[] | undefined
  }