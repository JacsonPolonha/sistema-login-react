## Explicação do App.js
Estado isAuthenticated: Este estado (useState(false)) indica se o usuário está autenticado. Inicialmente, ele é false, o que significa que o usuário não está autenticado até que faça login corretamente.

Função handleLogin:

Define isAuthenticated como true.
Essa função é chamada após o login bem-sucedido, permitindo o acesso à página /home.
Função handleLogout:

Define isAuthenticated como false.
Essa função é chamada na página /home quando o usuário clica no botão de logout. Ao deslogar, o estado isAuthenticated muda para false, o que efetivamente bloqueia o acesso direto à rota /home.
Configuração das Rotas:

Rota /: Aponta para a LoginPage. Passamos onLogin={handleLogin} para que a LoginPage possa chamar a função handleLogin ao logar com sucesso.
Rota /home: Este é o ponto onde a verificação de autenticação ocorre. Se isAuthenticated for true, renderizamos o componente HomePage, permitindo o acesso. Caso contrário, redirecionamos o usuário para / usando <Navigate to="/" />.
Router: BrowserRouter permite navegação entre rotas, e Routes organiza as diferentes Routes.



## Explicação do LoginPage
Estado de username e password:

useState é usado para capturar e atualizar o valor de username e password conforme o usuário digita.
Função handleSubmit:

Esta função é chamada quando o formulário é submetido.
Se username e password são ambos admin, significa que o login é bem-sucedido.
Chamamos onLogin() para definir isAuthenticated como true.
navigate('/home') redireciona o usuário para a página /home.
Se as credenciais estiverem incorretas, setError exibe uma mensagem de erro.
Componentes Genéricos:

Form: Componente de formulário que organiza os elementos.
Input: Componente de entrada para o nome de usuário e senha.
Button: Botão que submete o formulário.


## Explicação do HomePage
Função onLogout:
onLogout é chamada quando o usuário clica no botão "Logout". Ela redefine isAuthenticated como false, o que efetivamente bloqueia o acesso a /home e redireciona para a página de login.
Botão Logout:
Button é um componente genérico reutilizável.
O onClick chama onLogout para deslogar o usuário.


## Componentes (Button, Form, Input)
Esses componentes estão localizados em src/components/, e são genéricos para uso em diferentes partes do projeto.

Button: Exibe um botão e aceita children como o texto do botão e onClick para definir uma função ao ser clicado.
Form: Componente que organiza os campos de formulário, configurado para aceitar onSubmit.
Input: Componente de entrada para qualquer campo de texto, que aceita type, placeholder, value e onChange.


## Explicação do Componente Button
Props children e onClick:
children: Define o texto do botão, que pode ser "Login" ou "Logout", dependendo de onde ele é usado.
onClick: Define a função a ser chamada quando o botão é clicado. No caso do botão de Login, ele é acionado pelo evento onSubmit do formulário, então onClick não é necessário. No caso do Logout, onClick chama onLogout.
Resumo
Submissão do Formulário:

O formulário chama handleSubmit quando o botão Login é clicado.
Se o login for bem-sucedido, onLogin e navigate('/home') redirecionam para a página inicial.
Logout:

O botão de Logout na HomePage chama onLogout, que redefine isAuthenticated como false, "deslogando" o usuário.
Componente Button:

É um botão estilizado que usa onClick quando necessário. Para o botão Login, o formulário é submetido por onSubmit. Para o botão Logout, o onClick executa o logout.