import React from 'react'

const ProdutoBeleza = () => {
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
                <div class="mb-3 form-group col-md-6" id=''>
                    <label for="inputNomeProduto">Código do Produto:</label>
                    <input type="nomeProduto" class="form-control" id="produtobeleza" placeholder="Insira o código do produto"></input>
                  </div>
                  <div class="mb-3 form-group col-md-6">
                    <label for="inputDescricaoProduto">Descrição:</label>
                    <input type="descricaoProduto" class="form-control" id="descricaoProduto" placeholder="Descrição do Produto"></input>
                  </div>
                  <div class="mb-3 form-group col-md-6">
                    <label for="inputMarcaProduto">Marca:</label>
                    <input type="marcaProduto" class="form-control" id="inputMarcaProduto" placeholder="Marca do Produto"></input>
                  </div>
                  <div class="mb-3 form-group col-md-2">
                    <label for="inputDataFabricacao">Data de Fabricação:</label>
                    <input type="date" class="form-control" id="inputDataFabricacao"></input>
                  </div>
                  
        </div>
                <div class="mb-3 form-row">
                  <div class="mb-3 form-group col-md-4">
                    <label for="inputEstado">Quantidade em Estoque</label>
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
              </div>

  <button type="submit" class="btn btn-outline-primary">Cadastrar Produto</button>
</form>
                       
                    </div>
                    </div>
                </div>
            </div>
            )
}

            export default ProdutoBeleza;
