CREATE DATABASE mandai_bird_park
    WITH 
    OWNER = pi
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.UTF-8'
    LC_CTYPE = 'en_US.UTF-8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

GRANT TEMPORARY, CONNECT ON DATABASE mandai_bird_park TO PUBLIC;

GRANT ALL ON DATABASE mandai_bird_park TO pi;