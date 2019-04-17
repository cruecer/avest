import React, { Component } from 'react';
import { connect } from 'react-redux';
import { classNames } from '../../helper/style';
import { Table, Button } from 'antd';
import { reloadRates } from '../../actions';

const cn = classNames(require('./index.scss'));

const mapStateToProps = (state) => {
  return {
    data: state.result.data,
    currencies: state.calculator.currencies,
  };
};

const mapDispatchToProps = {
  reloadRates,
};

class Results extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    };
    this.updateDate = this.updateDate.bind(this);
    this.interval = null;
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidMount() {
    this.interval = setInterval(this.updateDate, 1000);
  }

  updateDate() {
    this.setState({
      date: new Date(),
    })
  }

  render() {
    const { reloadRates, currencies, data } = this.props;
    const { date } = this.state;
    const columns = [{
      title: 'Currency',
      dataIndex: 'Cur_Abbreviation',
      filters: [{
        text: 'BYN',
        value: 'BYN',
      },{
        text: 'USD',
        value: 'USD',
      },{
        text: 'EUR',
        value: 'EUR',
      },{
        text: 'RUB',
        value: 'RUB',
      }],
      onFilter: (value, record) => record.Cur_Abbreviation.indexOf(value) === 0,
      sorter: (a, b) => b.Cur_Abbreviation[0].charCodeAt() - a.Cur_Abbreviation[0].charCodeAt(),
      sortDirections: ['descend'],
    },{
      title: 'Sum',
      dataIndex: 'Cur_Sum',
      sorter: (a, b) => a.Cur_Sum - b.Cur_Sum,
    },{
      title: 'Currency scale',
      dataIndex: 'Cur_Scale',
      sorter: (a, b) => a.Cur_Scale - b.Cur_Scale,
    },{
      title: 'Currency rate',
      dataIndex: 'Cur_OfficialRate',
      sorter: (a, b) => a.Cur_OfficialRate - b.Cur_OfficialRate,
    }];

    return(
      <React.Fragment>
        <div className={cn('head')}>
          <Button type='primary' size='large' onClick={() => reloadRates(currencies)}>Reload rates</Button>
          <span className={cn('time')}>{`${date.toLocaleDateString()} - ${date.toLocaleTimeString()}`}</span>
        </div>
        <Table rowKey='Cur_Abbreviation' columns={columns} dataSource={data} pagination={false} />
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);
