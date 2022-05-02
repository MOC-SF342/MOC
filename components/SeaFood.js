import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';

const Seafood= ({}) => {
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
          <DataTable.Cell>กุ้งขาว</DataTable.Cell>
          <DataTable.Cell >260.97</DataTable.Cell>
          <DataTable.Cell >270.97</DataTable.Cell>
          <DataTable.Cell>บาท/กก.</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>2</DataTable.Cell>
          <DataTable.Cell>ปลาหมึก</DataTable.Cell>
          <DataTable.Cell >226</DataTable.Cell>
          <DataTable.Cell >266</DataTable.Cell>
          <DataTable.Cell>บาท/กก.</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>3</DataTable.Cell>
          <DataTable.Cell>หอยแครง</DataTable.Cell>
          <DataTable.Cell >130</DataTable.Cell>
          <DataTable.Cell >200</DataTable.Cell>
          <DataTable.Cell>บาท/กก.</DataTable.Cell>
        </DataTable.Row>
        
        <DataTable.Row>
          <DataTable.Cell>4</DataTable.Cell>
          <DataTable.Cell>ปลาดุก</DataTable.Cell>
          <DataTable.Cell >65.81</DataTable.Cell>
          <DataTable.Cell >90</DataTable.Cell>
          <DataTable.Cell>บาท/กก.</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>5</DataTable.Cell>
          <DataTable.Cell>ปลาทับทิม</DataTable.Cell>
          <DataTable.Cell >79.84</DataTable.Cell>
          <DataTable.Cell >99.35</DataTable.Cell>
          <DataTable.Cell>บาท/กก.</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>6</DataTable.Cell>
          <DataTable.Cell>กุ้งก้ามกราม</DataTable.Cell>
          <DataTable.Cell >450</DataTable.Cell>
          <DataTable.Cell >700</DataTable.Cell>
          <DataTable.Cell>บาท/กก.</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>7</DataTable.Cell>
          <DataTable.Cell>ปลาทูสด</DataTable.Cell>
          <DataTable.Cell >89.21</DataTable.Cell>
          <DataTable.Cell >100</DataTable.Cell>
          <DataTable.Cell>บาท/กก.</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>8</DataTable.Cell>
          <DataTable.Cell>ปลาช่อน</DataTable.Cell>
          <DataTable.Cell >150</DataTable.Cell>
          <DataTable.Cell >170</DataTable.Cell>
          <DataTable.Cell>บาท/กก.</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>9</DataTable.Cell>
          <DataTable.Cell>หอยลาย</DataTable.Cell>
          <DataTable.Cell >51.38</DataTable.Cell>
          <DataTable.Cell >61.51</DataTable.Cell>
          <DataTable.Cell>บาท/กก.</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>10</DataTable.Cell>
          <DataTable.Cell>ปลาสวาย</DataTable.Cell>
          <DataTable.Cell >49.8</DataTable.Cell>
          <DataTable.Cell >66.12</DataTable.Cell>
          <DataTable.Cell>บาท/กก.</DataTable.Cell>
        </DataTable.Row>

      </DataTable>
    </View>
  );
}

export default Seafood

const styles = StyleSheet.create({
  container: {

    
  },
});