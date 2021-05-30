#!/bin/bash

cd "$(dirname "$0")"

export INPUT_DEBUG=1
export INPUT_INPUT_DATA=$PWD/Passion
export INPUT_INPUT_FORMAT=markdown
export INPUT_OUTPUT_DATA=$PWD/.paradicms/data/loaded/Bildingsroman.ttl
export INPUT_OUTPUT_FORMAT=ttl-rdf
export PYTHONPATH=$PYTHONPATH:$PWD/../paradicms/etl

source $PWD/../paradicms/etl/venv/bin/activate

python3 $PWD/../etl-action/action.py
