FROM alpine:3.16

RUN apk --no-cache add curl autoconf automake pkgconfig \
  openssl make gcc g++ openssl-dev linux-pam-dev

WORKDIR /opt
RUN \
  curl -L  https://github.com/ngircd/ngircd/archive/refs/tags/rel-26.1.tar.gz -o ngircd.tgz && \
  tar xvf ngircd.tgz && \
  mv /opt/ngircd-rel-26.1 /opt/ngircd

WORKDIR /opt/ngircd
RUN \
  ./autogen.sh && \
  ./configure --with-openssl --with-pam && \
  make && \
  make install

WORKDIR /scripts

RUN \
  rm /opt/ngircd.tgz && \
  rm -rf /opt/ngircd

COPY scripts /scripts
COPY etc/pam.d /etc/pam.d

EXPOSE 6667
EXPOSE 6697

VOLUME ["/config/ngircd"]

CMD [ "/scripts/start.sh" ]
