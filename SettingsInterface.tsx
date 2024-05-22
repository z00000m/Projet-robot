import React, {useState} from 'react';
import {View, Text, Switch, StyleSheet} from 'react-native';

const SettingsInterface = () => {
  const [option1Enabled, setOption1Enabled] = useState(false);
  const [option2Enabled, setOption2Enabled] = useState(false);
  const [option3Enabled, setOption3Enabled] = useState(false);

  const toggleOption1 = () => setOption1Enabled(!option1Enabled);
  const toggleOption2 = () => setOption2Enabled(!option2Enabled);
  const toggleOption3 = () => setOption3Enabled(!option3Enabled);

  return (
    <View style={styles.container}>
      <View style={styles.option}>
        <Text>Option 1</Text>
        <Switch value={option1Enabled} onValueChange={toggleOption1} />
      </View>
      <View style={styles.option}>
        <Text>Option 2</Text>
        <Switch value={option2Enabled} onValueChange={toggleOption2} />
      </View>
      <View style={styles.option}>
        <Text>Option 3</Text>
        <Switch value={option3Enabled} onValueChange={toggleOption3} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default SettingsInterface;
