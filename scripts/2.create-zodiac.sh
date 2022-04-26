#!/usr/bin/env bash
set -e

echo
echo 'About to call createZodiac() on the contract to create a zodiac'
echo
echo \$CONTRACT is $CONTRACT
echo
# near call $CONTRACT createZodiac '{"brtDay":12, "brtMonth": "january"}' --accountId $CONTRACT --amount 1
near call $CONTRACT createZodiac '{"brtDay":12, "brtMonth": "january"}' --accountId $CONTRACT --amount 1
# save the id of the created zodiac 
echo 'Save the id of the created zodiac so you can call it later'