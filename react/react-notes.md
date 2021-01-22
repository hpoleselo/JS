# Notes

## React Installation
Check if NodeJS and npm is installed beforehand:

```
$ npm -v 

$ node -v
```

If using Ubuntu, make sure to add npm to PATH, instead we would need to use sudo for installing any package because Nodejs is located on /usr/lib, for that,
create the following alias on the .bashrc:
```alias confignpmpath='npm set prefix ~/.npm ; PATH="$HOME/.npm/bin:$PATH" ; PATH="./node_modules/.bin:$PATH"' ```

And on the last line, call it:
``` confignpmpath ```

Now we can install the dependecies properly:
```
$ npm install -g create-react-app

```

When creating an app for the first time it will download some basic packages such: react, react-dom and so on, so it may take a long time when you do the following command:
``` $ npx create-react-app first-react-app ```

Make sure to install the router library and update our application package.json:
```
$ npm i react-router-dom --save

```


## Motivation: why use React?
Event-driven programming.

## Understanding React
React is all about component. Usually we have one component per file, so for an application we would have: ```Button.js```, ```Window.js``` and so on and components are usually reusable parts in the application.
Each component in React is basically a function in JS and this function returns a HTML (UI), which is written in JSX.
JSX = JavaScript XML, basically HTML.

This HTML is gonna change/**react** the behaviour according to the component. 

To give this internal state to our component,  we use a *state hook*:
``` import { useState } from 'react' ```

But what is a hook? Is a function that returns a value AND a function that **changes**/reacts the value, hence we have the dynamic behaviour from ```React```:

```JS
function Item() {
    // count is our reactive state and setCount changes the state
    const [count, setCount] = useState(0);

    /*React Fragment: <> </> In the end of our function we have to return only one thing. Which is this empty tag, which is actually not empty, just a lazy way of saying: <React.Fragment> </React.Fragment> */
    return <>

    // Now we would bind this reactive state to a button in HTML (JSX)
    <p>{count}</p>
    <button 
        onClick= {() => setCount(count + 1)}>
    </button>
}
```

The advantage of React is that usually there's been already something developed (library/component) or to support what you want to do, e.g:
- Static Site: Gatsby
- Server-side Rendering: Next.js
- Animation: Spring
- Forms: Formik
- State Management: Redux, Mobx, XState, Recoil

And if we want to build applications for mobile: Reactive Native (Apple and Android).


## Hooks
React hooks x 

Life-cycle method
JSX nao é exclusivo do React, mas JSX vem nativo no React.

Concepts:
- Açucar sintático: escrever a mesma coisa de outra forma! Reduz a expressão a (não necessariamente um one-liner) 
Pro interpretador o açucar sintático não faz diferença mas é mais funcional pro programador! O código fica muito menor
arrow-function: açucar sintático, não possui contexto!

- promise: async await, é um sugar syntatic que ao invés de 20 linhas usa 5 linhas
carrying: uma função que executa uma função... Bom pra teste automaizado
SEMPRE DENTRO DE EVENTOS PASSAMOS FUNCOES
E SEMPRE DENTRO DE EVENTOS , ARROW FUNCTIONS (PRA TER A REFERENCIA DO CONTEXTO?X)

Reserved Keywords:
- ```extends``` : eh uma subclasse de uma classe (React.Component)
- ```super```: usamos super pra acessar um construtor
- ```this```: contexto, sempre quando estamos dentro de uma classe e escrevemos isso, referenciamos o contexto (a classe)

- ```setInterval``` em JS: função recursiva e executa pra sempre 
- no final o ```render()```: pra fazer o deploy do componente
- ```innerHTML```: não precisa ser usado em React, em Vanilla precisariamos. O Estado interno dentro de um div se atualiza
de acordo com o estado, ele faz o react do estado de um componente sem precisar falar nada e renderiza de novo! Por
isso o react é tão dinâmico
- ```new```: palavra reservada pra usar classe como componente -> construction function, construtor de uma classe mas como função
(isso se estende a react, js etc)

hooks are function that resume what we do with class components:
(mais famosos sao useState e useEffect)
useState -> this.State
useEffect -> componentDidMount, didUpdate
useCallback (consegue reduzir o número de callbacks pra cada botão em um app, por exemplo.)


Gerenciam o ciclo de vida do componente
ciclo de vida: mudança no status do componente
- ```componentDidMount```: quando é renderizado (pela PRIMEIRA vez) ele roda esse metodo
- ```componentDidUpdate```: toda vez que o componente é atualizado (estado, ..)
- ```componentWillUnmount```: "desrenderização", função de limpeza, quando o componente deixa de existir (destruição), usado p/ melhorar perfomance, limpeza de variável
(só são disponíveis nos componentes baseados em classe, em função perdemos isso, por isso o useEffect é criado)


só entende-se hook qundo vai pros componentes de classe
- PARALELO JS COM HOOKS:
this.state = getter
setState = setter (vem o React.component que importamos)

em hooks: a mesma coisa, metodo retorna o estado (getter), setter..

### useEffect
Até certo momento useEffect substitui o class component. Mas os hooks são muito mais por isso... Mas de qualquer sorte
caminha-se mais pra lógica funcional (class component menos incentivado)
- Faz a funcao combinadada de componentDidMount e componentDidUpdate
- Espera todo o DOM ser renderizado para ser disparado (pra prevenir erros)
RENDERIZAÇÃO: atualização de cada componente na tela (botão sendo pressionado por ex)
MEMORIZAÇÃO, vai executar sempre que houver qualquer renderização na tela
Responsável pelo ciclo de vida, hook responsável para lidar com o estado do componente através de lógica funcional

Toda função que estiver dentro de useEffect se comporta como um WillUnmount: no final ```return function()```

## Resources
https://youtu.be/Tn6-PIqc4UM


