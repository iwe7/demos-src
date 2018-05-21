#!/usr/bin/env bash
ng build --project iwe7-share
cd dist/iwe7-share
npm publish
cd ../
yarn add iwe7-share
