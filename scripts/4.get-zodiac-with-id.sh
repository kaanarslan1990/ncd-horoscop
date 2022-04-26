#!/usr/bin/env bash
set -e

echo
echo 'About to call zodiacSign() on the contract to find your zodiac'
echo
echo \$CONTRACT is $CONTRACT
echo
echo
echo 'If you want to see a zodiac created before, you must change id value in script'
echo
# near call $CONTRACT  create '{"name" : "plant trees" ,"address" : "greeting.rashaabdulrazzak.testnet", "funds" : "500", "description" : "Let us make the environment cleaner"}' --account_id $CONTRACT
near view $CONTRACT viewZodiac '{"id": zodiac_id}'
# save the id of the created zodiac 
echo 'Save the id of the created zodiac so you can call it later'