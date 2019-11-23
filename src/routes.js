import Cadastro from './components/cadastro/Cadastro.vue';
import Home from './components/home/Home.vue';

export const routes = [
    { path: '', componente: Home },
    { path: '/cadastro', componente: Cadastro }
]