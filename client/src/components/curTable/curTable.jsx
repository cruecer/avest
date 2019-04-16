import React, { Component } from 'react';
import { Table } from 'antd';


class curTable extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const { data } = this.props
    const columns = [{
      title: 'Currency',
      dataIndex: 'Cur_Abbreviation',
      key: 'Cur_Abbreviation',
    },{
      title: 'Currency scale',
      dataIndex: 'Cur_Scale',
      key: 'Cur_Scale',
    },{
      title: 'Currency rate',
      dataIndex: 'Cur_OfficialRate',
      key: 'Cur_OfficialRate',
    },{
      title: 'Currency ID',
      dataIndex: 'Cur_ID',
      key: 'Cur_ID',
    }];

    return <Table rowKey='Cur_ID' columns={columns} dataSource={data} pagination={false} size='middle'/>
  }
}

export default curTable;