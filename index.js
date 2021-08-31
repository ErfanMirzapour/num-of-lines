const fs = require('fs/promises');
const { join } = require('path');

const ignores = [
   '.git',
   'node_modules',
   '.vscode',
   '.nuxt',
   'build',
   'dist',
   'coverage',
];

const calculateNumOfLines = async (path, log = false) => {
   const files = await fs.readdir(path);
   let totalNumOfLines = 0;

   for (const file of files) {
      const fullPath = join(path, file);
      const stat = await fs.lstat(fullPath);

      if (stat.isFile()) {
         if (!/\.((j|t)sx?|vue|s?css|html?)$/.test(file)) continue;
         if (/\.d.ts$/.test(file)) continue;

         const content = await fs.readFile(fullPath);
         const numberOfLines =
            content.toString().replace(/[^\r\n]/g, '').length / 2;
         totalNumOfLines += numberOfLines;
         log && console.log('File', fullPath + ':', numberOfLines);
      } else {
         if (ignores.includes(file)) continue;
         const numberOfLines = await calculateNumOfLines(fullPath);
         totalNumOfLines += numberOfLines;
         log && console.log('Directory', fullPath + ':', numberOfLines);
      }
   }
   log &&
      console.log(
         '\r\nTotal number of lines for html/css/js files\r\n',
         `\b${path}:`,
         totalNumOfLines
      );
   return totalNumOfLines;
};

module.exports = calculateNumOfLines;
