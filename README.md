# reactnative-tft


1. node -v
2. npm -v 
3. npm install -g expo-cli
4. expo init tft-pro
5. cd tft-pro
6. npm start
7. npx expo install react-native-web react-dom @expo/metro-runtime  # for web
8. npm start

<!-- // for apk build
9. npm install -g eas-cli
10. eas build -p android --> # aab file 

# credentials eas
1. username - testsfortests
2. password - Gc#Gf#+HLz8cZPY

# apk build 
1. eas build:configure
2. change eas.json 
3.  eas build -p android --profile preview

# ios build 
1. eas build:configure
2. change eas.json 
3.  eas build -p ios --profile preview  
// will get .app file for .ipa need apple developer account(premium)