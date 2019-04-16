import React, {Component} from 'react';
import { connect } from 'react-redux';
import { classNames } from '../../helper/style';
import { NavLink } from 'react-router-dom';
import { Button } from 'antd';
import WrappedNormalLoginForm from '../../components/loginForm';
import { logIn } from '../../actions';

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
  logIn
};

class LoginPage extends Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate() {
    if(this.props.isAuthed) {
      this.props.history.push(`/calculator/${this.props.user.nickname}`);
    }
  }

  render() {
    const { logIn, isLoading, errorMsg } = this.props;
    return(
      <div className={cn('loginPage')}>
        <div className={cn('err')}>{errorMsg}</div>
        <div className={cn('btns')}>
          <NavLink to='/'>
            <Button type="primary">LogIn</Button>
          </NavLink>
          <NavLink to='/register'>
            <Button type="dashed">Register</Button>
          </NavLink>
        </div>
        <WrappedNormalLoginForm handler={logIn} isLoading={isLoading}/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);