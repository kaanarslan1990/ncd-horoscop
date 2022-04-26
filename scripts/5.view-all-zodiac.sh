#!/usr/bin/env bash
set -e

echo
echo 'About to view viewAllZodiacs'
echo
echo \$CONTRACT is $CONTRACT
echo
# near view $CONTRACT viewAllZodiacs
near view $CONTRACT viewAllZodiacs
# view all created zodiac 
echo 'All created zodiac which in zodiacs array'