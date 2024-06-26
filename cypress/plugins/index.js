const { addMochawesomePlugin } = require('cypress-mochawesome-reporter/plugin');
const { addVideoRecorderPlugin } = require('@cypress/video-recorder/plugin');

module.exports = (on, config) => {
  // Adiciona o plugin do Mochawesome para gerar relatórios
  addMochawesomePlugin(on);

  // Adiciona o plugin de gravação de vídeo
  addVideoRecorderPlugin(on, config);

  // Retorne a configuração do Cypress
  return config;
};