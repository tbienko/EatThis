#!/bin/bash

#Before running install:
#sudo apt-get install markdown node-less node-uglify

#compile documentation
DOCFILE="EatThis/doc.html"
> $DOCFILE #clear file
cat doc/head.html >> $DOCFILE
markdown doc/doc.md >> $DOCFILE
cat doc/footer.html >> $DOCFILE

#compile & minify less
for file in `find ./EatThis/style/ -name 'eatthis-*.less'`
do
	lessc $file > "${file%.*}.css"
	lessc -x $file > "${file%.*}.min.css"
done

#minify js
uglifyjs EatThis/js/eatthis.js > EatThis/js/eatthis.min.js
