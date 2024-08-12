import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { RouterModule , Router} from '@angular/router';
import { UserService } from '../shared/services/user.service';
import { profile } from 'console';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm = new FormGroup(
      {
        login: new FormControl('', Validators.required),
        senha: new FormControl('', Validators.required),
      }
    )
  }

  constructor(private router: Router, private userService: UserService) {}

  logar(){
    if(this.loginForm.valid){
      let users = this.userService.getUsers();
      for(var user of users){
        //se ele escrito certinho ai ele faz esses coisinho
        if(user.login == this.loginForm.value['login'] && user.password == this.loginForm.value['senha']){
          
          let userData = {
            login: user.login,
            profile: user.profile
          } 

          localStorage.setItem('userData', JSON.stringify(userData));

          window.alert('Bem vindo!')
          this.router.navigate(['/home'])
          return
        }
      }
      //se ele não estiver certinho ai sim ele manda essa
      window.alert('Usuáro e/ou senha incorretos')
    } else {
      window.alert('Preencha campos obrigatórios')
      //daí aqui depois ele fala que precisa preencher
    }
  }

  frigetPass(){
    window.alert('Página em construção')
  }

}
