# IPAM TESTE
Criar um SPA com React + Redux utilizando API do IBGE

Prazo: Entregar até 23h59min do dia 06/01/2023

Desafio:

API: https://servicodados.ibge.gov.br/api/docs/localidades

Criar um select para selecionar um estado. Utilizar a api: https://servicodados.ibge.gov.br/api/v1/localidades/etasdos;

Criar um select para selecionar um município. Utilizar a api: https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/municipios. Só deve mostrar os municípios do estado que foi selecionado, ou seja, o select de municípios é dependente do select de estados;

Ao selecionar um município mostrar as informações de microrregião, mesorregião, UF e região do município. Utilizar a api: https://servicodados.ibge.gov.br/api/v1/localidades/municipios/{municipio}/distritos. Para mostrar essas informações na página, use sua criatividade.

Obrigatório usar os três conceitos centrais do redux: store, reducers e actions.

## Observações:

- Para o funcionamento é necessário rodar o npm install para incluir o node_modules (foi retirado pelo autor ao subir o repositório por ser muito pesado);
- Para a visualização foi incluído um mapa com pigeon-maps;
- O marcador aponta o município selecionado.
