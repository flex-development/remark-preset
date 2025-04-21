#!/bin/sh

set -e

# Local Release Workflow
#
# 1. pack project
# 2. analyze types
# 3. create release chore commit
# 4. cleanup
#
# References:
#
# - https://git-scm.com/docs/git-commit
# - https://github.com/flex-development/grease
# - https://jqlang.github.io

yarn pack
attw package.tgz
git commit --allow-empty -S -s -m "release(chore): $(jq .version -r <<<$(grease bump -j $@))"
yarn clean:pack
