import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-server',
  templateUrl: './new-server.component.html',
})
export class NewServerComponent implements OnInit {
  frmServerName = ""
  frmServerIp   = ''
  frmServerId   = 1
  frmServerStatus = 'UP'
  frmError = false
  frmHasValues = false;
  frmServerMessage = "Please enter new server details"
  constructor() { }

  ngOnInit(): void {}

  // ---------------------------------------------------------------------
  onResetInputs() {
    this.frmServerName = '';
    this.frmServerIp = '';
    this.frmServerMessage = "Please enter new server details"
    this.frmError = false
    this.frmHasValues = false;
  }

  // ---------------------------------------------------------------------
  onAddServerClick() {
    console.log("onAddServerClick")
    if (!this.fncHasValues()) { 
      console.log("onAddServerClick:Error:No values!")
      this.frmServerMessage = "No values found" ;
      this.frmError = true;
      return; 
    }

    const validStatus = this.fncIsFormValid()
    if (!validStatus.status) { 
      console.log("onAddServerClick:Error:Form was invalid!")
      this.frmServerMessage = validStatus.errMessage ;
      this.frmError = true;
      return; 
    }
    
    this.frmServerMessage = "Server was created." ;
    this.frmError = false;
    this.frmServerName = '';
    this.frmServerIp = '';
    this.frmError = false
    //this.serversList.push(new ServerEntry(1, this.serverName, this.serverIp, "New server"))
    // this.serverCreated = true
    // this.serverCreateMessage = `Server was created = ${this.serverName} : ${this.serverIp}`
    // this.serverError = false
    // this.serverErrorMessage = ''
    // this.onResetInputs()
  }

  // ---------------------------------------------------------------------
  onUpdateServerName(event: Event) {
    this.frmServerName = (<HTMLInputElement>event.target).value;
    this.frmHasValues = this.fncHasValues()
  }

  onUpdateServerIp(event: Event) {
    this.frmServerIp = (<HTMLInputElement>event.target).value;
    this.frmHasValues = this.fncHasValues()
  }

  // ---------------------------------------------------------------------
  getMessageClass() {
    if (this.frmError) {
      return 'alert alert-danger  mt-2 ps-2 p-1 w-75';
    }
    else {
      return 'alert alert-success mt-2 ps-2 p-1 w-75';
    }
  }  

  // ---------------------------------------------------------------------
  fncHasValues() {
    if (this.frmServerName.length + this.frmServerIp.length == 0) {
      console.log('frmHasValues was false')
      return false;
    } 
    console.log('frmHasValues was true')
    return true;
  }

  // ---------------------------------------------------------------------
  fncIsFormValid() {
    if (this.frmServerName.length == 0) {
      console.log('Server name is required')
      return {'status': false, 'frmObject': this.frmServerName, 'errMessage':  'Server Name is required'};
    } 
    if (this.frmServerIp.length == 0) {
      console.log('Server Ip is required')
      return {'status': false, 'frmObject': this.frmServerIp, 'errMessage':  'Server Ip is required'};
    } 
    console.log('fForm was valid')
    return {'status': true};
  }

}
