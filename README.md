![TheBot](https://raw.githubusercontent.com/ratewar/nodejsbot/master/machine.gif)


# nodejsbot Quick Start

 [GitHub Site](https://ratewar.github.io/nodejsbot/)

## Pre-requisites

1. Node.js `v4.3.0` or later. [Download](https://nodejs.org/en/download/)
2. Serverless CLI `v1.9.0` or later. You can run `npm install -g serverless` to install it once node is installed
3. An AWS account. If you don't already have one, you can sign up for a [free trial](https://aws.amazon.com/s/dm/optimization/server-side-test/free-tier/free_np/) that includes 1 million free Lambda requests per month.
4. **Set-up your Credentials**[AWS Docs](http://docs.aws.amazon.com/cli/latest/userguide/installing.html).
[Watch the video on setting up credentials Serverless](https://www.youtube.com/watch?v=HSd9uYj2LJA)


## Create a new chatbot using LEX and Lambda Screens provided by AWS (e.g. Creating OrderFlowers Bot)

1. Go to Lex console and select OrderFlowers as bot
2. Create a Lambda function by going to Lambda Console and using filter Lex and selecting OrderFlowerLex nodejs blueprint
3. Specify respective roles etc and test Lambda function using Lex Flower bot test event
4. Go to LEX console select OrderFlower bot and attach the Lambda Function to Initialization and validation code hook and confirmation
5. **Make sure you never chekin changes with your AWS access key and ID**
5. Build the bot and publish it by providing an alias name

## How to call the FlowerBot from your machine

1. There is a folder node_http
2. Got to folder make sure you have node installed 
3. Open app.js in your machine set your AWS access key, password and specify Bot Parameters like botName, alias etc in script.
4. Type node server when you are in teh folder and it will have a web server running at http://localhost:3000
5. Try your commands from the UI screen

## In case you want to deploy lambda function from your desktop instead of using AWS templates (use below instrcutions)

Create a new service using the Node.js template, specifying a unique name and an optional path for your service.

```bash
# Create a new Serverless Service/Project
$ serverless create --template aws-nodejs --path nodejsbot
# Change into the newly created directory
$ cd nodejsbot
# Replace handler.js and serverless.yml by the files provided in repo
File replaced by repo version
```

## Deploy, test and diagnose your service

1. **Deploy the Service**

  ```bash
  serverless deploy -v
  ```
2. Go to AWS console create a LEX Bot using Lex FlowerBot template

3. Attach the Lambda function created with the Bot

4. Test the chatbot and refer Cloudwatch logs


## Cleanup

If at any point, you no longer need your service, you can run the following command to remove the Functions, Events and Resources that were created, and ensure that you don't incur any unexpected charges.

```bash
serverless remove
```
