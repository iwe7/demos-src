#!/usr/bin/env bash
ng build --project iwe7-metadata
cd dist/iwe7-metadata
npm publish
cd ../
yarn add iwe7-metadata
