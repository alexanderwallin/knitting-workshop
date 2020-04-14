file=$1
IFS="\n"
while read url; do echo ${url/(\.jpg)$/$1}; done < $file
