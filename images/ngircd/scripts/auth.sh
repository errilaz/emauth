#!/bin/sh
IMAP_PASSWORD=`cat -`
source /scripts/environment
IMAP_LOG=$(openssl s_client -quiet -crlf -connect "$IMAP_HOST:$IMAP_PORT" <<EOF
A1 LOGIN $PAM_USER $IMAP_PASSWORD
A2 LOGOUT
EOF
)
if echo $IMAP_LOG | grep "A1 OK" - > /dev/null; then
  exit 0
fi
exit 1