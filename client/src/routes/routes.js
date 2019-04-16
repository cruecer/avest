import { LoginPage, NotFoundPage, RegisterPage, CalculatorPage } from '../pages';

const routes = [
  {
    path: '/',
    exact: true,
    component: LoginPage
  },{
    path: '/register',
    component: RegisterPage
  },{
    path: '/calculator/:user',
    component: CalculatorPage
  },{ 
    path: '*',
    component: NotFoundPage
  }
]

export default routes;