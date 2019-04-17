import React, {Component} from 'react';
import { connect } from 'react-redux';
import { classNames } from '../../helper/style';
import { loadRates, addNumber, delNumber, clearNumber, addDot, calculateResult } from  '../../actions';
import CurTable from '../../components/curTable';
import Calculator from '../../components/Calculator';
import Results from '../../components/Results';

const cn = classNames(require('./index.scss'));

const mapStateToProps = (state) => {
  return {
    currencies: state.calculator.currencies,
    rates: state.calculator.rates,
    BYNvalue: state.calculator.BYNvalue,
  };
};

const mapDispatchToProps = {
  loadRates,
  addNumber,
  delNumber,
  clearNumber,
  addDot,
  calculateResult
};

class CalculatorPage extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.loadRates(this.props.currencies);
  }

  render() {
    const { rates, BYNvalue, addNumber, delNumber, clearNumber, addDot, calculateResult } = this.props;
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
            addDot={addDot}
            calculateResult={calculateResult}
            data={rates}/>
        </div>
        <div className={cn('result')}>
          <Results />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorPage);