import { OnInit } from "@angular/core";

import { AlertController, App, MenuController, NavController } from "ionic-angular";

import { SigninPage } from './../pages/signin/signin';
import { AuthProvider } from './../providers/auth/auth';

export abstract class BaseComponent implements OnInit {

    protected navCtrl: NavController;

    constructor(
        public alertCtrl: AlertController,
        public authService: AuthProvider,
        public app: App,
        public menuCtrl: MenuController
    ) { }

    ngOnInit(): void {
        this.navCtrl = this.app.getActiveNavs()[0];
    }

    onLogout(): void {
        this.alertCtrl.create({
            message: "Do you want to quit?",
            buttons: [
                {
                    text: 'Yes',
                    handler: () => {
                        this.authService.logout()
                            .then(() => {
                                this.navCtrl.setRoot(SigninPage);
                                this.menuCtrl.enable(false, 'user-menu');
                            })
                    }
                },
                {
                    text: 'No'
                }
            ]
        }).present();
    }
}