import React, {Component} from 'react';
import { connect } from 'react-redux';
import { classNames } from '../../helper/style';
import { NavLink } from 'react-router-dom';
import { Button } from 'antd';
import WrappedRegistrationForm from '../../components/registerForm';
import { register } from '../../actions';

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
  register
};
class RegisterPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    const { register, isLoading, errorMsg } = this.props;

    return(
      <div className={cn('registerPage')}>
      <div className={cn('err')}>{errorMsg}</div>
      <div className={cn('btns')}>
        <NavLink to='/'>
          <Button type="dashed">LogIn</Button>
        </NavLink>
        <NavLink to='/register'>
          <Button type="primary">Register</Button>
        </NavLink>
      </div>
      <WrappedRegistrationForm handler={register} isLoading={isLoading}/>
    </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);