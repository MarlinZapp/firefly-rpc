## Usage

Go to the [Thrift Server](https://github.com/MarlinZapp/firefly-thrift-server) and [Thrift Client](https://github.com/MarlinZapp/firefly-thrift-client) repositories.

There you can find the [server](https://github.com/MarlinZapp/firefly-thrift-server/releases) and [client](https://github.com/MarlinZapp/firefly-thrift-client/releases/) releases.

Copy the unzipped releases into `firefly/client` and `firefly/server` folders in the project directory.

Make sure node.js is installed. Install the node packages by running `npm i` in the project directory.

Afterwards run the simulation by executing the `start.sh` script.
Press enter to start and stop the simulation.
You can adjust a lot of variables in the `start.sh` script from this repository.

Open your browser on `localhost:3000`. Enjoy.

## What is happening here?

The `start.sh` script starts the following application parts:
- a thrift server written in rust.
- `GRID_ROWS` times `GRID_COLS` thrift clients written in rust.
- a node.js server.

The node server is also a thrift client which connects to the rust thrift server.
The node server uses express js to serve the static files from the `public` folder at `localhost:3000`.
The frontend accesses the express server using `fetch` which uses thrift to access the state of the fireflies from the rust applications.
