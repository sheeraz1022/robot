[![Coverage Status](https://coveralls.io/repos/github/sheeraz1022/robot/badge.svg?branch=master)](https://coveralls.io/github/sheeraz1022/robot?branch=master)
[![Build Status](https://travis-ci.com/sheeraz1022/robot.svg?branch=master)](https://travis-ci.com/sheeraz1022/robot)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed-raw/sheeraz1022/robot.svg)
# Robot Simulator

## Introduction
This is a Robot Simulator which hangs around a table of 5 X 5 size in any direction. It will not move if its going to fall down.

## Environment Setup

If you don't have your environment setup and prefer dockerized way of running this project, this section might interest you.

### Installation Guide using Docker

1. Download and Install [Docker](https://www.docker.com/products/docker-desktop) 
2. Run Docker Deamon
3. Download or unzip the repo at a particular position in your computer (assuming /Users/me/robot)
4. `cd /Users/me/robot`
5. `docker build -t toy-robot .`
6. `docker run -d toy-robot`
7. It will print CONTAINER_ID, better copy it in notepad. You have to use this ID in next step
8. `docker exec -it CONTAINER_ID /bin/sh -c "[ -e /bin/bash ] && /bin/bash || /bin/sh"`
8. You have successfully installed the project inside docker container

## Running Robot

1. Install dependencies using `npm install`
2. Run Robot Simulator `npm run robot:run`

## Test Project

* you can use `npm run test` command to test the project

### Use following commands as example to move Robot on table

* PLACE 0,0,NORTH (This will initialize robot)
* MOVE (This will move robot one step ahead in current direction)
* RIGHT (This will mode direction towards right)
* LEFT (This will move direction towards left)
* REPORT (This will show you current location)

## Code Coverage

* In order to see realtime code coverage, use `npm run code_coverage` command.
* As its evident via the badge present on the top around the coverage of code. For more indepth report please visit [here](https://coveralls.io/github/sheeraz1022/robot)

## Notes

* Please refer to [PROBLEM.md](PROBLEM.md) for information on what this repo is made for