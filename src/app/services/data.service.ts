import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

// global overloading headers
const option={
 headers:new HttpHeaders()

}


@Injectable({
  providedIn: 'root'
})
export class DataService {

  userDetails:any 
  currentuser=''
  currentacno=''
  registerForm: any
  useracno: any;

  constructor(private http:HttpClient) { 
  }

 



 
gettoken(){
  const token=JSON.parse(localStorage.getItem('token') || '')

  let headers=new HttpHeaders()

  if(token){
    option.headers=headers.append('access-token',token)

  }

return option


}


  register(acno:any,uname:any,psw:any){

    const data={
      acno,uname,psw
    }
    return this.http.post('http://localhost:3000/register',data) 
    
  }
login (acno:any,psw:any){
  const data={
    acno,psw
  }
  return this.http.post('http://localhost:3000/login',data) 
  

  }
  deposit(acno:any,password:any,amount:any){
   const data={
    acno,psw:password,amount
  }
  return this.http.post('http://localhost:3000/deposit',data,this.gettoken()) 
  

  }
  withdraw(acnum:any,pswrd:any,amont:any){
    const data={
      acno:acnum,psw:pswrd,amount:amont
    }
    return this.http.post('http://localhost:3000/withdraw',data,this.gettoken()) 
    
  
  }

  gettransaction(acno:any){
    const data={
      acno
    }
    return this.http.post('http://localhost:3000/transaction',data,this.gettoken()) 
    
  
  }

deleteacc(acno:any){
  return this.http.delete('http://localhost:3000/deleteacc/'+acno,this.gettoken()) 

}

}


