#!/usr/bin/env bash
ng build --project video-js
cd dist/video-js
npm publish
cd ../
yarn add video-js
