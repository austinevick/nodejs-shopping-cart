CREATE TABLE
    restaurants (
        id BIGSERIAL NOT NULL PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        description VARCHAR(50),
        location VARCHAR(50) NOT NULL,
        price_range INT NOT NULL CHECK (
            price_range >= 1
            AND price_range <= 5
        )
    );

ALTER TABLE restaurants
ADD COLUMN description VARCHAR(250);

INSERT INTO
    restaurants (id, name, description, location, price_range)
VALUES
    (
        1,
        'McDonalds',
        'A nice place to be',
        'New York',
        20
    );