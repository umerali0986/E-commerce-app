DROP TABLE IF EXISTS product_category, products;

CREATE TABLE IF NOT EXISTS product_category(
	id serial,
	name varchar,
	constraint pk_product_category primary key (id)
);

CREATE TABLE IF NOT EXISTS products(
	id serial,
	name varchar,
	description text,
	price float,
	amount_in_stock int,
	category_id int,
	image_url varchar,
	created_date date,
	constraint pk_id primary key (id),
	constraint fk_product foreign key (category_id) references product_category(id)
);

insert into product_category (name) values ('BOOKS'), ('LAPTOP'),('IPAD'),('PHONE');

insert into products (name, description, price, amount_in_stock, category_id,
	image_url, created_date)
	values ('Java','Fundemental Java',23.0, 2, 1, 'imageurl',CURRENT_DATE),
			('HP','Hp coria 7 ',273.0, 3, 2, 'imageurl',CURRENT_DATE),
			('Apple','Mac 2024',503.0, 1, 3, 'imageurl',CURRENT_DATE),
			('Iphone','Iphone 16',1023.0, 2, 4, 'imageurl',CURRENT_DATE);