#!/usr/bin/env bash
ng build --project iwe7-layout
cd dist/iwe7-layout
npm publish
cd ../
yarn add iwe7-layout
