// Lógica do formulário de contato
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário
  
    // Simula o envio dos dados para um servidor (você pode implementar a lógica real aqui)
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;
  
    // Exibe uma mensagem de sucesso
    alert('Obrigado, ' + nome + '! Sua mensagem foi enviada com sucesso.');
  
    // Limpa os campos do formulário
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mensagem').value = '';
  });
  