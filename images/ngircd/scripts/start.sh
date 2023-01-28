#!/bin/sh
printenv > /scripts/environment
ngircd -f /config/ngircd/ngircd.conf -n