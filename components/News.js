import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, Linking } from 'react-native';
import Header from './Head';
import { NavigationContainer, CommonActions } from '@react-navigation/native';

const News = ({ navigation }) => {
  const newdata = [{
    img: 'https://www.moc.go.th/cms/s1/u127/%E0%B8%A1.%E0%B8%84.%2065/%E0%B8%A1%E0%B8%B5.%E0%B8%84.%2065/21_1_.jpg',
    linkwebsite: 'https://www.moc.go.th/th/content/category/detail/id/4/iid/4493',
    description: 'นายสินิตย์ เลิศไกร รัฐมนตรีช่วยว่าการกระทรวงพาณิชย์ เป็นประธานในพิธีลงนามบันทึกข้อตกลงความร่วมมือ (MOU) ด้านทรัพย์สินทางปัญญา ระหว่างกรมทรัพย์สินทางปัญญากับจุฬาลงกรณ์มหาวิทยาลัย ในวันพฤหัสบดีที่ 21 เมษายน 2565 ณ ห้องบุรฉัตรไชยากร กระทรวงพาณิชย์',
  },
  {
    img: 'https://www.moc.go.th/cms/s1/u127/%E0%B8%A1.%E0%B8%84.%2065/%E0%B8%A1%E0%B8%B5.%E0%B8%84.%2065/20_1_.jpg',
    linkwebsite: 'https://www.moc.go.th/th/content/category/detail/id/4/iid/4492',
    description: 'นายจุรินทร์ ลักษณวิศิษฏ์ รองนายกรัฐมนตรีและรัฐมนตรีว่าการกระทรวงพาณิชย์ เป็นเจ้าภาพเปิดการประชุมคณะกรรมการร่วมทางการค้า (Joint Trade Committee: JTC) ไทย-เวียดนาม ครั้งที่ 4 กับนายเหวียน ห่ง เซียน (H.E. Mr. Nguyen Hong Dien) รัฐมนตรีว่าการกระทรวงอุตสาหกรรมและการค้า ของประเทศเวียดนาม เมื่อวันพุธที่ 20 เมษายน 2565 ณ โรงแรมอนันตรา สยาม กรุงเทพฯ',
  },
  {
    img: 'https://www.moc.go.th/cms/s1/u127/%E0%B8%A1.%E0%B8%84.%2065/%E0%B8%A1%E0%B8%B5.%E0%B8%84.%2065/11_1_.jpg',
    linkwebsite: 'https://www.moc.go.th/th/content/category/detail/id/4/iid/4475/detail/id/4/iid/4493',
    description: 'นายจุรินทร์ ลักษณวิศิษฏ์ รองนายกรัฐมนตรีและรัฐมนตรีว่าการกระทรวงพาณิชย์ เปิดงานและร่วมเป็นสักขีพยานในพิธีลงนามบันทึกความเข้าใจ รูปแบบออนไลน์ระหว่างกระทรวงพาณิชย์และกระทรวงอุตสาหกรรมและพาณิชย์ รัฐเตลังคานา สาธารณรัฐอินเดีย เมื่อวันจันทร์ที่ 11 เมษายน 2565 ณ ห้องบุรฉัตรไชยากร ชั้น 4 ตึกสำนักงานปลัดกระทรวงพาณิชย์',
  },
  {
    img: 'https://www.moc.go.th/cms/s1/u127/%E0%B8%A1.%E0%B8%84.%2065/%E0%B8%A1%E0%B8%B5.%E0%B8%84.%2065/92_1_.jpg',
    linkwebsite: 'https://www.moc.go.th/th/content/category/detail/id/4/iid/4474',
    description: 'นายจุรินทร์ ลักษณวิศิษฏ์ รองนายกรัฐมนตรีและรัฐมนตรีว่าการกระทรวงพาณิชย์ ตรวจเยี่ยมและติดตามสถานการณ์การค้าชายแดน เมื่อวันอาทิตย์ที่ 10 เมษายน 2565 ณ ด่านพรมแดนเบตง อำเภอเบตง จังหวัดยะลา',
  },
  {
    img: 'https://www.moc.go.th/cms/s1/u120/29161.jpg',
    linkwebsite: 'https://www.moc.go.th/th/gallery/category/detail/id/5/iid/205',
    description: 'พิธีเปิดเพจ “สุดยอดผลไม้ภาคตะวันออก” ภายใต้โครงการยกระดับตลาดผลไม้ภาคตะวันออกให้เป็นศูนย์ผลไม้เมืองร้อนแห่งเอเชีย',
  },
  {
    img: 'https://www.moc.go.th/th/file/get/type/thumbnail/file/20220401ee282723d018154a11f5df249298c45f124735.jpg',
    linkwebsite: 'https://www.moc.go.th/th/gallery/category/detail/id/5/iid/204',
    description: 'นายวันชัย วราวิทย์ รองปลัดกระทรวงพาณิชย์ เป็นผู้แทนกระทรวงพาณิชย์ ได้เข้าร่วมบันทึกเทปรายการ เคลียร์ คัด ชัดเจน เนื่องในวันข้าราชการพลเรือน (1 เมษายน)',
  },
  {
    img: 'https://www.moc.go.th/th/file/get/type/thumbnail/file/2022032940d8c3c471c16329f11d41980fa6b10c133911.jpg',
    linkwebsite: 'https://www.moc.go.th/th/gallery/category/detail/id/5/iid/203',
    description: 'ส่งแล้วตู้แรก "ไก่ไปซาอุ" จุรินทร์ สร้างประวัติศาสตร์ในรอบ 18 ปี "บุกตลาดอาหารซาอุ" ตั้งเป้าไทยส่งออกไก่ 980,000 ตันปีนี้และเพิ่มขึ้นเรื่อยๆ',
  },
  ]
  return (
    <View style={styles.container}>
      <ScrollView style={styles.layoutScrollView}>
        {newdata.map((data, idx) => (
          <TouchableOpacity style={styles.layoutnew} key={idx} onPress={() => Linking.openURL(data.linkwebsite)}>
            <Image style={styles.newlink} source={{ uri: data.img }} />
            <Text>{data.description.length > 140? data.description.slice(0,140)+ " ..." : data.description}</Text>
          </TouchableOpacity>
        ))
        }


      </ScrollView>

      <View style={styles.navigaterbar}>
        <TouchableOpacity style={styles.navigatericonbox} onPress={() => navigation.navigate('News')}>
          <Image
            source={require('../assets/icons/news.png')}
            style={styles.navigatericon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navigatericonbox} onPress={() => navigation.navigate('Home')}>
          <Image
            source={require('../assets/icons/home.png')}
            style={styles.navigatericon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navigatericonbox} onPress={() => navigation.navigate('Graph')}>
          <Image
            source={require('../assets/icons/graph.png')}
            style={styles.navigatericon}
          />
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  topic: {
    color: 'black',
    fontSize: 40,
    paddingLeft: 20,
    paddingTop: 10,
    fontWeight: "bold",
  },
  layoutnew: {
    width: '85%',
    height: 270,
    borderRadius: 25,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginVertical: 15,
    backgroundColor: 'rgba(0,0,0,0.085)',
  },
  newlink: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  layoutScrollView: {

  },
  navigaterbar: {
    backgroundColor: '#1E3774',
    borderRadius: 15,
    marginHorizontal: 10,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  navigatericonbox: {
    padding: 5,
    borderRadius: 10,
    marginVertical: 8,
    backgroundColor: 'white',
  },
  navigatericon: {
    width: 30,
    height: 30,
  },

})

export default News;