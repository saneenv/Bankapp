import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentuser=''

  constructor() { }

  userDetails:any={
    1000:{acno:1000,username:"anu",password:123,balance:0},
    1001:{acno:1001,username:"amal",password:123,balance:0},
    1002:{acno:1002,username:"arjun",password:123,balance:0},
    1003:{acno:1003,username:"ramesh",password:123,balance:0}

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
login (acno:any,psw:any){

  
  var userDetails=this.userDetails

  if(acno in userDetails){
    if(psw==userDetails[acno]["password"]){
      // store username
      this.currentuser=userDetails[acno]["username"]
      return true
    }
    else{
      return false
    }
  }
    else{
      return false
    }

  }
  deposit(acno:any,password:any,amount:any){
    var userDetails=this.userDetails
    if(acno in userDetails){
      if(password==userDetails[acno]["password"]){
       userDetails[acno]["balance"]+=amount
       return userDetails[acno]["balance"]
       
      }
    
    else{
      return false
    }
  }
    else{
      return false
    }
  }
  withdraw(acnum:any,pswrd:any,amont:any){
    var userDetails=this.userDetails
    if(acnum in userDetails){
      if(pswrd==userDetails[acnum]["password"]){
        if(amont<=userDetails[acnum]["balance"]){
       userDetails[acnum]["balance"]-=amont
       return userDetails[acnum]["balance"]
       
      }
      
    
    else{
      alert('insufficient balance')
      return false
    }
  }
    else{
      alert('incorrect password')
      return false
    }
  }
    else{
      alert('incorrect ac num')
      return false
    }
  }
}


