
# Main Idea

A new generation web3 blog application.You can find your zodiac with your birthday and birth month.
##### Video Link: https://www.loom.com/share/6d9ca45fd7ad41dbb98bc6a6956d7fb2
<br>   

## How to Use:
### Prerequisites:
1. npm
2. Current version of Node.js
3. yarn <br>
to install:  npm install --global yarn (or just npm i -g yarn)
4. You need near-cli installed globally. Here's how:<br>
npm install --global near-cli
This will give you the near CLI tool. Ensure that it's installed with:
near --version
### Usage
<br>

1. Clone the repository.

``` 
  git clone https://github.com/kaanarslan1990/ncd-horoscop.git
  ```
  
2. After cloning the project please run
```
yarn
```

in order to install all of the necessary packages for the project to run correctly.

## Building and Deploying the contract
The contract is located in under the ***src/simple/assembly*** folder, after editing the contract you can run
```
    yarn build:release
```
in order to build the contract and get the ***.wasm*** file , if you want to build and deploy the contract at the same time, you can run 
```
   near dev-deploy ./build/release/simple.wasm
````
This will create a test account and deploy the contract into it.

after the contract is deployed, it is necessary to run the following command in the terminal in order to be able to run the contract
```
    export CONTRACT=dev-1650833645152-17014741291409
````
where the **ACCOUNT_ID** will be returned after the contract deployment

# Functions
### 1. Create Your *Zodiac*: 

 - Take  ***brtDay and brtMOnth*** as parameter
 - Returns ***yourZodiac***.

### Example call *creteZodiac*:
```
near call $CONTRACT createZodiac '{"brtDay":12, "brtMonth": "january"}' --accountId $CONTRACT
```
**If you don not attached 1 Near example return assert:**
```
ExecutionError: 'Smart contract panicked: Please deposit exactly 1 NEAR to find your zodiac, filename: "src/simple/assembly/index.ts" line: 19 col: 3'

```
### Example call *creteZodiac*:
```
near call $CONTRACT createZodiac '{"brtDay":12, "brtMonth": "january"}' --accountId $CONTRACT
```
**If you attached 1 Near example return :**
```
{
  id: 2741338224,
  name: 'dev-1650833645152-17014741291409',
  brtDay: 12,
  brtMonth: 'january',
  yourZodiac: 'Your Zodiac sign is : Capricorn'
}


```
### 2.  Example call *zodiacSign*
**If you do not attached 1 Near example:**
```
near call $CONTRACT zodiacSign '{"brtDay":12, "brtMonth": "january"}' --accountId $CONTRACT
```
**Example return:**
```
ExecutionError: 'Smart contract panicked: Please deposit exactly 1 NEAR to find your zodiac, filename: "src/simple/assembly/index.ts" line: 19 col: 3'

```
**If you attached 1 Near example:**
```
near call $CONTRACT zodiacSign '{"brtDay":12, "brtMonth": "january"}' --accountId $CONTRACT --amount 1
```
**Example return:**
```
'Your Zodiac sign is : Capricorn'

```

### 3.  Example call zodiac with id *viewZodiac(id:32):*
```
near call $CONTRACT viewZodiac '{"id": 509857559}' --accountId $CONTRACT
```
return:
```
{
  id: 509857559,
  name: 'dev-1650834698681-25611062520036',
  brtDay: 22,
  brtMonth: 'february',
  yourZodiac: 'Your Zodiac sign is : pisces'
}
```
### 4.  Example call all zodiacs *viewAllZodiacs:*
```
near call $CONTRACT viewAllZodiacs --accountId $CONTRACT
```
return:
```
[
  {
    id: 509857559,
    name: 'dev-1650834698681-25611062520036',
    brtDay: 22,
    brtMonth: 'february',
    yourZodiac: 'Your Zodiac sign is : pisces'
  }
]
```
 

# Used Technology:
* Near sdk.
* Near cli.
* Near-api-js.
* Assemply script for writing the contract.


