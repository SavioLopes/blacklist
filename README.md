# Blacklist

## Dependências  do projeto
 - Nodejs 8
 - Acesso a internet (mongodb online)

## Rotas
- GET: '/status' (consulta status do servidor)
- GET: '/cpf/:cpf/status' (consulta cpf)
- POST: '/cpf/blacklist' (inclui cpf na blacklist)
- DELETE: '/cpf/:cpf' (remove cpf da blacklist)

## 1) Executando com Docker
### Baixar imagem do docker
```
docker pull saviooliveiralopes/blacklist:1.0.0
```
### Executar serviço
```
 docker run -it -p 3000:3000 -d saviooliveiralopes/blacklist:1.0.0
```

## 2) Executando sem Docker
### Clonar repositório do github
```
git clone https://github.com/SavioLopes/blacklist.git
```
### Instalando dependências do projeto
```
cd blacklist
npm install
```
### Executar os testes automatizados
```
npm test
```
### Executar serviço
```
npm start
```

## 3) Acessando o formulário de consulta

### Executar a API e acessar http://localhost:3000/