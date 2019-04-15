import React, {Component} from 'react';
import { classNames } from '../../helper/style';
import { NavLink } from 'react-router-dom';
import { Button } from 'antd';

const cn = classNames(require('./index.scss'));

class RegisterPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className={cn('registerPage')}>
      <div className={cn('btns')}>
        <NavLink to='/'>
          <Button type="dashed">LogIn</Button>
        </NavLink>
        <NavLink to='/register'>
          <Button type="primary">Register</Button>
        </NavLink>
      </div>
    </div>
    )
  }
}

export default RegisterPage;