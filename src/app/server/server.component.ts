import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
  allowNewServer = false;    
  serverCreateMessage = "Awaiting input"
  serverName = ""
  serverIp = ''
  serverID = 10
  serverStatus = 'UP'

  constructor() {
    console.log('app-server: initialized')
    setTimeout(()=> {
      this.allowNewServer = true
    }, 1000)
  }

  getServerIP() {
    return '192.168.0.1'
  }

  onServerCreatedClick() {
    console.log("onServerCreatedClick")
    this.serverCreateMessage = "Server was created"
  }

  onUpdateServerName(event: Event) {
    //console.log(event)
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}