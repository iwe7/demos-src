#!/usr/bin/env bash
ng build --project iwe7-base
cd dist/iwe7-base
npm publish
cd ../
yarn add iwe7-base
