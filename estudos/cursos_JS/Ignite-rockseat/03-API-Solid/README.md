#App

GymPass style app.

## RFs ( Requisitos funcionais )

-[x] Deve ser posivel se cadastrar;
-[] Deve ser possiver se autenticar;
-[] Deve ser possivel obeter o pefil de um usuário logado;
-[] Deve ser possivel obter o número de check-in realizados pelo usuário logado;
-[] Deve ser possivel o usuário obter seu historico de check-in;
-[] Deve ser possivel o usuário buscar academias proximas;
-[] Deve ser possivel o usuário buscar academias pelo nome;
-[] Deve ser possivel o usuario realizar check-in de uma academia;
-[] Deve ser possivel validar o check-in de um uauário;
-[] Deve ser possivel cadastrar uma academia;

## RNs

-[x] O usuário não pode se cadastrar com um email duplicado;
-[] o usuário não pode fazer 2 check-in no mesmo dia;
-[] o usuário não pode fazer o check-in se não estiver a meno de 100mt da academia;
-[] o check-in só pode se validado até 20 minutos após criado;
-[] o check-in só pode ser valido por administradores;
-[] A academia só pode ser cadastrado por administradores;

## RNFs 

-[x] A senha do usuário precisa estar criptografada;
-[x] Os dados da aplicação precisa estar em um banco PostgreSQL;
-[] Todas as listas de dados precisam estar paginadas com 20 itens por página;
-[] Ousuário deve ser identificado por um JWT(JSON Web Token);