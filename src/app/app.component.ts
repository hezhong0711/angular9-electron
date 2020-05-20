import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {ElectronService} from './core/services';
import {AppConfig} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mind-video';

  constructor(
    public electronService: ElectronService,
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('en');

    console.log('AppConfig', AppConfig);

    if (electronService.isElectron) {
      console.log(process.env);
      console.log('Mode electron');
      console.log('Electron ipcRenderer', electronService.ipcRenderer);
      console.log('NodeJS childProcess', electronService.childProcess);
    } else {
      console.log('Mode web');
    }
  }
}
