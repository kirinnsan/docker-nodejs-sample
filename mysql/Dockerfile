#使うDockerイメージ
FROM mysql:5.7

# 初期実行のファイルをコピー
COPY ./db/* /docker-entrypoint-initdb.d/

ADD ./my.cnf /etc/mysql/my.cnf

RUN chmod 644 /etc/mysql/my.cnf

#docker runに実行される
CMD ["mysqld"]