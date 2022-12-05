import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  userDetails:any={
    1000:{acno:1000,usename:"anu",password:123,balance:0},
    1001:{acno:1001,usename:"amal",password:123,balance:0},
    1002:{acno:1002,usename:"arjun",password:123,balance:0},
    1003:{acno:1003,usename:"ramesh",password:123,balance:0}

  }

  register(acno:any,uname:any,psw:any){
    var userDetails=this.userDetails
    if(acno in userDetails){
      return false
    }
    else{
      userDetails[acno]={acno,username:uname,password:psw,balace:0}
      return true
    }
  }

}
