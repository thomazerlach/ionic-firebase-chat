import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SigninPage } from './../pages/signin/signin';

import { PipesModule } from '../pipes/pipes.module';
import { ComponentsModule } from './../components/components.module';
import { UserProvider } from '../providers/user/user';
import { AuthProvider } from '../providers/auth/auth';
import { ChatProvider } from '../providers/chat/chat';
import { MessageProvider } from '../providers/message/message';

const firebaseAppConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyCibqMzgPwb9d5yCG7zHGADqquTtKYGNF4",
  authDomain: "ionic2udemy-firebase-chat.firebaseapp.com",
  databaseURL: "https://ionic2udemy-firebase-chat.firebaseio.com",
  projectId: "ionic2udemy-firebase-chat",
  storageBucket: "ionic2udemy-firebase-chat.appspot.com",
  messagingSenderId: "479587196274"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SigninPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAppConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ComponentsModule,
    PipesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SigninPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    AuthProvider,
    ChatProvider,
    MessageProvider
  ]
})
export class AppModule {}
