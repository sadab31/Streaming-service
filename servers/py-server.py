

import asyncio
import random

import websockets
import json
import time




# stream function
def stream():                             
    return random.randint(0, 50)




async def handler(websocket, path):
    ts=0
    while True:
        ts+=1
        data = {               
              "users": stream() ,
              "name" : ts
            }
            

     
        # sending data to the client

        
        await websocket.send(json.dumps(data))
        await asyncio.sleep(1)

start_server = websockets.serve(handler, "127.0.0.1", 8888)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
