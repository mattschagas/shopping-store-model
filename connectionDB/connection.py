import mysql.connector

class Database:
    # mudar valores das variaveis de acordo com seus dados
    servername = 'localhost'
    username = 'root'
    password = 'admin'
    database = 'yuri_testes'

    def __init__(self):
        # Inicializa a conexão ao banco de dados no construtor da classe
        self.db_connection = mysql.connector.connect(
            host=self.servername,
            user=self.username,
            password=self.password,
            database=self.database
        )
        self.cursor = self.db_connection.cursor()

    # Método para obter os produtos da tabela 'produtos'
    def getProductsWithDesconto(self):
        query = "SELECT * FROM produtos WHERE desconto = 1"
        self.cursor.execute(query)
        result = self.cursor.fetchall()
        products = [
            {'id': row[0],
             'produto': row[1],
             'preco': row[2],
             # 'desconto': row[3],
             'valor_desconto': row[4],
             'imagem': row[5],
             'descricao': row[6]}
             for row in result]
        return products
    
    def getCategorias(self):
        query = "SELECT * FROM categorias WHERE ativo = 1"
        self.cursor.execute(query)
        result = self.cursor.fetchall()
        categorias = [
            {'id': row[0],
             'categoria': row[1],
             'imagem': row[2],
             'desconto': row[3],
             'valor_desconto': row[4]}
             for row in result]
        return categorias
