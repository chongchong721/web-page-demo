from config import db
from sqlalchemy.dialects import mysql


class TypeCount(db.Model):
    __tablename__ = "type_count"
    type = db.Column(db.String(100), primary_key=True)
    percentage = db.Column(mysql.FLOAT)


class Rank(db.Model):
    __tablename__ = "rank_count"
    rank = db.Column(mysql.FLOAT)
    type = db.Column(db.String(100), primary_key=True)


class ReaderCount(db.Model):
    __tablename__ = "reader_num_by_category"
    avg_reader_num = db.Column(db.Integer)
    type = db.Column(db.String(100), primary_key=True)


class TopReaderNum(db.Model):
    __tablename__ = "top_reader_num"
    type = db.Column(db.String(100))
    book = db.Column(db.String(100), primary_key=True)
    reader_num = db.Column(db.Integer)
    author = db.Column(db.String(30))
    rank = db.Column(db.Integer)
    intro = db.Column(db.Text)


class FavAuthor(db.Model):
    __tablename__ = "top_Author"
    author = db.Column(db.String(20), primary_key=True)
    count = db.Column(db.Integer)


class NumbyPress(db.Model):
    __tablename__ = "count_books_by_press"
    press = db.Column(db.Text, primary_key=True)
    count = db.Column(db.Integer)


class NumbyRank(db.Model):
    __tablename__ = "top_rank"
    count = db.Column(db.Integer)
    rank = db.Column(mysql.FLOAT, primary_key=True)