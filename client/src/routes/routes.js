import { LoginPage, NotFoundPage, RegisterPage, CalculatorPage } from '../Pages';

const routes = [
  {
    path: '/',
    exact: true,
    component: LoginPage
  },{
    path: '/register',
    component: RegisterPage
  },{
    path: '/calculator',
    component: CalculatorPage
  },{ 
    path: '*',
    component: NotFoundPage
  }
]

export default routes;