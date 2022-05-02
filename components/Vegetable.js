import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';

const Vegetable= ({}) => {
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
          <DataTable.Cell>ผักคะน้า</DataTable.Cell>
          <DataTable.Cell >25.67</DataTable.Cell>
          <DataTable.Cell >30.67</DataTable.Cell>
          <DataTable.Cell>บาท/กก.</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>2</DataTable.Cell>
          <DataTable.Cell>ผักบุ้งจีน</DataTable.Cell>
          <DataTable.Cell >22.83</DataTable.Cell>
          <DataTable.Cell >27.83</DataTable.Cell>
          <DataTable.Cell>บาท/กก.</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>3</DataTable.Cell>
          <DataTable.Cell>ผักกวางตุ้ง</DataTable.Cell>
          <DataTable.Cell >18</DataTable.Cell>
          <DataTable.Cell >23</DataTable.Cell>
          <DataTable.Cell>บาท/กก.</DataTable.Cell>
        </DataTable.Row>
        
        <DataTable.Row>
          <DataTable.Cell>4</DataTable.Cell>
          <DataTable.Cell>ผักกาดหอม</DataTable.Cell>
          <DataTable.Cell >30.17</DataTable.Cell>
          <DataTable.Cell >35.17</DataTable.Cell>
          <DataTable.Cell>บาท/กก.</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>5</DataTable.Cell>
          <DataTable.Cell>กะหล่ำปลี</DataTable.Cell>
          <DataTable.Cell >20</DataTable.Cell>
          <DataTable.Cell >25</DataTable.Cell>
          <DataTable.Cell>บาท/กก.</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>6</DataTable.Cell>
          <DataTable.Cell>มะระจีน</DataTable.Cell>
          <DataTable.Cell >27</DataTable.Cell>
          <DataTable.Cell >32</DataTable.Cell>
          <DataTable.Cell>บาท/กก.</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>7</DataTable.Cell>
          <DataTable.Cell>มะเขือเทศ</DataTable.Cell>
          <DataTable.Cell >21</DataTable.Cell>
          <DataTable.Cell >30.5</DataTable.Cell>
          <DataTable.Cell>บาท/กก.</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>8</DataTable.Cell>
          <DataTable.Cell>แตงกวา</DataTable.Cell>
          <DataTable.Cell >19.67</DataTable.Cell>
          <DataTable.Cell >24.67</DataTable.Cell>
          <DataTable.Cell>บาท/กก.</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>9</DataTable.Cell>
          <DataTable.Cell>หน่อไม้ฝรั่ง</DataTable.Cell>
          <DataTable.Cell >138.67</DataTable.Cell>
          <DataTable.Cell >168.67</DataTable.Cell>
          <DataTable.Cell>บาท/กก.</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>10</DataTable.Cell>
          <DataTable.Cell>มะนาว</DataTable.Cell>
          <DataTable.Cell >6.12</DataTable.Cell>
          <DataTable.Cell >6.62</DataTable.Cell>
          <DataTable.Cell>บาท/กก.</DataTable.Cell>
        </DataTable.Row>

      </DataTable>
    </View>
  );
}

export default Vegetable

const styles = StyleSheet.create({
  container: {

    
  },
});