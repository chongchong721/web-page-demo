from config import app
from views.data_view import data_provider
from views.page_view import page_provider

app.register_blueprint(data_provider, url_prefix="/data")
app.register_blueprint(page_provider, url_prefix="/page")

if __name__ == "__main__":
    app.run(debug=True)

