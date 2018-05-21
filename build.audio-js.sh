#!/usr/bin/env bash
ng build --project audio-js
cd dist/audio-js
npm publish
cd ../
yarn add iwe7-audio-js
