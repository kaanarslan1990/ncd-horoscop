#!/usr/bin/env bash
set -e

echo
echo 'About to view viewZodiac on the contract to view your created zodiac'
echo
echo \$CONTRACT is $CONTRACT
echo
echo
echo 'If you want to see a zodiac created before, you must change id value in script'
echo
# near view $CONTRACT viewZodiac '{"id": zodiac_id}'
near view $CONTRACT viewZodiac '{"id": 2840125053}'
# diplay the created zodiac 
echo 'View the created zodiac with id'