import { useForm } from "react-hook-form"
import { PreinscripcionesEsima } from "../types"
import { useMutation } from "react-query"
import { crearRequerimiento } from "../api/api"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import FormularioEditarNuevoIngreso from "../formularios/FormularioEditarNuevoIngreso"
import RutasIconos from "./RutasIconos"


export default function InsertarRequerimientos() {
    const navigate = useNavigate();
    const valoresIniciales:PreinscripcionesEsima={
        titulo:"",
        requerimiento1:"",
        requerimiento2:"",
        requerimiento3:"",
        requerimiento4:"",
        requerimiento5:"",
    }

    const {register,handleSubmit,formState:{errors}} = useForm({defaultValues:valoresIniciales})
    const {mutate} = useMutation({
        mutationFn:crearRequerimiento,
        onError:()=>{

        },
        onSuccess:(data)=>{
            toast.success(data)
            navigate('/panel')
        }
    })
    const handleForm= (formData:PreinscripcionesEsima)=>mutate(formData)
  return (
    <div>

        <form
        noValidate
        onSubmit={handleSubmit(handleForm)}
        className="form-register"
        >
            <FormularioEditarNuevoIngreso register={register} errors={errors} />
            <input className="botons" type="submit" value='Aceptar' />
        </form>
        <div>
            <RutasIconos/>
        </div>
    </div>
  )
}
