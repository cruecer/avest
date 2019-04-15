import React, {Component} from 'react';
import { connect } from 'react-redux';
import { classNames } from '../../helper/style';
import { NavLink } from 'react-router-dom';
import { Button } from 'antd';
import WrappedNormalLoginForm from '../../components/loginForm';
import { toggleIsLoading, logIn } from '../../actions';

const cn = classNames(require('./index.scss'));

const mapStateToProps = (state) => {
  return {
    isAuthed: state.auth.isAuthed,
    user: state.auth.user,
    isLoading: state.auth.isLoading,
    errorMsg: state.auth.errorMsg
  };
};

const mapDispatchToProps = {
  toggleIsLoading,
  logIn
};

class LoginPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { logIn } = this.props;
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
        <WrappedNormalLoginForm handler={logIn}/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);