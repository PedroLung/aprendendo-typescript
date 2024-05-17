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

# Configurações do Compiler que Você Deve Conhecer

## Comandos Especiais

### Modo de Observação (Watch Mode)

Para ativar o modo de observação, digite o seguinte comando no seu terminal:

```bash
tsc --watch
```

Este comando monitora todos os seus arquivos `.ts` e compila automaticamente qualquer arquivo que seja alterado. 

**Nota:** Este comando bloqueia o seu terminal. Para interrompê-lo, digite `Ctrl+C`.

## Inclusão e Exclusão de Arquivos na Compilação

Para incluir ou excluir um arquivo na compilação, adicione os comandos abaixo no seu `tsconfig.json`:

**Excluir**

```json
"exclude": ["caminho até o arquivo"]
```

**Incluir**

```json
"include": ["caminho até o arquivo"]
```

### Quando Utilizar Incluir ou Excluir?

Ambos os comandos têm a mesma função, mas a escolha depende da situação. Por exemplo, se você tem 5 arquivos `.ts` e quer compilar apenas dois deles, seria mais fácil incluir os dois arquivos desejados do que excluir os três restantes. No entanto, se você quer compilar três arquivos e excluir dois, seria mais fácil excluir os dois indesejados do que incluir os três desejados.

## Target

A chave `"target"` no `tsconfig.json` indica para o compilador a versão do EcmaScript que será usada para converter o seu arquivo `.ts`. Por exemplo:

```json
"target": "es2016"
```

## Debugging no TypeScript (Source Map)

Para habilitar o mapeamento de código-fonte (Source Map), descomente a opção correspondente no `tsconfig.json`. Esta opção permite que o seu navegador mapeie diretamente o seu arquivo `.ts`, facilitando o debug.

## Removendo Comentários na Compilação

Como os navegadores não interpretam arquivos `.ts`, é necessário compilar esses arquivos para `.js`. Se você deseja evitar que os comentários do seu arquivo `.ts` sejam incluídos no arquivo `.js` compilado, habilite a opção `"removeComments"` no `tsconfig.json`.

## Organização de Pastas

No `tsconfig.json`, temos:

- `"rootDir"`: Indica o diretório raiz da sua aplicação, onde ficarão os seus arquivos `.ts`.
- `"outDir"`: Indica o diretório onde o seu arquivo `.js` será salvo após a compilação do arquivo `.ts`.

## Evitando Erros na Compilação

A opção `"noEmitOnError"` no `tsconfig.json` impede a compilação do arquivo `.ts` caso haja algum erro. Sem essa opção ativa, as regras do TypeScript serão ignoradas e passadas para o arquivo `.js`.

## Verificação de Tipos (Type Checking)

Todas as opções a seguir são habilitadas no `tsconfig.json`:

- `"noImplicitAny"`: Obriga a tipagem das variáveis, evitando o uso implícito do tipo `any`. Isso ajuda a prevenir erros futuros.
- `"noUnusedLocals"`: Emite um alerta quando você declara uma variável, mas não a utiliza. Isso ajuda a manter o seu código limpo.
- `"noUnusedParameters"`: Semelhante ao `"noUnusedLocals"`, mas analisa os parâmetros das funções.
- `"noImplicitReturn"`: Impede a compilação de retornos implícitos.

**Nota:** Se você habilitar a opção `"strict"`, todas as opções de verificação de tipos serão habilitadas.