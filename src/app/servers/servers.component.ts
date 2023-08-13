import { Component, OnInit } from '@angular/core';
import { ServerEntry } from '../models/server.model';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  //template: `<app-server></app-server>
  //           <app-server></app-server>`,
})


export class ServersComponent implements OnInit {
    serversList: ServerEntry[] = []

    allowNewServer = false;    
    serverCreateMessage = "Awaiting input"
    serverErrorMessage  = ""

    serverCreated = false
    serverError = false

    serverName = ""
    serverIp   = ''
    serverID   = 1
    serverStatus = 'UP'

    regexIpV4 = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
  
  constructor() { 
    this.serversList.push(new ServerEntry(1, "Test Server 1", "192.168.0.1", ""))
    this.serversList.push(new ServerEntry(1, "Test Server 2", "192.168.0.2", ""))
  }

  ngOnInit(): void {
  }
  getServerIP() {
    return '192.168.0.1'
  }

  getServerStatusColor() {
    return this.serverStatus === 'UP' ? "green" : 'red';
  }
  getServerInputClass() {
    if (!this.validateIPaddress(this.serverIp)) {
      return 'alert alert-danger mt-3 ps-1 p-1 w-50';
    }
    else {
      return 'alert alert-success mt-3 ps-1 p-1 w-50';
    }
  }
  
  onResetInputs() {
    this.serverName = '';
    this.serverIp = '';
    this.serverCreateMessage = "Awaiting input"
    this.serverErrorMessage  = ""
    this.serverCreated = false
    this.serverError = false
  }

  // ---------------------------------------------------------------------
  onServerCreatedClick() {
    console.log("onServerCreatedClick")
    this.serversList.push(new ServerEntry(1, this.serverName, this.serverIp, "New server"))
    this.serverCreated = true
    this.serverCreateMessage = `Server was created = ${this.serverName} : ${this.serverIp}`
    this.serverError = false
    this.serverErrorMessage = ''
    this.onResetInputs()
  }

  // ---------------------------------------------------------------------
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
    this.setButtonStatus()
  }
  onUpdateServerIp(event: Event) {
    this.serverIp = (<HTMLInputElement>event.target).value;
    console.log(`onUpdateServerIp: ${this.serverIp}`)
    if (!this.validateIPaddress(this.serverIp)) {
      this.serverError = true
      this.serverErrorMessage = "Server address - Invalid Format"
    }
    else {
      this.serverError = false
      this.serverErrorMessage = "Server address - Ok"
    }
    this.setButtonStatus()
  }

  // ---------------------------------------------------------------------
  setButtonStatus() {
    if (this.serverName.length == 0) {
        this.allowNewServer = false;
        this.serverCreateMessage = "Server name is required."
    }
    else if (this.serverIp.length == 0){
        this.allowNewServer = false;
        this.serverCreateMessage = "Server ip address is required."
    }
    else {
        this.allowNewServer = true;
        this.serverCreateMessage = "Ready to create server."
    }
  }

  // ---------------------------------------------------------------------
  validateIPaddress(ipaddress: string) {
    if (ipaddress.match(this.regexIpV4)) {
    return (true)
    }
    return false
    }

}
