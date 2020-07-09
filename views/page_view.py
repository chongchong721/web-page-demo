# -*- coding: utf-8 -*-#

# -------------------------------------------------------------------------------
# Name:         page_view
# Description:  
# Author:       zhuchengxi
# Date:         2020/7/2
# -------------------------------------------------------------------------------

from flask import Blueprint, render_template

page_provider = Blueprint('page_provider', __name__)


@page_provider.route("/index", endpoint="index")
def index():
    return render_template("chart-index.html")

