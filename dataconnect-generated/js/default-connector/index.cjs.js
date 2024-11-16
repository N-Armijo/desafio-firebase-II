const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'desafio_firebase2',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

