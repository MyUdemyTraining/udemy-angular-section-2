export class ServerEntry {
    serverName = ""
    serverIp   = ''
    serverId   = 1
    serverStatus = 'UP'
    serverDesc = ''
    constructor(serverId: number, serverName: string, serverIp: string, serverDesc: string) { 
        this.serverId = serverId
        this.serverName = serverName
        this.serverIp = serverIp
        this.serverDesc = serverDesc
    }
}