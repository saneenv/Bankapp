import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  // acno=''
  // psw=''
  // amnt=''

  // acnum=''
  // pswrd=''
  // amont=''

  user=''

constructor(private ds:DataService,private fb:FormBuilder) { 



  // access username
  this.user=this.ds.currentuser
    
}

depositForm=this.fb.group({
  acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
  psw:['',[Validators.required,Validators.pattern('[0-9]+')]],
  amnt:['',[Validators.required,Validators.pattern('[0-9]+')]]
})

withdrawForm=this.fb.group({
  acnum:['',[Validators.required,Validators.pattern('[0-9]+')]],
  pswrd:['',[Validators.required,Validators.pattern('[0-9]+')]],
  amont:['',[Validators.required,Validators.pattern('[0-9]+')]]
})

ngOnInit(): void{

}


deposit(){
  var acno=this.depositForm.value.acno
  var psw=this.depositForm.value.psw
  var amnt=this.depositForm.value.amnt

  if(this.depositForm.valid){

  const result=this.ds.deposit(acno,psw,amnt)
 
  if(result){
    alert(`${amnt} credited to your ac and the balance is ${result}`)
  }
  else{
    alert('incorrect ac number or password')
  }

}
else{
  alert('invalid')
}
}


withdraw(){
  var acnum=this.withdrawForm.value.acnum
  var pswrd=this.withdrawForm.value.pswrd
  var amont=this.withdrawForm.value.amont

  if(this.withdrawForm.valid){

  const result=this.ds.withdraw(acnum,pswrd,amont)
 
  if(result){
    alert(`${amont} debicted from your ac and the balance is ${result}`)
  }
  else{
    alert('incorrect ac number or password') 
  }
}
else{
  alert('invalid')
}
  }
}

