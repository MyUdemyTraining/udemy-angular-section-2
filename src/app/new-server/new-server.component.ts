import { formatDate } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-server',
  templateUrl: './new-server.component.html',
})

export class NewServerComponent implements OnInit {
  @Output() serverAdded = new EventEmitter<{serverName: string, serverIp: string, serverDesc: string}>();

  format = 'MM/dd/yyyy';
  locale = 'en-US';
  
  frmServerName = ""
  frmServerIp   = ''
  frmServerId   = 1
  frmServerDesc = `Server was added on ${formatDate(Date.now(), this.format, this.locale) }`
  frmServerStatus = 'UP'
  frmError = false
  frmHasValues = false;
  frmServerMessage = "Please enter new server details"

  regexIpV4 = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/

  // ---------------------------------------------------------------------
  constructor() { }
  ngOnInit(): void {}

  // ---------------------------------------------------------------------
  onResetInputs(message?: string) {
    this.frmServerName = '';
    this.frmServerIp = '';
    this.frmServerDesc = `Server was added on ${formatDate(Date.now(), this.format, this.locale) }`
    if (message) {
      this.frmServerMessage = message  
    }
    else {
      this.frmServerMessage = "Please enter new server details"
    }
    this.frmError = false
    this.frmHasValues = false;
  }

  // ---------------------------------------------------------------------
  onAddServerClick(frmServerDescField: HTMLInputElement) {
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
    
    this.serverAdded.emit({serverName: this.frmServerName, serverIp: this.frmServerIp, serverDesc: this.frmServerDesc});
    console.log('onAddServerClick:serverAdded was emitted')
    this.onResetInputs("Server was created.")
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
  onUpdateServerDesc(event: Event) {
    this.frmServerDesc = (<HTMLInputElement>event.target).value;
    this.frmHasValues = this.fncHasValues()
  }

  // ---------------------------------------------------------------------
  getMessageClass() {
    if (this.frmError) {
      return 'alert alert-danger  ps-2 p-1 w-75';
    }
    else {
      return 'alert alert-success ps-2 p-1 w-75';
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
