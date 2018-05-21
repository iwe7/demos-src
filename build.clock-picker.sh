#!/usr/bin/env bash
ng build --project clock-picker
cd dist/clock-picker
npm publish
cd ../
yarn add iwe7-clock-picker
