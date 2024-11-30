## Usage

Go to the [Thrift Server](https://github.com/MarlinZapp/firefly-thrift-server) and [Thrift Client](https://github.com/MarlinZapp/firefly-thrift-client) repositories.

With `cargo build --release`, you can create the up to date releases of both of them.

Copy the releases from `target/release` into the `firefly/client` and `firefly/server` folders.

Make sure node.js is installed. Install the node packages by running `npm i`.

Afterwards run the simulation by executing the `start.sh` script. You can adjust a lot of variables in the `start.sh` script from this repository.
Press enter to start and stop the simulation.

Open your browser on `localhost:3000`. Enjoy.

## What is happening here?

The `start.sh` script starts the following application parts:
- a thrift server written in rust.
- `GRID_ROWS` times `GRID_COLS` thrift clients written in rust.
- a node.js server.

The node server is also a thrift client which connects to the rust thrift server.
The node server uses express js to serve the static files from the `public` folder at `localhost:3000`.
The frontend accesses the express server using `fetch` which uses thrift to access the state of the fireflies from the rust applications.
