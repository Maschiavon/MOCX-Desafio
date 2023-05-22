# Desafio MOCX Faça uma aplicação completa (front e backend) contendo: 

## Front end: 
- Tela Principal formulário para cadastro de uma pessoas com os seguintes dados: Nome, CPF e data de nascimento; Ao cadastrar deve-se apresentar uma mensagem informando se o cadastro foi realizado com sucesso ou se houve algum erro. 
- Tela de visualização das pessoas cadastradas, esta tela deve conter as seguintes funções: delete do registro e update somente do nome e data de nascimento; Ao excluir ou editar deve apresentar uma mensagem informado se foi alterado/excluido com sucesso ou se houve algum erro. 

## Back end: 
- Cadastro de pessoas: Não pode inserir uma pessoa sem CPF, deve-se fazer um calculo para validar se o CPF é válido (para descobrir a formula pesquise por CÁLCULO DE CPF no google), não pode inserir dois CPFs iguais; Caso já tenha algum CPF igual na base de dados, deve devolver uma mensagem pro front informando que já existe este CPF no banco. Quando o CPF for inválido, devolver a mensagem pro front dizendo o mesmo. 

Dica: - Na parte de banco de dados você poderá utilizar o MongoDB Atlas, o qual disponibiliza um banco de dados MongoDB em nuvem de forma gratuita. (https://www.mongodb.com/atlas/database) Tecnologias a serem utilizadas: - Node - Express; - React; - Mongo; - Git; 

Como utilizar o GIT: Você deve criar 4 branchs. 
- Master (onde terá todo o projeto desenvolvido); 
- Dev (para fazer os testes entre back e front);
- Front ( onde terá somente a parte do front); 
- Back ( onde terá somente a parte do Back); 

Fluxo: Faça primeiro o back, na sequencia o front e por fim junte as duas branchs na DEV para que tudo possa funcionar em conjunto. Assim que tudo estiver funcionando, fazer um merge entre DEV e MASTER Prazo de Entrega: 5 dias corridos a contar de hoje. 
Forma de entrega: Encaminhar neste mesmo número o link do projeto do github. (Não esqueça de deixar o projeto como público) 
Obs.: A não entrega do projeto, o candidato é automaticamente desclassificado. 
Obs. 2: Caso expire o prazo de entrega, encaminhe o projeto até onde se conseguiu fazer, independente de erros.
