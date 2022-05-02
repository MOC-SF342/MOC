import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';

const Rice= ({}) => {
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
          <DataTable.Cell>ข้าวขาว</DataTable.Cell>
          <DataTable.Cell >14.21</DataTable.Cell>
          <DataTable.Cell >14.31</DataTable.Cell>
          <DataTable.Cell>บาท/กก.</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>2</DataTable.Cell>
          <DataTable.Cell>ปลายข้าวขาว</DataTable.Cell>
          <DataTable.Cell >11.77</DataTable.Cell>
          <DataTable.Cell >11.88</DataTable.Cell>
          <DataTable.Cell>บาท/กก.</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>3</DataTable.Cell>
          <DataTable.Cell>ข้าวสารเหนียว</DataTable.Cell>
          <DataTable.Cell >21.11</DataTable.Cell>
          <DataTable.Cell >21.31</DataTable.Cell>
          <DataTable.Cell>บาท/กก.</DataTable.Cell>
        </DataTable.Row>
        
        <DataTable.Row>
          <DataTable.Cell>4</DataTable.Cell>
          <DataTable.Cell>ข้าวนึ่ง</DataTable.Cell>
          <DataTable.Cell >12.59</DataTable.Cell>
          <DataTable.Cell >12.69</DataTable.Cell>
          <DataTable.Cell>บาท/กก.</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>5</DataTable.Cell>
          <DataTable.Cell>ข้าวหอมมะลิ</DataTable.Cell>
          <DataTable.Cell >25.60</DataTable.Cell>
          <DataTable.Cell >25.70</DataTable.Cell>
          <DataTable.Cell>บาท/กก.</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>6</DataTable.Cell>
          <DataTable.Cell>ปลายข้าวหอมมะลิ</DataTable.Cell>
          <DataTable.Cell >12.58</DataTable.Cell>
          <DataTable.Cell >12.68</DataTable.Cell>
          <DataTable.Cell>บาท/กก.</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>7</DataTable.Cell>
          <DataTable.Cell>ข้าวหอมปทุม</DataTable.Cell>
          <DataTable.Cell >19.18</DataTable.Cell>
          <DataTable.Cell >19.28</DataTable.Cell>
          <DataTable.Cell>บาท/กก.</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>8</DataTable.Cell>
          <DataTable.Cell>รำข้าวขาว</DataTable.Cell>
          <DataTable.Cell >10.65</DataTable.Cell>
          <DataTable.Cell >10.75</DataTable.Cell>
          <DataTable.Cell>บาท/กก.</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>9</DataTable.Cell>
          <DataTable.Cell>แป้งข้าวเจ้าโม่น้ำ</DataTable.Cell>
          <DataTable.Cell >7.11</DataTable.Cell>
          <DataTable.Cell >7.21</DataTable.Cell>
          <DataTable.Cell>บาท/กก.</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>10</DataTable.Cell>
          <DataTable.Cell>ข้าวสารเจ้า</DataTable.Cell>
          <DataTable.Cell >29</DataTable.Cell>
          <DataTable.Cell >30</DataTable.Cell>
          <DataTable.Cell>บาท/กก.</DataTable.Cell>
        </DataTable.Row>

      </DataTable>
    </View>
  );
}

export default Rice

const styles = StyleSheet.create({
  container: {

    
  },
});