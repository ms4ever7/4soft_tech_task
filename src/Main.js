import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData, getItemById } from './store/main/main.action';
import { List, Card } from 'antd';
import AppListItem from './AppListItem';

const Main = (props) => {
  const { data, fetchData, getItemById, selectedItem } = props;
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      {data.length && 
        <List
          header={<div>Apps list</div>}
          bordered
        
          dataSource={data}
          renderItem={item => (
            <>
              {/* TODO: check maybe its not needed here to use applistotem as separate component 
              * ALSO, move getItemId to diffrent place, its not the best way to call it in renderItem function :)
              */}
              <AppListItem data={item} onClick={(id) => getItemById(id)} />

              {/* TODO: movethis to different compoennt (maybe even some modal or another route) */}
              {selectedItem && selectedItem.id === item.id && <Card>
                  <h1>{item.name}</h1>
                  <p>Company: {item.company}</p>
                </Card>}
            </>
          )}
      />}
    </>
  );
}

const mapDispatchToProps = {
  fetchData,
  getItemById
};

const mapStateToProps = ({ main }) => ({
  data: main.data,
  selectedItem: main.selectedItem
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
