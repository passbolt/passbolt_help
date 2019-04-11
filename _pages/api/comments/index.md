---
title: Comments
layout: api
category: api
slug: comments
permalink: /api/comments/index.html
---

The Comments endpoint is used manage comments posted on Resources. 

## The Comment Object

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                Attribute
            </td>
            <td>
                Type
            </td>
            <td>
                Description
            </td>
            <td>
                Format
            </td>
        </tr>
        <tr>
            <td>
                id
            </td>
            <td>
                String
            </td>
            <td>
                Unique ID of the group in UUID format.
            </td>
            <td>
                UUID
            </td>
        </tr>
        <tr>
            <td>
                parent_id
            </td>
            <td>
                String
            </td>
            <td>
                Parent comment's UUID for child(nested) comment
            </td>
            <td>
                UUID
            </td>
        </tr>
        <tr>
            <td>
                foreign_key
            </td>
            <td>
                String
            </td>
            <td>
                UUID of the Resource where the comment is posted
            </td>
            <td>
                UUID
            </td>
        </tr>
        <tr>
            <td>
                content
            </td>
            <td>
                String
            </td>
            <td>
                The comment text.
            </td>
            <td>
                Plaintext
            </td>
        </tr>
        <tr>
            <td>
                foreign_model
            </td>
            <td>
                String
            </td>
            <td>
                Can only be "Resource"
            </td>
            <td>
                UUID
            </td>
        </tr>
        <tr>
            <td>
                created
            </td>
            <td>
                String
            </td>
            <td>
                Datetime when the group was created
            </td>
            <td>
                <a 
                            href="https://en.wikipedia.org/wiki/ISO_8601&amp;sa=D&amp;ust=1554900189888000">ISO
                            8601</a>Datetime format<br/>
                2014-02-01T09:28:56.321-10:00
            </td>
        </tr>
        <tr>
            <td>
                created_by
            </td>
            <td>
                String
            </td>
            <td>
                UUID of the user who created the group
            </td>
            <td>
                UUID
            </td>
        </tr>
        <tr>
            <td>
                user_id
            </td>
            <td>
                String
            </td>
            <td>
                UUID of the user
            </td>
            <td>
                UUID
            </td>
        </tr>
        <tr>
            <td>
                modified
            </td>
            <td>
                String
            </td>
            <td>
                Datetime when the group was last modified
            </td>
            <td>
                <a
                            href="https://en.wikipedia.org/wiki/ISO_8601&amp;sa=D&amp;ust=1554900189897000">ISO
                            8601</a>&nbsp;Datetime format<br/>
                2014-02-01T09:28:56.321-10:00
            </td>
        </tr>
        <tr>
            <td>
                modified_by
            </td>
            <td>
                String
            </td>
            <td>
                UUID of the user who last modified the group
            </td>
            <td>
                UUID
            </td>
        </tr>
        <tr>
            <td>
                children
            </td>
            <td>
                Array
            </td>
            <td>
                Child(nested) comments
            </td>
            <td>
            Array of Comment objects
            </td>
        </tr>
    </tbody>
</table>

## List all comments on a Resource

To fetch a list of all the comments posted on a Resource, you can make a **GET** request to /comments/resource/<resourceId>.json

```
GET /comments/resource/<resourceId>.json
```

### Request Parameters:

The endpoint takes the following parameters


<table class="table-parameters">
  <tr>
   <td>Param
   </td>
   <td>Description
   </td>
   <td>Required
   </td>
   <td>Type
   </td>
  </tr>
  <tr>
   <td>api-version
   </td>
   <td>The API version to target
   </td>
   <td>No
   </td>
   <td>String
   </td>
  </tr>
  <tr>
   <td>contain
   </td>
   <td>Dictates the fields to be included in the search result
   </td>
   <td>No
   </td>
   <td>Array
   </td>
  </tr>
  <tr>
   <td>contain[creator]
   </td>
   <td>Whether to include the User Id of the user who created the comment.
   </td>
   <td>No
   </td>
   <td>Boolean
   </td>
  </tr>
  <tr>
   <td>contain[modifier]
   </td>
   <td>Whether to include the User Id of the user who modified the comment last.
   </td>
   <td>No
   </td>
   <td>Boolean
   </td>
  </tr>
