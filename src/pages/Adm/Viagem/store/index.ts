import { FormEvent, useEffect, useState } from "react";
import * as S from "./styles";
import { LoadingComponent, ButtonComponent } from "components";
import { FcDatabase, FcUndo } from "react-icons/fc";
import { Link, useNavigate, useParams } from "react-router-dom";
import { apiViagem} from "services/data";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { IViagemForm } from "interfaces/viagem.interface";
import { IErrorResponse } from "interfaces/user.interface";


const ViagemStore = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [formData, setFormData] = useState<IViagemForm>({
    title: '',
    viagem: '',
  })
  const { id } = useParams<{ id: string }>();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    try {
      if (Number(id) > 0) {
        await apiViagem.update(Number(id), formData);
        toast.success("Mensagem alterada com sucesso!");
      } else {
        await apiViagem.store(formData);
        toast.success("Mensagem cadastrada com sucesso!");
      }
      navigate('/adm/Viagem')
    } catch (error) {
      const err = error as AxiosError<IErrorResponse>
      let Viagems = err.response?.data.viagem
      if (err.response?.data.errors) {
        Viagems = err.response?.data.errors?.map((i) => i.viagem)
          .reduce((total, cur) => `${total} ${cur}`)
      }
      toast.error(Viagems)
    }
  }

  async function handleChange(e: IViagemForm) {
    setFormData((state: IViagemForm) => ({ ...state, ...e }))
  }

  useEffect(() => {
    if (Number(id) > 0) {
      const fetchData = async (id: number) => {
        try {
          const response = await apiViagem.show(id);
          setFormData({
            ...response.data,
            topic: response.data.ViagemTopic?.map((i) => i.id)
          });
        } catch (error) {
          console.log(error);
        }
      };
      fetchData(Number(id));
    }
    loadTopics()
    setIsLoading(false);
  }, [id]);

  return (
    <>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <>
          <S.Main>
            <form method="POST" onSubmit={handleSubmit}>
              <Link to="/adm/Viagem">
                <FcUndo /> Voltar
              </Link>
              <div>
                <label htmlFor="title">Título: </label>
                <input type="text" id="title" placeholder="Escreva um título" required
                  onChange={(e) => handleChange({ title: e.target.value })}
                  value={formData?.title}
                />
              </div>
              <div>
                <label htmlFor="Viagem">Mensagem: </label>
                <textarea id="Viagem" placeholder="Escreva uma mensagem" required
                  onChange={(e) => handleChange({ Viagem: e.target.value })}
                  value={formData?.Viagem}
                />
              </div>
              <div>
                <label>Tópicos:</label>
                <div>
                  {topics && topics.map((i) => (
                    <div key={i.id}><>
                      <input type="checkbox" id={`topic${i.id}`} name="topics[]"
                        onChange={(e) => handleCheck(e.target.value)}
                        value={i.id}
                        checked={formData?.topic?.includes(Number(i.id))}
                      />
                      <label htmlFor={`topic${i.id}`}>{i.name}</label>
                    </></div>
                  ))}
                </div>
              </div>
              <ButtonComponent bgColor="add" type="submit">
                Enviar <FcDatabase />
              </ButtonComponent>
            </form>
          </S.Main>
        </>
      )}
    </>
  );
};

export default ViagemStore;