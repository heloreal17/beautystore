import React from 'react'

const Usuario = () => {
    return (
        <div>
            <div className="container mb-5">
                
                <div className="row">
                    
                    <div className="col-12 text-center py-4 my-4">
                        
                        <h1>Faça Login</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md 5 d-flex justify-content-center">
                        <img src="https://th.bing.com/th/id/R.f818819438d72f3a4469dffbbf7cb8dd?rik=RzTJAfozhmjH%2bg&riu=http%3a%2f%2fsintec.net.br%2fparticular%2fnbs9mt2gm7l%2farquivos%2fbonecocontadoronline.gif&ehk=tBg3%2bTpwdkkpDMOa3l8PWzPYNSvwJIAEdPaJr8smwLc%3d&risl=&pid=ImgRaw&r=0" alt="Contact Us" height="300px" width="300px" />
                    </div>
                    <div className="col-md-6">
                    <form>
  <div class="mb-3">
    <label for="exampleInputEmail1">Endereço de email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Seu email"></input>
    <small id="emailHelp" class="form-text text-muted">Nunca vamos compartilhar seu email, com ninguém.</small>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1">Senha</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Senha"></input>
  </div>
  <div class="mb-3">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
    <label class="form-check-label" for="exampleCheck1">Lembrar senha</label>
  </div>
  <button type="submit" class="btn btn-outline-primary">Enviar</button>
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

            export default Usuario;
