import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View , Image , TextInput , Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient
    style={styles.container}
    colors={["#FBCB00" , "#BF9A00"]}
    start={{x:0, y:0.5}}
    end={{x:0,y:1}}
     >
      <View style={styles.view1}>Login</View>
      <View style={styles.view2}>
          <View style={styles.FormInput}>
          <Image 
            style={styles.icon}
            source={require('./assets/avatar_user.png')}
          />
            <TextInput style={styles.input} placeholder="Name">
            </TextInput> 
          </View>
          <View style={styles.FormInput}>
            <Image 
              style={styles.icon}
              source={require('./assets/lock.png')}
            />
            <TextInput style={styles.input} placeholder="Password"></TextInput> 
            <Image 
              style={styles.icon}
              source={require('./assets/eye.png')}
            />
          </View>
      </View>
      <View style={styles.view3}>
          <button style={{backgroundColor:"#000000" , height:"60px",}}> <Text style={{color:"#FFFFFF" , fontSize:"30px" , textTransform:"uppercase" , lineHeight:"50px", height:"50px"}}>Login</Text></button>    
      </View>
      <View style={styles.view4}>
          <Text style={{fontSize:"23px", fontWeight:'bold'}}>Forgot your password?</Text>
      </View>
      </LinearGradient>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  view1: {
    flex:"3",
    width:"100%",
    fontSize:"30px",
    fontWeight:"bold",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
  },
  view2:{
    flex:"3",
    width:"350px",
    height:"200px",
    display:"flex",
    flexDirection:"column",
  },
  input: {
    fontSize:"20px",
    padding:"20px",
    fontWeight:"normal",
    width:"100%",
  },
  FormInput:{
    fontWeight:'bold',
    border:"1px solid #F2F2F2",
    margin:"15px",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around",
    backgroundColor : "#d9c350",
  },
  view3:{
    flex:"3",
    width:"350px",
    marginTop:"100px",
    height:"100px",
    border:"none",
  },
  icon:{
    height:"40px",
    width:"40px",
    margin:"10px",
  },
  view4:{
    flex:"4",
  }
});