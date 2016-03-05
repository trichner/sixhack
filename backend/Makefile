# Awesome Makefile
#
# - Thomas Richner, mail@trichner.ch
#
all: build test

build: *.go
	go build

test: *.go
	go test

run:
	-@bash "run.sh"

.PHONY: build test run