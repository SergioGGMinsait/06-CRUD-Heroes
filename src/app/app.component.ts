import { Component } from '@angular/core';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'heoresApp';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.checkAuthentication();
  }

}
