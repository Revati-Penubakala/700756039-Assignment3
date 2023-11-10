import json
import boto3


dynamodb = boto3.resource('dynamodb')

table = dynamodb.Table('Books')

def lambda_handler(event, context):


   book_name=event['book_name']
   author=event['author']
   year=event['year']
   

   response = table.put_item(
       Item={
           'book_name': book_name,
           'author':author,
           'year':year
           })


   return {
       'statusCode': 200,
       'body': json.dumps('successful')
   }