#!/usr/bin/env bash
ng build --project antd-icon-picker
cd dist/antd-icon-picker
npm publish
cd ../
yarn add antd-icon-picker
