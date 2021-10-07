#!/bin/bash

cd `dirname "$(readlink -f "$0")"`

COLLECTION=$1
QID=$2

export PYTHONPATH="$PYTHONPATH:$PWD/../paradicms/etl"

source ../paradicms/etl/venv/bin/activate
python3 -m paradicms_etl.pipelines.wikidata_qid_to_markdown_directory_pipeline \
  --data-dir-path .paradicms \
  --markdown-directory-path $COLLECTION \
  --pipeline-id $COLLECTION \
  $QID
