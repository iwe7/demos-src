#!/usr/bin/env bash
ng build --project iwe7-icss
cd dist/iwe7-icss
npm publish
cd ../
yarn add iwe7-icss
