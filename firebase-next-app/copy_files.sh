#!/bin/bash

rm -rf .next
cp -r ~/source/firebase-js-sdk/packages/firestore/dist ./node_modules/@firebase/firestore/
cp -r ~/source/firebase-js-sdk/packages/util/dist ./node_modules/@firebase/util/
cp -r ~/source/firebase-js-sdk/packages/app/dist ./node_modules/@firebase/app/
npm run dev