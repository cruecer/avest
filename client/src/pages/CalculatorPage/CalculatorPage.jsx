import React, {Component} from 'react';
import { connect } from 'react-redux';
import { classNames } from '../../helper/style';
import { loadRates } from  '../../actions';
import CurTable from '../../components/curTable';
import Calculator from '../../components/Calculator';

const cn = classNames(require('./index.scss'));

const mapStateToProps = (state) => {
  return {
    currencies: state.calculator.currencies,
    rates: state.calculator.rates
  };
};

const mapDispatchToProps = {
  loadRates
};

class CalculatorPage extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.loadRates(this.props.currencies);
  }

  render() {
    const { rates } = this.props;
    return(
      <div className={cn('calculatorPage')}>
        <div className={cn('currencies')}>
          <CurTable data={rates} />
        </div>
        <div className={cn('calculator')}>
          <Calculator />
        </div>
        <div className={cn('result')}>res</div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorPage);