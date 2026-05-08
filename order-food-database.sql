create database quickbite;
use quickbite;
create table customers (
    customer_id int primary key,
    name varchar(50),
    email varchar(100),
    city varchar(50)
);
create table restaurants (
    restaurant_id int primary key,
    name varchar(50),
    cuisine_type varchar(50),
    city varchar(50)
);
create table orders (
    order_id int primary key,
    customer_id int,
    restaurant_id int,
    order_amount int,
    order_date date,
    
    foreign key (customer_id) references customers(customer_id),
    foreign key (restaurant_id) references restaurants(restaurant_id)
);
insert into customers values
(1, 'Amit Sharma', 'amit@gmail.com', 'Delhi'),
(2, 'Priya Singh', 'priya@gmail.com', 'Mumbai'),
(3, 'Rahul Das', 'rahul@gmail.com', 'Kolkata');

insert into orders values
(1001, 1, 101, 500, '2026-04-01'),
(1002, 2, 102, 800, '2026-04-02'),
(1003, 3, 103, 650, '2026-04-03');

insert into restaurants values
(101, 'Spice Hub', 'Indian', 'Delhi'),
(102, 'Pizza World', 'Italian', 'Mumbai'),
(103, 'Dragon Bowl', 'Chinese', 'Kolkata');

select * from customers;
select * from restaurants;
select * from orders;

select 
    c.name as customer,
    r.name as restaurant,
    o.order_amount,
    o.order_date
from orders o
join customers c on o.customer_id = c.customer_id
join restaurants r on o.restaurant_id = r.restaurant_id;
