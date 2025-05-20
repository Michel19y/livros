import { registerRootComponent } from 'expo';
import { AppRegistry } from 'react-native';
import App from './App';

// Mensagem personalizada ao iniciar o app
console.log('🚀 Aplicação iniciada com sucesso! Bem-vindo ao meu app.');

// Registra o componente principal
registerRootComponent(App);

// Alternativa para garantir o registro no ambiente nativo
AppRegistry.registerComponent('main', () => App);
