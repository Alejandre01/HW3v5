import { View, Text, Pressable, Image, ImageBackground } from 'react-native';
import styles from './styles';

export default function HomeSceen({ navigation }) {
  return (
    <View style={styles.container}>
      
      <ImageBackground 
          style={styles.image}
          source={require('../../assets/images/jule.png')} /> 
        
        <View>
    
           <Pressable onPress={() => navigation.navigate('Profile')}>
            <Image
            style={styles.logo}
            source={require('../../assets/images/info.png')} />

            </Pressable>
        </View>
    
    </View>
  );
}