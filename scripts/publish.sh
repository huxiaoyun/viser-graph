#!/bin/bash
set -e

# publish viser-graph
lerna exec --scope viser-graph -- npm run build
lerna publish --scope viser-graph

# publish viser-graph modules
# lerna exec --scope viser-graph-* -- npm run build
# lerna publish --scope viser-graph-*
