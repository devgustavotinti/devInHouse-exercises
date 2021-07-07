export default function loginUsuario(){
  
  const digitarNome = () => {
    const logar = document.querySelector('section')
    const sumirLogin = document.querySelector('main')
    let nome = prompt('Digite seu nome:')
    let sobrenome = String(prompt('Qual o seu sobrenome ?'))
  
  
    if(nome !== '') {
       let escreverNome = document.querySelector('#nome').innerText =  `Seja bem-vindo, ${nome} !`
    }
  
    alert(`Seja bem-vindo ${nome} ${sobrenome}, você está logado.`)
  
    logar.classList.add('visivel')
    sumirLogin.classList.add('sumir')

    // export default sobrenome
  }
  
  
  
  const entradaUsuário = () => {
    const entrar = document.querySelector('#entrar')
  
    entrar.addEventListener('click', digitarNome)
    
  }
  entradaUsuário()
  
}