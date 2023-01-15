import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  aim="your perfect banking partner"
  data="enter account number"
  // acno=''
  // psw=''
  userDetails:any={
    1000:{acno:1000,usename:"anu",password:123},
    1001:{acno:1001,usename:"amal",password:123},
    1002:{acno:1002,usename:"arjun",password:123},
    1003:{acno:1003,usename:"ramesh",password:123}

  }
  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }

  loginForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
    psw:['',[Validators.required,Validators.pattern('[0-9]+')]]
  })

  ngOnInit(): void{

  }

  login (){
    // alert('login clicked')
    var acno=this.loginForm.value.acno
    var psw=this.loginForm.value.psw

    if(this.loginForm.valid){
    
    this.ds.login(acno,psw).subscribe((result:any)=>{



     localStorage.setItem('currentacno',JSON.stringify(result.currentAcno))
     localStorage.setItem('currentuser',JSON.stringify(result.currentUser))
     localStorage.setItem('token',JSON.stringify(result.token))


      alert(result.message)

      this.router.navigateByUrl('dashboard')

    },
    result=>{
      alert(result.error.message)
    }
    )
  }
  else{
    alert('invalid form')
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
