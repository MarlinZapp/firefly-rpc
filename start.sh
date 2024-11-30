#!/bin/bash

# Configuration Variables
COUPLING_STRENGTH=0.2
MIN_FREQUENCY=0.2
MAX_FREQUENCY_DEVIATION=0.2
GRID_ROWS=9  # Number of rows in the grid
GRID_COLS=16  # Number of columns in the grid
THRIFT_CLIENT_PATH="./firefly/client/firefly-thrift-client"
THRIFT_SERVER_PATH="./firefly/server/firefly-thrift-server"
NODE_SERVER_PATH="./server.js"
# START_HTTP_SERVER="sfz --port 8000 --coi -r"

# Array to hold process IDs
PIDS=()

echo "When started, press [Enter] to stop all processes."
read -p "Continue with [ENTER]..."

# Start http server
# echo "Starting http server..."
# env $START_HTTP_SERVER &
# PIDS+=($!)  # Add server PID to the array
# echo "Http server started on port 8000 with PID ${PIDS[-1]}."

# Start thrift server
echo "Starting thrift server..."
env NUM_ROWS=$GRID_ROWS \
    NUM_COLS=$GRID_COLS \
    $THRIFT_SERVER_PATH &
PIDS+=($!)  # Add server PID to the array
echo "Thrift server started with PID ${PIDS[-1]}."

# Give the server some time to start
sleep 1

# Start clients
for ((x=0; x<$GRID_COLS; x++)); do
    for ((y=0; y<$GRID_ROWS; y++)); do
        POSITION_X=$x
        POSITION_Y=$y
        GRIDSIZE_X=$GRID_COLS
        GRIDSIZE_Y=$GRID_ROWS

        echo "Starting client at position ($POSITION_X, $POSITION_Y)..."

        # Launch the client with environment variables
        env POSITION_X=$POSITION_X \
            POSITION_Y=$POSITION_Y \
            GRIDSIZE_X=$GRIDSIZE_X \
            GRIDSIZE_Y=$GRIDSIZE_Y \
            COUPLING_STRENGTH=$COUPLING_STRENGTH \
            MIN_FREQUENCY=$MIN_FREQUENCY \
            MAX_FREQUENCY_DEVIATION=$MAX_FREQUENCY_DEVIATION \
            $THRIFT_CLIENT_PATH &
        PIDS+=($!)  # Add client PID to the array
        echo "Client started with PID ${PIDS[-1]}."
    done
done

sleep 1

# Start node server
echo "Starting node server..."
env NUM_ROWS=$GRID_ROWS \
    NUM_COLS=$GRID_COLS \
    node $NODE_SERVER_PATH &
PIDS+=($!)  # Add server PID to the array
echo "Node server started with PID ${PIDS[-1]}."


echo "All clients and server started."

# Wait for user input to stop processes
read -p "Press [Enter] to stop all processes..."

# Kill all processes
echo "Stopping all processes..."
for PID in "${PIDS[@]}"; do
    echo "Stopping process with PID $PID..."
    kill $PID
done

echo "All processes stopped."
