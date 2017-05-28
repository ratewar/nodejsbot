# nodejsbot Quick Start

## Pre-requisites

1. Node.js `v4.3.0` or later. https://nodejs.org/en/download/
2. Serverless CLI `v1.9.0` or later. You can run `npm install -g serverless` to install it once node is installed
3. An AWS account. If you don't already have one, you can sign up for a [free trial](https://aws.amazon.com/s/dm/optimization/server-side-test/free-tier/free_np/) that includes 1 million free Lambda requests per month.
4. **Set-up your [Provider Credentials](./credentials.md)**. [Watch the video on setting up credentials](https://www.youtube.com/watch?v=HSd9uYj2LJA)

## Create a new serverless service

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
