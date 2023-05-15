function buscarEndereco() {
        var cep = document.getElementById('cep').value;
        
        // Fazer a requisição para a API ViaCEP
        fetch('https://viacep.com.br/ws/' + cep + '/json/')
          .then(response => response.json())
          .then(data => preencherEndereco(data))
          .catch(error => console.log(error));
      }
      
      function preencherEndereco(data) {
        document.getElementById('logradouro').value = data.logradouro;
        document.getElementById('bairro').value = data.bairro;
        document.getElementById('cidade').value = data.localidade;
        document.getElementById('estado').value = data.uf;
      }
      
var tamanho = document.createElement('div');
tamanho.id = 'tamanho';
tamanho.className = 'tamanho_bar';

var frase_tamanho = document.createElement('span');
frase.className = 'frase_tamanho';
frase.textContent = 'Tamanho';

        var adicionais = document.createElement('div');
        adicionais.id = 'adicionais';
        adicionais.className = 'adicionais_bar';

        var frase_adicionais = document.createElement('span');
        frase_adicionais.className = 'frase_adicionais';
        frase_adicionais.textContent = 'adicionais';

                var bebidas = document.createElement('div');
                bebidas.id = 'bebidas';
                bebidas.className = 'bebidas_bar';

                var frase_bebidas = document.createElement('span');
                frase_bebidas.className = 'frase_bebidas';
                frase_bebidas.textContent = 'bebidas';

                            var endereco = document.createElement('div');
                            endereco.id = 'endereco';
                            endereco.className = 'endereco_bar';

                            var frase_endereco = document.createElement('span');
                            frase_endereco.className = 'frase_endereco';
                            frase_endereco.textContent = 'endereco';


barra.style.border = '2px solid #000000'; 

barra.appendChild(frase);


var container = document.getElementById('container');
container.appendChild(barra);


            const enviarBtn = document.getElementById("enviar");
            enviarBtn.addEventListener("mouseover", function() {
            enviarBtn.classList.add("hover");
            });
            enviarBtn.addEventListener("mouseout", function() {
            enviarBtn.classList.remove("hover");
            });
