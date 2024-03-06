import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../models/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {

  newUser: User = {
    email: "",
    password: "",
  };

  successMessage: string = "";

  onSubmit(): void {
    console.log(this.newUser);
    this.successMessage = "🟢 Login validé ";
  }

}
