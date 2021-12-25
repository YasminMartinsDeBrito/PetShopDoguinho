
import { useState } from "react";
import { useForm } from "react-hook-form";

const EnderecoCard = () => {

    const [adress,setAdress] = useState([])
    const { register, handleSubmit, setValue, setFocus} = useForm();

      const onSubmit = (e) => {
         setAdress([...adress,e]);  
      
     
      
      console.log( adress)
    };

    function checkCep(e) {
      const cep = e.target.value.replace(/\D/g, "");
          console.log(cep)
      

      fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then(data => {
         
          setValue('rua', data.logradouro)
          setValue('bairro', data.bairro)
          setValue('cidade',data.localidade)
          setValue('estado', data.uf)
          setFocus('numero')
          
        });
      
   }

  return (
    <>
     <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>CEP:
                <input placeholder="Digite o CEP" {...register("cep")} onBlur={checkCep}/>
            </label>
          </div>

          <div>
            <label>Rua:
                <input name="rua" type="text" {...register("rua")} />
            </label>
          </div>

          <div>
            <label>Numero:
                <input name="numero" type="text" {...register("numero")} />
            </label>
          </div>

          <div>
            <label>Bairro:
                <input name="bairro" type="text" {...register("bairro")} />
            </label>
          </div>

          <div>
            <label>Cidade:
                <input name="cidade" type="text" {...register("cidade")} />
            </label>
          </div>

          <div>
            <label>Estado:
                <input name="estado" type="text" {...register("estado")} />
            </label>
          </div>

          <button type="submit">Enviar</button>
        </form>
      </div>
    
     
    </>
  );
};
export default EnderecoCard;
