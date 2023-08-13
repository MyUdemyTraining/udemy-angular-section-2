import { Component, OnInit } from '@angular/core';
import { ServerEntry } from '../models/server.model';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
})

export class ServersComponent implements OnInit {
    serversList: ServerEntry[] = []

    constructor() { 
      this.serversList.push(new ServerEntry(1, "Test Server 1", "192.168.0.1", ""))
      this.serversList.push(new ServerEntry(2, "Test Server 2", "192.168.0.2", ""))
    }

  ngOnInit(): void {  }

  onServerCreated(serverData: {serverName: string, serverIp: string, serverDesc: string}) {
    console.log('onServerCreated: was activated')
    this.serversList.push(new ServerEntry(this.fncGetNextServerId(), serverData.serverName, serverData.serverIp, serverData.serverDesc))
  }

  fncGetNextServerId() {
    let maxServerId = -1;
    for (var serverEntry of this.serversList) {
      if (serverEntry.serverId > maxServerId) {
        maxServerId = serverEntry.serverId;
      }
    }
    return maxServerId + 1;
  }

}
