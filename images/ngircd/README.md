# emauth-ngircd

[Docker Hub](https://hub.docker.com/repository/docker/errilaz/emauth-ngircd) (errilaz/emauth-ngircd)

[GitHub](https://github.com/errilaz/emauth/tree/master/images/ngircd) source code

This is an ngIRCd image built with PAM support and bundled with
scripts that authenticate against a specified IMAP server.

It expects the environment variables:

- `IMAP_HOST`
- `IMAP_PORT`

`/config/ngircd/ngircd.conf` is where it expects the config file to be.
