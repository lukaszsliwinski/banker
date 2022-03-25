# Banker

## About
The app gets stock quotes from website http://www.bankier.pl/gielda/notowania/akcje and render them in the table with name, code, price and date of download. Data are sent to local database. Above the table, there is a form for ascending and descending sort by name.

## Used technologies
Python 3.10<br>
Django 4.0.3<br>
SQLite3<br>
HTML5<br>
CSS3<br>
Javascript

## Setup and run (Windows)
1 Install Python 3.10<br><br>
2 Download repository
```bash
git clone https://github.com/lukaszsliwinski/banker
```
3 Go into main directory
```bash
cd banker
```
4 Create virtual environment with Python 3.10 (you can use any name)
```bash
py -3.10 -m venv name
```
&emsp;This may take a while<br><br>
5 Run virtual environment
```bash
name\scripts\activate
```
&emsp;Important! Keep virtual environment running always when you use app. To deactivate venv use:
```bash
deactivate
```
6 With venv kept running install required packages from requirements.txt file
```bash
pip install -r requirements.txt
```
&emsp;This may take a while<br><br>
7 Create database
```bash
python manage.py migrate
```
8 Create account
```bash
python manage.py createsuperuser
```
&emsp;Enter username, email adress and password that will be used later to log in administration panel<br><br>
9 Run application on localhost
```bash
python manage.py runserver
```
10 Enter https://127.0.0.1:8000 in browser to run the app<br><br>
11 Enter https://127.0.0.1:8000/admin in browser to log in administration panel