.PHONY: test install build deploy watch diff
SHELL=/usr/bin/env bash -e -o pipefail

printPhaseName = echo "$(shell tput bold;tput setaf 2 ) === $@ === $(shell tput sgr0)"

install:
	@$(call printPhaseName)
	@npm install
	@npm update
