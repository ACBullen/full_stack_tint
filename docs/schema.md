# Database Schema

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## Postings
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign id, indexed
type            | string    | not_null
post_id         | integer   | not null, foreign id, indexed

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

## Text Posts
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
title           | string    | not null
body            | text      | not null

### Text Post Media
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
text_post_id    | integer   | not null, foreign id, indexed
type            | string    | not_null
media_post_id   | integer   | not null, foreign id, indexed

## Quote Posts
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
quote           | text      | not null
author          | text      | not null

## Link Posts
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
link            | string    | not null
description     | text      |

## Video Posts
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
video           | string    | not null
desc            | text      |

## Audio Posts
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
audio           | string    | not null
title           | string    | not null
desc            | text      |

## Image Posts
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
image           | string    | not null
desc            | text      |
