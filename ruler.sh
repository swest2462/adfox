#!/bin/bash
# Take user parameters or set defaults
rulername="$1"
rulerlength="$2"
rulername="${rulername:=ruler.gif}"
rulerlength="${rulerlength:=572}"
drawstring=""
#Build the line definitions for the ruler marks
for x1 in `seq 0 72 $rulerlength`; do
  drawstring="$drawstring line $x1,70 $x1,100"
  for x2 in 0 36; do
    (( offset = $x1 + $x2 ))
    drawstring="$drawstring line $offset,80 $offset,100"
    for x3 in `seq 6 6 30`; do
      (( offset2 = $offset + $x3 ))
      drawstring="$drawstring line $offset2,90 $offset2,100"
    done
  done
done
#Add the labels
labelfont="-fill black -font helvetica -pointsize 24  -draw"
labelstring="text 0,60 '0' "
for x3 in 72; do
  offset3=$(($x3 - 12 ))
  labelstring="$labelstring text $offset3,60 '$x3' "
done
for x4 in `seq 144 72 $rulerlength`; do
  offset4=$(( $x4 - 18 ))
  labelstring="$labelstring text $offset4,60 '$x4' "
done
#Add a title
titledimension=$(convert -size 572x100 xc:lightgray -font helvetica \
  -pointsize 36  -fill black -undercolor lavender\
  -annotate +40+50 'Test Banner' -trim info: | awk ' {print $3 } ')
titlewidth=${titledimension%x*}
titlefont="-fill Red -font helvetica -pointsize 36"  
titlepos=$(( (($rulerlength - $titlewidth)) / 2 ))
titletext="text $titlepos,30 'Test Banner' "
#Create the ruler
convert -size "${rulerlength}x100" xc:lightgray \
 -fill black  -draw "$drawstring" $labelfont "$labelstring" \
 $titlefont -draw "$titletext" "$rulername"
