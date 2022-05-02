import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';

const Meat= ({}) => {
  return (
    <View style={styles.container}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>ID</DataTable.Title>
          <DataTable.Title>NAME</DataTable.Title>
          <DataTable.Title >MIN</DataTable.Title>
          <DataTable.Title >MAX</DataTable.Title>
          <DataTable.Title>UNIT</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>1</DataTable.Cell>
          <DataTable.Cell>หมู</DataTable.Cell>
          <DataTable.Cell >186.74</DataTable.Cell>
          <DataTable.Cell >198.7</DataTable.Cell>
          <DataTable.Cell>บาท/กก.</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>2</DataTable.Cell>
          <DataTable.Cell>ไก่</DataTable.Cell>
          <DataTable.Cell >65</DataTable.Cell>
          <DataTable.Cell >70</DataTable.Cell>
          <DataTable.Cell>บาท/กก.</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>3</DataTable.Cell>
          <DataTable.Cell>ไข่เป็ด</DataTable.Cell>
          <DataTable.Cell >4.72</DataTable.Cell>
          <DataTable.Cell >4.82</DataTable.Cell>
          <DataTable.Cell>บาท/กก.</DataTable.Cell>
        </DataTable.Row>
        
        <DataTable.Row>
          <DataTable.Cell>4</DataTable.Cell>
          <DataTable.Cell>ไข่ไก่</DataTable.Cell>
          <DataTable.Cell >4.42</DataTable.Cell>
          <DataTable.Cell >4.62</DataTable.Cell>
          <DataTable.Cell>บาท/กก.</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>5</DataTable.Cell>
          <DataTable.Cell>เนื้อโค</DataTable.Cell>
          <DataTable.Cell >250</DataTable.Cell>
          <DataTable.Cell >260</DataTable.Cell>
          <DataTable.Cell>บาท/กก.</DataTable.Cell>
        </DataTable.Row>

      </DataTable>
    </View>
  );
}

export default Meat

const styles = StyleSheet.create({
  container: {

    
  },
});