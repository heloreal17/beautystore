import React from 'react'

const Contact = () => {
    return (
        
        <div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h1>Cadastre o Produto</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {/* <div className="col-md 5 d-flex justify-content-center">
                        <img src="https://th.bing.com/th/id/R.f818819438d72f3a4469dffbbf7cb8dd?rik=RzTJAfozhmjH%2bg&riu=http%3a%2f%2fsintec.net.br%2fparticular%2fnbs9mt2gm7l%2farquivos%2fbonecocontadoronline.gif&ehk=tBg3%2bTpwdkkpDMOa3l8PWzPYNSvwJIAEdPaJr8smwLc%3d&risl=&pid=ImgRaw&r=0" alt="Contact Us" height="300px" width="300px" />
                    </div> */}
                    <div className="form-row">
                    
                    <form>
  <div class="mb-3 form-row">
  <div class="mb-3 form-group col-md-6">
      <label for="inputNomeProduto">Nome Produto</label>
      <input type="nomeProduto" class="form-control" id="inputNomeProduto" placeholder="Nome do Produto"></input>
    </div>
    <div class="mb-3 form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email"></input>
    </div>
</div>
  <div class="mb-3 form-group">
    <label for="inputAddress">Endereço</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Rua dos Bobos, nº 0"></input>
  </div>
   <div class="mb-3 form-row">
    <div class="mb-3 form-group col-md-6">
      <label for="inputCity">Cidade</label>
      <input type="text" class="form-control" id="inputCity"></input>
    </div>
    <div class="mb-3 form-group col-md-4">
      <label for="inputEstado">Quantidade de Produto</label>
      <select id="inputEstado" class="form-control">
        <option selected>Escolher...</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
      </select>
    </div>
    <div class="mb-3 form-group col-md-2">
      <label for="inputCEP">CEP</label>
      <input type="text" class="form-control" id="inputCEP"></input>
    </div>
  </div>

  <button type="submit" class="btn btn-outline-primary">Cadastrar Produto</button>
</form>
                        {/* <form >
                            <div class="mb-3">
                                <label for="exampleForm" class="form-label">Nome completo</label>
                                <input type="text" class="form-control" id="exampleForm" placeholder="nome completo"/>
</div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="nome@gmail.com"/>
</div>
<div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Senha</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Digite sua senha"/>
</div>
                                <button type="submit" class="btn btn-outline-primary">Entrar</button>
                        </form> */}
                    </div>
                    </div>
                </div>
            </div>
            )
}

            export default Contact
