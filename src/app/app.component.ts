import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angural9-electron';

  constructor(
    private translate: TranslateService
  ) {
    console.log(this.translate);
    this.translate.setDefaultLang('en');
  }
}
