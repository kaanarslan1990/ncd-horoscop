#!/usr/bin/env bash
set -e

echo
echo 'About to call zodiacSign() on the contract to find your zodiac sign'
echo
echo \$CONTRACT is $CONTRACT
echo
# near call $CONTRACT zodiacSign '{"brtDay":12, "brtMonth": "january"}' --accountId $CONTRACT --amount 1
near call $CONTRACT zodiacSign '{"brtDay":12, "brtMonth": "january"}' --accountId $CONTRACT --amount 1
# find your zodiac sign only
echo 'Your zodiac sign returned'