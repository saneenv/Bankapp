import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router:Router) { }

  ngOnInit(): void{

  }

  login (){
    // alert('login clicked')
    var acno=this.acno
    var psw=this.psw
    var userDetails=this.userDetails

    if(acno in userDetails){
      if(psw==userDetails[acno]["password"]){
        alert('login success')
        this.router.navigateByUrl('dashboard')
      }
      else{
        alert('incorrect password')
      }
    }
      else{
        alert('incorrect username')
      }

    }
  }

  


//   acnoChange(event:any){
//     this.acno=event.target.value
//   } 
//   pswChange(event:any){
//     this.psw=event.target.value
//     console.log(this.psw);
    
//   }
// }
