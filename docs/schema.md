# Database Schema

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
profile_pic     | string    | not null
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## Followings
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
follower_id     | integer   | not null, foreign id, indexed
followee_id     | integer   | not null, foreign id, indexed

## Likings
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
post_id         | integer   | not null, foreign id, indexed
user_id         | integer   | not null, foreign id, indexed

## Post
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
post_type       | string    | not null
title           | string    |
body            | text      |
link_url        | string    |
media_link      | string    |
user_id         | integer   | not null, foreign id, indexed
