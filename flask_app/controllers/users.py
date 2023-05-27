from flask_app import app
from flask import render_template, redirect, request

@app.route('/')
def index():
    # return "hello Flask!" 
    return render_template('index.html')