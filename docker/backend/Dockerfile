FROM dunglas/frankenphp:latest

WORKDIR /var/www/html

RUN apt-get update && apt-get install -y --no-install-recommends \
    netcat-openbsd \
    && rm -rf /var/lib/apt/lists/*

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

COPY composer.json ./
RUN composer install --no-dev --optimize-autoloader --no-scripts --no-interaction

COPY . .
RUN composer run-script post-autoload-dump 2>/dev/null || true

ADD https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh /usr/local/bin/wait-for-it.sh
RUN chmod +x /usr/local/bin/wait-for-it.sh

COPY docker/backend/Caddyfile /etc/caddy/Caddyfile

EXPOSE 80

CMD ["sh", "-c", "wait-for-it.sh $DB_HOST:$DB_PORT -- php artisan migrate --force && frankenphp run --config /etc/caddy/Caddyfile"]
