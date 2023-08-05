import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
  allowNewServer = false;    
  serverID = 10
  serverStatus = 'UP'

  constructor() {
    console.log('app-server: initialized')
    setTimeout(()=> {
      this.allowNewServer = true
    }, 2000)
  }

  getServerIP() {
    return '192.168.0.1'
  }
}