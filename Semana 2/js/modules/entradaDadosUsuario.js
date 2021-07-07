// import { sobrenome } from "./loginUsuario.js"


export default function entradaDadosUsuario(){
    const promptInfo = () => {
    const info = document.querySelector('#info') 
    let sobrenome = String(prompt('Qual o seu sobrenome ?'))
    let anoDeNascimento = Number(prompt('Em que ano você nasceu ?'))
    let filmes = confirm('Você gosta de filmes?')
  
    console.log(sobrenome)
    console.log(anoDeNascimento)
    console.log(filmes)
    
  
    info.innerHTML = `Seu sobrenome ${sobrenome.toUpperCase()} tem ${sobrenome.length} letras.`
  }
   
  
  
  const interagirUsuario = () => {
    const interacao = document.querySelector('#integracaoUsuario')
  
    interacao.addEventListener('click', promptInfo)
  }
  interagirUsuario()
}