import { Component} from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.scss']
})
export class NewThemeComponent {

  get isLoggedIn() {
    return this.authService.isLoggedIn;
  }

  constructor(private authService: AuthService) { }


}
