import { AppRegistry, Platform } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import { Federated, ScriptManager } from '@callstack/repack/client';

ScriptManager.shared.addResolver(async (scriptId, caller) => {
  const resolveURL = Federated.createURLResolver({
    containers: {
      IssuerPage: 'http://localhost:9000/[name][ext]',
    },
  });

  const url = resolveURL(scriptId, caller);
  if (url) {
    return {
      url,
      query: {
        platform: Platform.OS,
      },
    };
  }
});

AppRegistry.registerComponent(appName, () => App);
