import mysql.connector
from mysql.connector import errorcode
from flask import Flask, render_template, flash

# mudar valores das variaveis de acordo com seus dados
servername = 'localhost'
username = 'root'
password = 'admin'
database = 'yuri_testes'

db_connection = mysql.connector.connect(host=servername, user=username, password=password, database=database)
cursor = db_connection.cursor()

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def main():
    return "Hello, World!"

if __name__ == "__main__":
    app.run(Debug=True)
