import React, {Component} from 'react';
import { connect } from 'react-redux';
import { classNames } from '../../helper/style';
import { loadRates, addNumber, delNumber, clearNumber, addDot } from  '../../actions';
import CurTable from '../../components/curTable';
import Calculator from '../../components/Calculator';

const cn = classNames(require('./index.scss'));

const mapStateToProps = (state) => {
  return {
    currencies: state.calculator.currencies,
    rates: state.calculator.rates,
    BYNvalue: state.calculator.BYNvalue
  };
};

const mapDispatchToProps = {
  loadRates,
  addNumber,
  delNumber,
  clearNumber,
  addDot,
};

class CalculatorPage extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.loadRates(this.props.currencies);
  }

  render() {
    const { rates, BYNvalue, addNumber, delNumber, clearNumber, addDot } = this.props;
    return(
      <div className={cn('calculatorPage')}>
        <div className={cn('currencies')}>
          <CurTable data={rates} />
        </div>
        <div className={cn('calculator')}>
          <Calculator 
            BYNvalue={BYNvalue}
            addNumber={addNumber}
            delNumber={delNumber}
            clearNumber={clearNumber}
            addDot={addDot}/>
        </div>
        <div className={cn('result')}>res</div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorPage);