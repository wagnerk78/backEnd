# Projeto TO DO Back End

Este projeto faz parte de um desafio de Node + Angular

## Configuração e Execução

1. **Clonar o repositório:**

   ```bash
   git clone https://github.com/wagnerk78/projeto-to-do-backend.git
   ```

2. **Compilar e executar com node:**

  ```bash
    npm install
    npm run dev
  ```
 
 **Para cadastrar um usuário:**

   
      http://localhost:3000/usuarios
 

**"body" para cadastrar um usuário:**
      
   
      {
    "name":"Wagner",
    "email": "wagner@teste.com",
    "password": "12345678"
      }

**Para logar um usuário:**

   
      http://localhost:3000/usuarios/login
 

**"body" para logar um usuário:**
      
   
      {
    "email": "wagner@teste.com",
    "password": "12345678"
      }

 **Para cadastrar uma tarefa:**

   
      http://localhost:3000/tarefas
 



Importante! Ao realizar o login, colete o código baerer a ser passado no retorno do json. Posteriormente, passe no headers conforme abaixo, se utilizar o Postman:
![image](https://github.com/user-attachments/assets/58855d07-e02b-4605-9a16-1778a84ecc87)

**"body" para cadastrar uma tarefa:**
  ```bash
  {
    "prioridade": "Media",
    "descricao": "Comprar leite"
}
```

**Pode acompanhar o lançamento no banco de dados com o seguinte comando:**

  ```bash
npx prisma studio
```







