from flask import Flask, session, redirect, request



app = Flask(__name__)

app.secret_key = "Do not let your dreams be dreams"