</table>



### Example Request:

So a request to fetch all comments posted on a Resource identified by id ecf0ed85-3bfc-5f45-b11d-74e9a86aa313 and to



*   include **Creator**
*   Using api-version v2

will look like this:

```bash
https://api.passbolt.com/comments/resource/ecf0ed85-3bfc-5f45-b11d-74e9a86aa313.json?
  contain[creator]=1&
  api-version=v2
```

A successful response will have an array of json objects. Each representing a single group. Something like this example below

```json
{
    "header": {
        "id": "f9a8c7b1-ccf4-434b-aa7c-0e0926aff8ae",
        "status": "success",
        "servertime": 1554984913,
        "title": "app_comments_view_success",
        "action": "69692f38-cbbc-53c7-a44d-68164b57a091",
        "message": "The operation was successful.",
        "url": "\/comments\/resource\/8e3874ae-4b40-590b-968a-418f704b9d9a.json?api-version=v2",
        "code": 200
    },
    "body": [
        {
            "id": "7e740d3d-f6dc-4172-a6ed-ab629a823f85",
            "parent_id": null,
            "foreign_key": "8e3874ae-4b40-590b-968a-418f704b9d9a",
            "foreign_model": "Resource",
            "content": "This is a test comment",
            "created": "2019-04-09T06:43:18+00:00",
            "modified": "2019-04-09T06:43:18+00:00",
            "created_by": "f848277c-5398-58f8-a82a-72397af2d450",
            "modified_by": "f848277c-5398-58f8-a82a-72397af2d450",
            "user_id": "f848277c-5398-58f8-a82a-72397af2d450",
            "children": []
        },
        {
            "id": "da213c84-3d61-596e-882b-f870c26bd0f5",
            "parent_id": null,
            "foreign_key": "8e3874ae-4b40-590b-968a-418f704b9d9a",
            "foreign_model": "Resource",
            "content": "this is a short comment",
            "created": "2012-11-25T13:39:25+00:00",
            "modified": "2012-11-25T13:39:25+00:00",
            "created_by": "904bcd9f-ff51-5cfd-9de8-d2c876ade498",
            "modified_by": "904bcd9f-ff51-5cfd-9de8-d2c876ade498",
            "user_id": "904bcd9f-ff51-5cfd-9de8-d2c876ade498",
            "children": [
                {
                    "id": "1dd295f0-4d4e-51b3-b0ca-b0a9763b560c",
                    "parent_id": "da213c84-3d61-596e-882b-f870c26bd0f5",
                    "foreign_key": "8e3874ae-4b40-590b-968a-418f704b9d9a",
                    "foreign_model": "Resource",
                    "content": "this is a reply to the short comment",
                    "created": "2012-11-25T13:39:26+00:00",
                    "modified": "2012-11-25T13:39:26+00:00",
                    "created_by": "904bcd9f-ff51-5cfd-9de8-d2c876ade498",
                    "modified_by": "904bcd9f-ff51-5cfd-9de8-d2c876ade498",
                    "user_id": "904bcd9f-ff51-5cfd-9de8-d2c876ade498",
                    "children": []
                }
            ]
        }
    ]
}
```



### Possible Responses:


<table class="table-parameters">
  <tr>
   <td>Code
   </td>
   <td>Description
   </td>
  </tr>
  <tr>
   <td>200
   </td>
   <td>OK

Request went through. The response payload will contain a list of matching comments.
   </td>
  </tr>
  <tr>
   <td>403
   </td>
   <td>Authentication Failure

The user making the request is not authenticated.
   </td>
  </tr>
</table>



## Creating a new Comment

