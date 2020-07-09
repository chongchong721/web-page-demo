from flask import Flask
from flask_sqlalchemy import SQLAlchemy

import pymysql

pymysql.install_as_MySQLdb()

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = "mysql://root:lazychao123456@47.96.147.148:3306/bigData"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)
