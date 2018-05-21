#!/usr/bin/env bash
ng build --project iwe7-core
cd dist/iwe7-core
npm publish
cd ../
yarn add iwe7-core
