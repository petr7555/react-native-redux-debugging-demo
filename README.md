* `npm i`
* `npm run android`
* If you
  see `Keystore file '.../react-native-redux-debugging-demo/android/app/debug.keystore' not found for signing config 'debug'.`
  run `cd android/app`, then `keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass 
  android -keyalg RSA -keysize 2048 -validity 10000` (enter name, leave other fields empty).
