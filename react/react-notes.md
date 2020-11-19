# Notes

## Motivation: why use React?
Programação orientada a evento. When learning React we can then go to Mobile App Dev, like...

## Understanding React
Each component in React is basically a function in JS and this function returns a HTML (UI), which is written in JSX.
JSX = JavaScript XML, basically HTML.

This HTML is gonna change(*react*) the behaviour according to the component. 

We can give an internal state (?) to our component, for that we use a *state hook*:
``` import { useState } from 'react' ```

But what is a hook? Is a function that returns a value AND a function that CHANGES (reacts) the value, hence we have
the dynamic behaviour from ```React```.


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

Reserved keywords:
- ```extends``` : eh uma subclasse de uma classe (React.Component)
- ```super```: usamos super pra acessar um construtor
- ```this```: contexto, sempre quando estamos dentro de uma classe e escrevemos isso, referenciamos o contexto (a classe)
- ciclo de vida: mudança no status do componente
- ```componentDidMount```: quando é renderizado ele roda esse metodo
- ```componentdidupdate```: atualizacao no component
- ```componentWillUnmount```:
- ```setInterval``` em JS: função recursiva e executa pra sempre 
- no final o ```render()```: pra fazer o deploy do componente
- ```innerHTML```: não precisa ser usado em React, em Vanilla precisariamos. O Estado interno dentro de um div se atualiza
de acordo com o estado, ele faz o react do estado de um componente sem precisar falar nada e renderiza de novo! Por
isso o react é tão dinâmico
- ```new```: palavra reservada pra usar classe como componente -> construction function, construtor de uma classe mas como função
(isso se estende a react, js etc)

hooks are function that resume what we do with class components:
useState -> this.State
useEffect -> componentDidMount, didUpdate



só entende-se hook qundo vai pros componentes de classe
- PARALELO JS COM HOOKS:
this.state = getter
setState = setter (vem o React.component que importamos)

em hooks: a mesma coisa, metodo retorna o estado (getter), setter..


## Resources
https://youtu.be/Tn6-PIqc4UM


