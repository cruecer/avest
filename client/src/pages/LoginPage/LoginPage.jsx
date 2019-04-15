import React, {Component} from 'react';
import { classNames } from '../../helper/style';
import { NavLink } from 'react-router-dom';
import { Button } from 'antd';
import WrappedNormalLoginForm from '../../components/loginForm';

const cn = classNames(require('./index.scss'));

class LoginPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className={cn('loginPage')}>
        <div className={cn('btns')}>
          <NavLink to='/'>
            <Button type="primary">LogIn</Button>
          </NavLink>
          <NavLink to='/register'>
            <Button type="dashed">Register</Button>
          </NavLink>
        </div>
        <WrappedNormalLoginForm />
      </div>
    )
  }
}

export default LoginPage;