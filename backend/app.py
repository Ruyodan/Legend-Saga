from flask import Flask, jsonify
from flask_cors import CORS
import json
import pymysql

app = Flask(__name__)

CORS(app)  # This will allow all origins by default

# Paths to the question files
questions_path_AI = './questions/AI.json'
questions_path_SPORTS = './questions/SPORTS.json'
questions_path_CODING = './questions/CODING.json'
questions_path_CARS = './questions/CARS.json'

# Database connection function
def get_db_connection():
    connection = pymysql.connect(
        host='sql7.freesqldatabase.com',
        user='sql7733554',
        password='YwKajlds4H',
        database='sql7733554',
        port=3306
    )
    return connection

# Function to insert questions into the database
def insert_questions():
    connection = get_db_connection()
    try:
        with connection.cursor() as cursor:
            # Clear existing data
            cursor.execute("TRUNCATE TABLE questions")
            
            # Insert questions from each category
            categories = {
                'AI': questions_path_AI,
                'SPORTS': questions_path_SPORTS,
                'CODING': questions_path_CODING,
                'CARS': questions_path_CARS
            }
            
            for category, file_path in categories.items():
                with open(file_path, 'r') as file:
                    questions = json.load(file)
                    for question in questions:
                        sql = """INSERT INTO questions 
                                 (question, option_a, option_b, option_c, option_d, correct_answer, category) 
                                 VALUES (%s, %s, %s, %s, %s, %s, %s)"""
                        cursor.execute(sql, (
                            question['question'],
                            question['choices']['A'],
                            question['choices']['B'],
                            question['choices']['C'],
                            question['choices']['D'],
                            question['correct_answer'],
                            category
                        ))
        connection.commit()
        print("All questions inserted successfully!")
    except Exception as e:
        print(f"An error occurred: {e}")
    finally:
        connection.close()


# Route to interact with the database by category
@app.route('/go/<category>')
def fetch_db_data(category):
    connection = None
    try:
        connection = get_db_connection()
        with connection.cursor() as cursor:
            cursor.execute(f"SELECT * FROM questions WHERE category = '{category}'")
            columns = [col[0] for col in cursor.description]
            result = [dict(zip(columns, row)) for row in cursor.fetchall()]
        return jsonify(result)
    except Exception as e:
        return str(e)
    finally:
        if connection:
            connection.close()

# Home route 
@app.route('/')
def home():
    return 'Hello ALX'

# Route to fetch AI questions
@app.route('/ai')
def get_AI_questions():
    with open(questions_path_AI, 'r') as file:
        data = json.load(file)
    return jsonify(data)

# Other routes for different categories
@app.route('/sports')
def get_SPORTS_questions():
    with open(questions_path_SPORTS, 'r') as file:
        data = json.load(file)
    return jsonify(data)

@app.route('/coding')
def get_CODING_questions():
    with open(questions_path_CODING, 'r') as file:
        data = json.load(file)
    return jsonify(data)

@app.route('/cars')
def get_CARS_questions():
    with open(questions_path_CARS, 'r') as file:
        data = json.load(file)
    return jsonify(data)

# Custom name route
@app.route('/<name>')
def printname(name):
    return f'Welcome {name}'

if __name__ == '__main__':
    # Uncomment the next line to insert questions when running the app
    # insert_questions()
    app.run(host="0.0.0.0", port=5000, debug=True)
