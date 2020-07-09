
import json

from flask import Blueprint
from config import db
from dbmodel.model import TypeCount, Rank, ReaderCount, TopReaderNum, FavAuthor, NumbyPress, NumbyRank

data_provider = Blueprint('data_provider', __name__)


@data_provider.route("/get_type_count", endpoint="get_type_count")
def get_type_count():
    dic = {}
    dic["type"] = []
    dic["percentage"] = []
    data = db.session.query(TypeCount).all()
    for item in data:
        dic["type"].append(item.type)
        dic["percentage"].append(item.percentage)

    return json.dumps(dic)


@data_provider.route("/get_rank", endpoint="get_rank")
def get_rank():
    dic = {}
    dic["type"] = []
    dic["rank"] = []
    data = db.session.query(Rank).order_by(Rank.rank.asc()).all()
    for item in data:
        dic["type"].append(item.type)
        dic["rank"].append(item.rank)

    return json.dumps(dic)


@data_provider.route("/get_reader_count", endpoint="get_reader_count")
def get_reader_count():
    dic = {}
    dic["type"] = []
    dic["reader"] = []
    data = db.session.query(ReaderCount).all()
    for item in data:
        dic["type"].append(item.type)
        dic["reader"].append(item.avg_reader_num)

    return json.dumps(dic)


# @data_provider.route("/get_top_reader_num", endpoint="get_top_reader_num")
# def get_top_reader_num():
#     dic = {}
#     dic["type"] = []
#     dic["reader_num"] = []
#     dic["book"] = []
#     data = db.session.query(TopReaderNum).order_by(TopReaderNum.reader_num.desc()).all()
#     for item in data:
#         dic["type"].append(item.type)
#         dic["reader_num"].append(item.reader_num)
#         dic["book"].append(item.book)
#
#     return json.dumps(dic)

@data_provider.route("/get_top_reader_num", endpoint="get_top_reader_num")
def get_top_reader_num():
    book_list = []
    data = db.session.query(TopReaderNum).order_by(TopReaderNum.reader_num.desc()).all()
    for item in data:
        mydic = {}
        mydic.update({'image': item.reader_num, 'book': item.book, 'author': item.author,
                      'type': item.type, 'rank': item.rank, 'num': item.reader_num, 'intro': item.intro})
        book_list.append(mydic)

    return json.dumps(book_list)


@data_provider.route("/get_fav_author", endpoint="get_fav_author")
def get_fav_author():
    author_list=[]
    data = db.session.query(FavAuthor).all()
    for item in data:
        mydic = {}
        mydic.update({'value': item.count, 'name': item.author})
        author_list.append(mydic)
    return json.dumps(author_list)


@data_provider.route("/get_num_by_press", endpoint="get_num_by_press")
def get_city_count():
    dic = {}
    dic["count"] = []
    dic["press"] = []
    data = db.session.query(NumbyPress).all()
    for item in data:
        dic["count"].append(item.count)
        dic["press"].append(item.press)

    return json.dumps(dic)


@data_provider.route("/get_num_by_rank", endpoint="get_num_by_rank")
def get_num_by_rank():
    dic = {}
    dic["count"] = []
    dic["rank"] = []
    data = db.session.query(NumbyRank).order_by(NumbyRank.rank.asc()).all()
    for item in data:
        dic["count"].append(item.count)
        dic["rank"].append(item.rank)

    return json.dumps(dic)