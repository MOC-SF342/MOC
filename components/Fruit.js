import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';

const Fruit= ({}) => {
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
          <DataTable.Cell>มะละกอ</DataTable.Cell>
          <DataTable.Cell >25</DataTable.Cell>
          <DataTable.Cell >30</DataTable.Cell>
          <DataTable.Cell>บาท/กก.</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>2</DataTable.Cell>
          <DataTable.Cell>ส้มเขียวหวาน</DataTable.Cell>
          <DataTable.Cell >46.36</DataTable.Cell>
          <DataTable.Cell >51.36</DataTable.Cell>
          <DataTable.Cell>บาท/กก.</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>3</DataTable.Cell>
          <DataTable.Cell>แตงโม</DataTable.Cell>
          <DataTable.Cell >19.64</DataTable.Cell>
          <DataTable.Cell >22.64</DataTable.Cell>
          <DataTable.Cell>บาท/กก.</DataTable.Cell>
        </DataTable.Row>
        
        <DataTable.Row>
          <DataTable.Cell>4</DataTable.Cell>
          <DataTable.Cell>กล้วยน้ำว้า</DataTable.Cell>
          <DataTable.Cell >31.82</DataTable.Cell>
          <DataTable.Cell >41.82</DataTable.Cell>
          <DataTable.Cell>บาท/กก.</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>5</DataTable.Cell>
          <DataTable.Cell>ฝรั่งกิมจู</DataTable.Cell>
          <DataTable.Cell >30</DataTable.Cell>
          <DataTable.Cell >35</DataTable.Cell>
          <DataTable.Cell>บาท/กก.</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>6</DataTable.Cell>
          <DataTable.Cell>มะม่วงเขียวเสวย</DataTable.Cell>
          <DataTable.Cell >39.09</DataTable.Cell>
          <DataTable.Cell >44.09</DataTable.Cell>
          <DataTable.Cell>บาท/กก.</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>7</DataTable.Cell>
          <DataTable.Cell>ส้มโอ</DataTable.Cell>
          <DataTable.Cell >90</DataTable.Cell>
          <DataTable.Cell >100</DataTable.Cell>
          <DataTable.Cell>บาท/กก.</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>8</DataTable.Cell>
          <DataTable.Cell>เงาะโรงเรียน</DataTable.Cell>
          <DataTable.Cell >18.49</DataTable.Cell>
          <DataTable.Cell >21.51</DataTable.Cell>
          <DataTable.Cell>บาท/กก.</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>9</DataTable.Cell>
          <DataTable.Cell>มังคุด</DataTable.Cell>
          <DataTable.Cell >18.08</DataTable.Cell>
          <DataTable.Cell >21.44</DataTable.Cell>
          <DataTable.Cell>บาท/กก.</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>10</DataTable.Cell>
          <DataTable.Cell>สับปะรดศรีราชา</DataTable.Cell>
          <DataTable.Cell >23</DataTable.Cell>
          <DataTable.Cell >28</DataTable.Cell>
          <DataTable.Cell>บาท/กก.</DataTable.Cell>
        </DataTable.Row>

      </DataTable>
    </View>
  );
}

export default Fruit

const styles = StyleSheet.create({
  container: {

    
  },
});