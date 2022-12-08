import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentuser=''
  currentacno=''

  constructor() { }

  userDetails:any={
    1000:{acno:1000,username:"anu",password:123,balance:0,transaction:[]},
    1001:{acno:1001,username:"amal",password:123,balance:0,transaction:[]},
    1002:{acno:1002,username:"arjun",password:123,balance:0,transaction:[]},
    1003:{acno:1003,username:"ramesh",password:123,balance:0,transaction:[]}

  }

  register(acno:any,uname:any,psw:any){
    var userDetails=this.userDetails
    if(acno in userDetails){
      return false
    }
    else{
      userDetails[acno]={acno,username:uname,password:psw,balace:0,transaction:[]}
      return true
    }
  }
login (acno:any,psw:any){

  
  var userDetails=this.userDetails

  if(acno in userDetails){
    if(psw==userDetails[acno]["password"]){


      // acnumber
      this.currentacno=acno
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
       userDetails[acno]['transaction'].push({type:'CREDIT',amount:amount})
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
       userDetails[acnum]['transaction'].push({type:'DEBIT',amount:amont})

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

  gettransaction(acno:any){
    return this.userDetails[acno]["transaction"]
  }

}


