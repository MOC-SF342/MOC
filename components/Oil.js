import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';

const Oil= ({}) => {
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
          <DataTable.Cell>น้ำมันถัวลิสง</DataTable.Cell>
          <DataTable.Cell >145</DataTable.Cell>
          <DataTable.Cell >150</DataTable.Cell>
          <DataTable.Cell>บาท/กก.</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>2</DataTable.Cell>
          <DataTable.Cell>น้ำมันถั่วเหลือง</DataTable.Cell>
          <DataTable.Cell >58.48</DataTable.Cell>
          <DataTable.Cell >64.95</DataTable.Cell>
          <DataTable.Cell>บาท/กก.</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>3</DataTable.Cell>
          <DataTable.Cell>น้ำมันรำข้าว</DataTable.Cell>
          <DataTable.Cell >59.91</DataTable.Cell>
          <DataTable.Cell >65.37</DataTable.Cell>
          <DataTable.Cell>บาท/กก.</DataTable.Cell>
        </DataTable.Row>
        
        <DataTable.Row>
          <DataTable.Cell>4</DataTable.Cell>
          <DataTable.Cell>น้ำมันปาลม์</DataTable.Cell>
          <DataTable.Cell >59.91</DataTable.Cell>
          <DataTable.Cell >65.37</DataTable.Cell>
          <DataTable.Cell>บาท/กก.</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>5</DataTable.Cell>
          <DataTable.Cell>น้ำมันทานตะวัน</DataTable.Cell>
          <DataTable.Cell >80</DataTable.Cell>
          <DataTable.Cell >85</DataTable.Cell>
          <DataTable.Cell>บาท/กก.</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>6</DataTable.Cell>
          <DataTable.Cell>น้ำมันมะพร้าว</DataTable.Cell>
          <DataTable.Cell >202</DataTable.Cell>
          <DataTable.Cell >222.5</DataTable.Cell>
          <DataTable.Cell>บาท/กก.</DataTable.Cell>
        </DataTable.Row>

      </DataTable>
    </View>
  );
}

export default Oil

const styles = StyleSheet.create({
  container: {

    
  },
});