

[Kodi JSONRPC](https://kodi.wiki/view/JSON-RPC_API/v8#PVR.GetRecordings)


```curl
POST http://elara:8080/jsonrpc
Content-Type: application/json

{
    "jsonrpc":"2.0",
    "method":"GUI.ShowNotification",
    "params":{
        "title":"durst ...",
        "message":"wo bleibt mein teee ....."
    },
    "id":1
}
```


```curl
POST {{url}}
Content-Type: application/json

{
    "jsonrpc":"2.0",
    "method":"PVR.GetRecordings",
    "id":1
}

```