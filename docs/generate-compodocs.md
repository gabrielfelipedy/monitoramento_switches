## Gerar a documentação com Compodocs

É imporante sempre manter atualizada a documentação do projeto, para isso, foi escolhida a utilização da ferramenta [Compodocs](https://compodoc.app/) para automatizar a criação de uma documentação direta.

### 1 - Gerar a documentação

```nginx
npm run generate-docs
```

isso criaría um diretório `/documentation` contento a documentação gerada

Você também pode servir a documentação na sua máquina local:

```nginx
npm run serve-docs
```



O arquivo `tsconfig.doc.json` especifica os arquivos que serão incluídos e excluídos da documentação:

```json
{
  "include": ["src/**/*.ts"],
  "exclude": ["src/test.ts", "src/**/*.spec.ts"]
}

```