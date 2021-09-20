#!/bin/bash

PROJECT_DIR="$(cd "$(dirname "$0")/.."; pwd)"

trap "kill 0" EXIT

pushd "${PROJECT_DIR}"
	printf "\n*********************** Build React *************************"
	npm run build
popd


pushd "${PROJECT_DIR}/server"
	printf "\n*********************** Run GO ***************************"
	go run server.go
popd

wait
