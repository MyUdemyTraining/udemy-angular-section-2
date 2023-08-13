import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})

export class ServerComponent implements OnInit{
  @Input('srvElement') element:{serverId: string, serverName: string, serverIp: string, serverDesc: string}  

  ngOnInit(): void {
  }
    
  getServerStatus() {
    return "Up";
  }

}
