import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  acno=''
  psw=''
  amnt=''

  acnum=''
  pswrd=''
  amont=''

  user=''

constructor(private ds:DataService) { 
  // access username
  this.user=this.ds.currentuser
    
}

ngOnInit(): void{

}


deposit(){
  var acno=this.acno
  var psw=this.psw
  var amnt=this.amnt

  const result=this.ds.deposit(acno,psw,amnt)
 
  if(result){
    alert(`${amnt} credited to your ac and the balance is ${result}`)
  }
  else{
    alert('incorrect ac number or password')
  }

}



withdraw(){
  var acnum=this.acnum
  var pswrd=this.pswrd
  var amont=this.amont

  const result=this.ds.withdraw(acnum,pswrd,amont)
 
  if(result){
    alert(`${amont} debicted from your ac and the balance is ${result}`)
  }
  


}
}
