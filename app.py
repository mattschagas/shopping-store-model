from flask import Flask, render_template
from connectionDB.connection import Database

app = Flask(__name__)
db = Database()

# aki eu vou uma instância da classe Database
# variavel = db.getCategorias()
# print(variavel)

@app.route("/")
def main():
    categorias = db.getCategorias()
    ProductsWithDesconto = db.getProductsWithDesconto()
    return render_template("landpage.html", categorias=categorias, produtosComDescontos=ProductsWithDesconto)

if __name__ == "__main__":
    app.run(debug=True)
