# Emauth

> Resources for [simple, cheap same sign-on with email](https://da.nfin.ch/blog/sso-with-email.html).

## Projects

This repository contains helpful packages & container images to support
email authentication.

### Node Packages

- [emauth-authenticate](libraries/authenticate): Authenticates through IMAP. Tiny with no dependencies.

### Docker Images

- [emauth-ngircd](images/ngircd): Uses ngircd's PAM support to authenticate through IMAP.

## Servers

A list of other open source servers that already support email-based authentication natively
or through plugins.

<table>
  <thead>
    <tr>
      <th>Server</th>
      <th>Purpose</th>
      <th>Auth Method</th>
      <th>Stars</th>
      <th>Activity</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>NextCloud</td>
      <td>File sync + Office suite</td>
      <td>IMAP (plugin)</td>
      <td><img src="https://img.shields.io/github/stars/nextcloud/server?style=flat-square"></td>
      <td><img src="https://img.shields.io/github/last-commit/nextcloud/server?style=flat-square"></td>
    </tr>
    <tr>
      <td>Gogs</td>
      <td>Git hosting</td>
      <td>SMTP</td>
      <td><img src="https://img.shields.io/github/stars/gogs/gogs?style=flat-square"></td>
      <td><img src="https://img.shields.io/github/last-commit/gogs/gogs?style=flat-square"></td>
    </tr>
    <tr>
      <td>Gitea</td>
      <td>Git hosting</td>
      <td>SMTP</td>
      <td><img src="https://img.shields.io/github/stars/go-gitea/gitea?style=flat-square"></td>
      <td><img src="https://img.shields.io/github/last-commit/go-gitea/gitea?style=flat-square"></td>
    </tr>
    <tr>
      <td>Kanboard</td>
      <td>Project Management</td>
      <td>SMTP (plugin)</td>
      <td><img src="https://img.shields.io/github/stars/kanboard/kanboard?style=flat-square"></td>
      <td><img src="https://img.shields.io/github/last-commit/kanboard/kanboard?style=flat-square"></td>
    </tr>
  </tbody>
</table>

## TODO

- [ ] HTTP bridge
- [ ] SSH bridge
- [ ] Verdaccio authentication plugin

## Links

- [Awesome Self Hosted](https://github.com/awesome-selfhosted/awesome-selfhosted)
