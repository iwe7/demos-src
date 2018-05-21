#!/usr/bin/env bash
ng build --project color-picker
cd dist/color-picker
npm publish
cd ../
yarn add color-picker
