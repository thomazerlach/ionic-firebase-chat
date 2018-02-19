import { Component, Input } from '@angular/core';
import { AlertController, App, MenuController } from 'ionic-angular';

import { BaseComponent } from '../base.component';

import { AuthProvider } from '../../providers/auth/auth';
import { User } from '../../models/user.model';

@Component({
  selector: 'user-menu',
  templateUrl: 'user-menu.html'
})
export class UserMenuComponent extends BaseComponent {

  @Input('user') currentUser: User;

  constructor(
    public alertCtrl: AlertController,
    public authService: AuthProvider,
    public app: App,
    public menuCtrl: MenuController
  ) { 
    super(alertCtrl, authService, app, menuCtrl);
  }

  onProfile(): void {
    this.navCtrl.push('UserProfilePage');
  }

}
