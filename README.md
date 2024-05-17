# Aprendendo TypeScript

Este repositório é dedicado ao aprendizado do TypeScript, uma linguagem de programação que é um superconjunto do JavaScript.

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado em seu sistema:

- Node.js

## Configuração do Ambiente

### Instalação do TypeScript

Para instalar o TypeScript globalmente em seu sistema, execute o seguinte comando:

```shell
npm i -g typescript
```

### Execução de Códigos TypeScript

Para compilar e executar um arquivo TypeScript, use o seguinte comando:

```shell
tsc <nome do arquivo>
```

### Inicialização de um Projeto TypeScript

Para iniciar um novo projeto TypeScript, execute o seguinte comando:

```shell
tsc --init
```

## Configuração do Projeto

Aqui estão algumas configurações que você pode definir em seu arquivo `tsconfig.json` para personalizar o comportamento do compilador TypeScript:

1. `"rootDir": "./<nome da pasta>"` - Define a pasta raiz que contém os arquivos TypeScript. Substitua `<nome da pasta>` pelo nome da sua pasta.
2. `"outDir": "./prod"` - Define a pasta onde os arquivos JavaScript compilados serão colocados.
3. `"noEmitOnError": true` - Impede a compilação de códigos que não seguem todas as regras do TypeScript.
4. `"noImplicitAny": true` - Não permite tipos implícitos de 'any'.