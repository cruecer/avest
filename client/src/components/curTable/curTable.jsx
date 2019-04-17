import React from 'react';
import { Table } from 'antd';

const curTable = (props) => {
  const { data } = props;
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
    title: 'Rate date',
    dataIndex: 'Date',
    key: 'Date',
    render: date => {
      return new Date(date).toLocaleDateString();
    },
  },{
    title: 'Currency ID',
    dataIndex: 'Cur_ID',
    key: 'Cur_ID',
  }];
  return <Table rowKey='Cur_ID' columns={columns} dataSource={data} pagination={false} size='middle'/>
}

export default curTable;