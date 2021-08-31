#!/usr/bin/env node
'use strict';

const cwd = process.cwd();
const fs = require('fs/promises');
const { join } = require('path');
const dotgit = require('dotgitignore')({ cwd });

(async function calculateNumOfLines(path, log = false) {
   const files = await fs.readdir(path);
   let totalNumOfLines = 0;

   for (const file of files) {
      if (dotgit.ignore(file)) continue;

      const fullPath = join(path, file);
      const stat = await fs.lstat(fullPath);

      if (stat.isFile()) {
         if (!/\.((j|t)sx?|vue|s?css|html?)$/.test(file)) continue;
         if (/\.d.ts$/.test(file)) continue;

         const content = await fs.readFile(fullPath);
         const numberOfLines =
            content.toString().replace(/[^\r\n]/g, '').length / 2 + 1;
         totalNumOfLines += numberOfLines;

         if (log) console.log('File', fullPath + ':', numberOfLines);
      } else {
         const numberOfLines = await calculateNumOfLines(fullPath);
         totalNumOfLines += numberOfLines;
         if (log) console.log('Directory', fullPath + ':', numberOfLines);
      }
   }
   if (log)
      console.log(
         '\r\nTotal number of lines for html/css/js files\r\n',
         `\b${path}:`,
         totalNumOfLines
      );
   return totalNumOfLines;
})(cwd, true);
