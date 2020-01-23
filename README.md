[![Coverage Status](https://coveralls.io/repos/github/sheeraz1022/robot/badge.svg?branch=master)](https://coveralls.io/github/sheeraz1022/robot?branch=master)
[![Build Status](https://travis-ci.com/sheeraz1022/robot.svg?branch=master)](https://travis-ci.com/sheeraz1022/robot)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed-raw/sheeraz1022/robot.svg)
# Robot Simulator

## Introduction
This is a Robot Simulator which hangs around a table of 5 X 5 size in any direction. It will not move if its going to fall down.

## Installation Guide

1. Install yarn by following instructions [here](https://yarnpkg.com/en/docs/install)
2. Install dependencies using `yarn`
3. Run Robot Simulator `yarn robot:run`

## Test Project

* you can use `yarn test` command to test the project

### Use following commands as example to move Robot on table

* PLACE 0,0,NORTH (This will initialize robot)
* MOVE (This will move robot one step ahead in current direction)
* RIGHT (This will mode direction towards right)
* LEFT (This will move direction towards left)
* REPORT (This will show you current location)


## Code Coverage

* In order to see realtime code coverage, use `yarn code_coverage` command.
* As its evident via the badge present on the top around the coverage of code. For more indepth report please visit [here](https://coveralls.io/github/sheeraz1022/robot)

## Notes

* Please refer to [PROBLEM.md](PROBLEM.md) for information on what this repo is made for

## Environment Setup

If you don't have your environment setup and prefer dockerized way of running things, this section might interest you :)

### Steps

1. Install and run docker deamon
2. Download or unzip the repo at a particular position in your computer (assuming /Users/me/robot)
3. `cd /Users/me/robot`
4. `docker build -t sheeraz-toy-robot .`
5. `docker run -d sheeraz-toy-robot`
6. It will print CONTAINER_ID, remember it or even better copy it
7. `docker exec -it CONTAINER_ID /bin/sh -c "[ -e /bin/bash ] && /bin/bash || /bin/sh"`
8. Hurrah you are inside the container
9. Now try running `npm run test`
10. Now try the interactive mode `npm run robot:run`