<h1 align="center">
    <br>
    <p align="center">Semana 15 - Autenticação e Autorização<p>
</h1>


Essa semana tivemos o desafio de autenticar nossas rotas e apenas usuários autorizados poderiam consultar, criar, atualizar e deletar estudios e títulos:

![gif "acess denied"](img/acessDenied.gif)

### Primeiro, crie um usuário:
<br>
- {POST}/usuarias/create
<br>
<br>

```
{
	"nome": "AnaSantos",
	"email": "anasantos@gmail.com",
	"senha": "teste@123"
}
```
### Depois, realize o login:
<br>
- {POST}/usuarias/login
<br>
<br>

```
{
	"email": "anasantos@gmail.com",
	"senha": "oi"
}
```

O sistema, então, irá gerar um token que servirá para autenticar a requisição nas outras rotas:
<br>
<br>

```
{
    "message": "Login realizado com sucesso",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuYXNhbnRvc0BnbWFpbC5jb20iLCJpYXQiOjE2Mjk3NjY2MTV9.CTLcEWf2Ut-1gMYV1e9frI1hbNunnfPgkVVOPAzihE8"
}
```

## Com o token gerado, você conseguirá acessar as demais rotas citadas na Semana-14!

![gif "log in"](img/logIn.gif)