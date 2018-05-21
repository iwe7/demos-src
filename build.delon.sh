#!/usr/bin/env bash
ng build --project iwe7-delon
cd dist/iwe7-delon
npm publish
cd ../
yarn add iwe7-delon
