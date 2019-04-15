import React, {Component} from 'react';
import { classNames } from '../../helper/style';

const cn = classNames(require('./index.scss'));

class LoginPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className={cn('loginPage')}>Login</div>
    )
  }
}

export default LoginPage;