#!/usr/bin/env bash
ng build --project iwe7-global
cd dist/iwe7-global
npm publish
cd ../
yarn add iwe7-global
