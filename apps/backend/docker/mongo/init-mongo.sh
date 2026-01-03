#!/bin/bash
mongosh --eval '
use admin;
db.createUser({
  user: "admin",
  pwd: "admin",
  roles: [
    { role: "root", db: "admin" },
    { role: "dbOwner", db: "easy-app" },
    { role: "readWrite", db: "easy-app" },
    { role: "dbAdmin", db: "easy-app" }
  ]
});
'
