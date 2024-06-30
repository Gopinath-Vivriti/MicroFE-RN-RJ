import {Federated} from '@callstack/repack/client';
import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const IssuerComponent = React.lazy(() =>
  Federated.importModule('IssuerPage', './Issuer'),
);

const FallbackComponent = () => (
  <View style={styles.container}>
    <ActivityIndicator color="rgba(56, 30, 114, 1)" size="large" />
  </View>
);

const Issuer = () => {
  return (
    <React.Suspense fallback={<FallbackComponent />}>
      <View style={{margin: 16}}>
        <IssuerComponent title="Micro FE" content="Issuer Page Card content" />
      </View>
    </React.Suspense>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Issuer;
