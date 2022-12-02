import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  aim="your perfect banking partner"
  data="enter account number"
  acno=''
  psw=''
  userDetails:any={
    1000:{acno:1000,usename:"anu",password:123},
    1001:{acno:1001,usename:"amal",password:123},
    1002:{acno:1002,usename:"arjun",password:123},
    1003:{acno:1003,usename:"ramesh",password:123}

  }
  login (){
    alert('login clicked')
  }

  acnoChange(event:any){
    this.acno=event.target.value
  } 
  pswChange(event:any){
    this.psw=event.target.value
    console.log(this.psw);
    
  }
}
