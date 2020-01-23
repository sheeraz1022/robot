[![Coverage Status](https://coveralls.io/repos/github/sheeraz1022/robot/badge.svg?branch=master)](https://coveralls.io/github/sheeraz1022/robot?branch=master)
[![Build Status](https://travis-ci.com/sheeraz1022/robot.svg?branch=master)](https://travis-ci.com/sheeraz1022/robot)
# Robot Simulator

## Introduction
This is a Robot Simulator which hangs around a table of 5 X 5 size in any direction. It will not move if its going to fall down.

## Installation Guide

1. Please install and configure npm and yarn
2. Install dependencies using `yarn`
3. Run Robot Simulator `yarn robot:run`

### Use following commands as example to move Robot on table

* PLACE 0,0,NORTH (This will initialize robot)
* MOVE (This will move robot one step ahead in current direction)
* RIGHT (This will mode direction towards right)
* LEFT (This will move direction towards left)
* REPORT (This will show you current location)


## Code Coverage

* In order to see realtime code coverage, use `yarn code_coverage` command.

As its evident via the badge present on the top around the coverage of code. For more indepth report please visit [here](https://coveralls.io/github/sheeraz1022/robot)

## Notes

* Please refer to PROBLEM.md for information on what this repo is made for