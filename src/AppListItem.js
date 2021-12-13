import React from 'react';
import { List } from 'antd';

const AppListItem = ({ data, onClick }) => {
  const { id, name, company } = data;

  return (
    <List.Item onClick={() => onClick(id)}>
      <List.Item.Meta
          title={`${name} - ${company}`}
        />
    </List.Item>
  );
}

export default React.memo(AppListItem);
