# TugasWeek8 - Express JS dan Integrasi Database

Pada homework kali ini akan membuat aplikasi Express JS untuk 
menampilkan data pada halaman web yang didapatkan dari mengakses database. Selain itu 
seeding dan migrasi database akan dilakukan pada database sebagai best practice 
pembuatan aplikasi backend

Buatlah sebuah aplikasi Express JS yang dapat menampilkan data text pada halaman web 
yang didapatkan dari sampel data [ini](https://github.com/fathy17/rakamin-expressjs/blob/master/dvdrental.tar).

Soal 1: Lakukan seeding untuk menambahkan 5 data baru pada data table actor yang 
disediakan

INSERT INTO actor (actor_id, first_name, last_name, last_update)
VALUES
    (201, 'Nabilah', 'Thahirah', '2023-09-26 15:30:00'),
    (202, 'Ahmad', 'Rahman', '2023-09-26 16:45:00'),
    (203, 'Siti', 'Wahida', '2023-09-26 17:15:00'),
    (204, 'Muhammad', 'Iqbal', '2023-09-26 18:20:00'),
    (205, 'Lina', 'Sari', '2023-09-26 19:00:00');

Soal 2 : Buatlah query untuk menampilkan data pada database sebagai berikut.
1. Menampilkan data seluruh list film
   Membuka localhost:3000/film
   
2. Menampilkan data film tertentu berdasarkan id
   Membuka localhost:3000/film/3
   
5. Menampilkan data list category
   Membuka localhost:3000/categori
   
7. Menampilkan data list film berdasarkan category
Implementasikan routing yang sesuai dan benar pada aplikasi yang teman-teman buat.

Soal 3: Lakukan migrasi database dengan menambahkan column age pada tabel actor yang 
tersedia

ALTER TABLE actor
ADD COLUMN age int;

