import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  dateandtime: any

  acno: any
  // acno=''
  // psw=''
  // amnt=''

  // acnum=''
  // pswrd=''
  // amont=''

  user = ''

  constructor(private ds: DataService, private fb: FormBuilder, private router: Router) {

    this.dateandtime = new Date()

    if(localStorage.getItem('currentuser')){
      this.user = JSON.parse(localStorage.getItem('currentuser') || '')

    }

    // access username

  }

  depositForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    amnt: ['', [Validators.required, Validators.pattern('[0-9]+')]]
  })

  withdrawForm = this.fb.group({
    acnum: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    pswrd: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    amont: ['', [Validators.required, Validators.pattern('[0-9]+')]]
  })

  ngOnInit(): void {
    if (!localStorage.getItem('token')) {
      alert('please login first')
      this.router.navigateByUrl('')
    }

  }


  deposit() {
    var acno = this.depositForm.value.acno
    var psw = this.depositForm.value.psw
    var amnt = this.depositForm.value.amnt

    if (this.depositForm.valid) {

      this.ds.deposit(acno, psw, amnt).subscribe((result: any) => {
        alert(`${amnt} is credited to your ac and the balance is ${result.message}`)
      },
        result => {
          alert(result.error.message)
        }
      )

      }
    else {
      alert('invalid')
    }
  }


  withdraw() {
    var acnum = this.withdrawForm.value.acnum
    var pswrd = this.withdrawForm.value.pswrd
    var amont = this.withdrawForm.value.amont

    if (this.withdrawForm.valid) {

       this.ds.withdraw(acnum, pswrd, amont).subscribe((result:any)=>{
        alert(`${amont} debicted from your ac and the balance is ${result.message}`)

       },
       result=>{
        alert(result.error.message)
       }
       )

    
    }
    else {
      alert('invalid')
    }
  }
  logout() {
    localStorage.removeItem('currentuser')
    localStorage.removeItem('currentacno')
    localStorage.removeItem('token')
    this.router.navigateByUrl('')
  }


  deleteconfirm() {
    this.acno = JSON.parse(localStorage.getItem('currentacno') || "")
  }

  oncancel() {
    this.acno = ""
  }
  delete(event:any){

    this.ds.deleteacc(event).subscribe((result:any)=>{
      alert(result.message)
      this.logout()
    },
    result=>{
  
      alert(result.error.message)
    }
    )
    // alert(event)



  }

}


