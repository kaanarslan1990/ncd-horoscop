#!/usr/bin/env bash
set -e

echo
echo 'About to call zodiacSign() on the contract to find your zodiac'
echo
echo \$CONTRACT is $CONTRACT
echo
# near call $CONTRACT  create '{"name" : "plant trees" ,"address" : "greeting.rashaabdulrazzak.testnet", "funds" : "500", "description" : "Let us make the environment cleaner"}' --account_id $CONTRACT
near call $CONTRACT zodiacSign '{"brtDay":12, "brtMonth": "january"}' --accountId $CONTRACT --amount 1
# save the id of the created zodiac 
echo 'Save the id of the created zodiac so you can call it later'