FROM dunglas/frankenphp:latest

WORKDIR /var/www/html

RUN apt-get update && apt-get install -y --no-install-recommends \
    netcat-openbsd unzip zip \
    && rm -rf /var/lib/apt/lists/* \
    && install-php-extensions pdo_mysql redis bcmath opcache

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

ADD https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh /usr/local/bin/wait-for-it.sh
RUN chmod +x /usr/local/bin/wait-for-it.sh

COPY backend/ .

RUN composer install --no-dev --optimize-autoloader --no-interaction

EXPOSE 80

CMD ["sh", "-c", "wait-for-it.sh $DB_HOST:$DB_PORT -- php artisan migrate --force && frankenphp run --config /etc/caddy/Caddyfile"]