To create a new comment on a resource, make a POST request to /comments/resource/<resourceId>.json with the comment data in request body. The request body expects the following parameters

```
POST /comments/resource/<resourceId>.json
```


<table class="table-parameters">
  <tr>
   <td>Parameter
   </td>
   <td>Description
   </td>
   <td>Required
   </td>
   <td>Validation Constraints
   </td>
  </tr>
  <tr>
   <td>content
   </td>
   <td>Comment text
   </td>
   <td>Yes
   </td>
   <td>1. Valid utf8 string

2. Must not exceed 255 characters
   </td>
  </tr>
</table>


A successful request must pass all the validation checks. For example sending a blank request body will return

```json
{
    "header": {
        "id": "c12fc0f8-ea1d-49aa-a756-6632a5a806f5",
        "status": "error",
        "servertime": 1554985568,
        "title": "app_comments_addPost_error",
        "action": "10369fc0-dcec-5bc0-8bb6-bd2809d51d5f",
        "message": "Could not validate user data.",
        "url": "\/comments\/resource\/8e3874ae-4b40-590b-968a-418f704b9d9a.json?api-version=v2",
        "code": 400
    },
    "body": {
        "content": {
            "_empty": "The content should not be empty"
        }
    }
}
```


And a valid request body will look like

```json
{
  "content": "Comment posted via passbolt API"
}
```

### Possible Responses:


<table class="table-parameters">
  <tr>
   <td>Code
   </td>
   <td>Description
   </td>
  </tr>
  <tr>
   <td>200
   </td>
   <td>OK

The Comment was created. The response body will contain the newly created comment object
   </td>
  </tr>
  <tr>
   <td>400
   </td>
   <td>Bad Request

Some of the data validation failed. Check debug headers for more info
   </td>
  </tr>
  <tr>
   <td>403
   </td>
   <td>Authentication Failure

The user making the request is not authenticated
   </td>
  </tr>
</table>



## Update a Comment

A Comment can be updated by sending the PUT request to /comments/<commentId>.json.

```
PUT /comments/<commentId>.json
```

The request body contains the new data to be updated. The request body schema is same as that of [creating a new Comment](#creating-a-new-comment).

In order to be able to update, the user making the request must have sufficient permission to update it.


### Possible Responses:

<table class="table-parameters">
  <tr>
   <td>Code
   </td>
   <td>Description
   </td>
  </tr>
  <tr>
   <td>200
   </td>
   <td>OK<br/>
The Comment was created. The response body will contain the newly created comment object
   </td>
  </tr>
  <tr>
   <td>400
   </td>
   <td>Bad Request
      <ul>
        <li>The commentId is not a valid UUID</li>
        <li>Some of the data validation failed. Check debug headers for more info</li>
      </ul>
   </td>
  </tr>
  <tr>
   <td>403
   </td>
   <td>Authentication Failure

The user making the request is not authenticated
   </td>
  </tr>
  <tr>
   <td>404
   </td>
   <td>Not Found

A Comment with the given commentId was not found.
   </td>
  </tr>
</table>



## Delete a Comment

A Comment can be deleted subject to relevant permissions by sending a DELETE request to /comments/commentId.json

```
DELETE /comments/commentId.json
```

### Comment Deletion Constraints:

A Comment can only be deleted by it’s owner.


### Possible Responses:


<table class="table-parameters">
  <tr>
   <td>Code
   </td>
   <td>Description
   </td>
  </tr>
  <tr>
   <td>200
   </td>
   <td>OK<br/>

Comment deleted successfully.
   </td>
  </tr>
  <tr>
   <td>400
   </td>
   <td>Bad Request<br/>

The commentId supplied is not a valid UUID
   </td>
  </tr>
  <tr>
   <td>403
   </td>
   <td>Authentication Failure<br/>

The user making the request is not authenticated
   </td>
  </tr>
  <tr>
   <td>404
   </td>
   <td>Not Found<br/>

The comment either does not exist or the user making the request does not have delete permission.
   </td>
  </tr>
</table>


