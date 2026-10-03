FROM httpd:latest
RUN apt update
COPY . /usr/local/apache2/htdocs/