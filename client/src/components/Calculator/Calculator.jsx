import React, { Component } from 'react';
import { classNames } from '../../helper/style';
import { Button, Icon } from 'antd';
import '../../../node_modules/antd/dist/antd.min.css';

const cn = classNames(require('./index.scss'));

class Calculator extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const params = [
      {class: 'one', data: 1},
      {class: 'two', data: 2},
      {class: 'three', data: 3},
      {class: 'four', data: 4},
      {class: 'five', data: 5},
      {class: 'six', data: 6},
      {class: 'seven', data: 7},
      {class: 'eight', data: 8},
      {class: 'nine', data: 9},
      {class: 'zero', data: 0},
    ]
    return(
      <div className={cn('calculator')}>
        <div className={cn('number')}>
          
        </div>
        {params.map((item, i) => {
          return (
            <div key={i} className={cn(`${item.class}`)}>
              <Button size='large' type='primary' onClick={() => {}}>{item.data}</Button>
            </div>
          )
        })}
        <div className={cn('back')}>
          <Button size='large' type='primary'><Icon type='left' /></Button>
        </div>
        <div className={cn('enter')}>
          <Button size='large' type='primary'><Icon type='enter' /></Button>
        </div>
        <div className={cn('clear')}>
          <Button size='large' type='primary'><Icon type='delete' /></Button>
        </div>
        <div className={cn('dot')}>
        <Button size='large' type='primary'>.</Button>
        </div>
      </div>
    )
  }

}

export default Calculator;