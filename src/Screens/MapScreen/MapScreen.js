import { View, Text } from 'react-native';
import { styles } from './MapScreen.styles';
import MapView, { Marker } from 'react-native-maps';

export const MapScreen = ({ route }) => {
  const location = route.params.location;

  return (
    <View style={styles.container}>
      <MapView
        style={{ height: '100%', width: '100%' }}
        initialRegion={{
          ...location,
          latitudeDelta: 0.1,
          longitudeDelta: 0.5,
        }}
      >
        <Marker title={route.params.title} coordinate={location} />
      </MapView>
    </View>
  );
};
