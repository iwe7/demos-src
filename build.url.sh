#!/usr/bin/env bash
ng build --project iwe7-url
cd dist/iwe7-url
npm publish
cd ../
yarn add iwe7-url
