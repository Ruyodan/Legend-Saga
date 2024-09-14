from flask import Flask
import json

app = Flask(__name__)
questions_path_AI = './questions/AI.json'
questions_path_SPORTS = './questions/SPORTS.json'

#the root of the app what the user gets when he accesses our api without specifying a path
@app.route('/')
def index():
        return 'Hello world'


#what the user gets when he accesses 127.0.0.1:5000/AI in the path 
@app.route('/AI')
def get_AI_questions():
        with open(questions_path_AI, 'r') as file:
                data = json.load(file)
        return data

@app.route('/SPORTS')
def get_SPORTS_questions():
        with open(questions_path_SPORTS, 'r') as file:
                data = json.load(file)
        return data

#what the user gets when he accesses ater puting any names after /
@app.route('/<name>')  
def printname(name):
            return f'Welcome {name}'
       





if __name__ == '__main__':
        app.run(debug=True)
