from flask import Flask, redirect, url_for, request,render_template
import os
import subprocess
app = Flask(__name__)

@app.route('/', methods=['GET','POST'])
def home():
	data = None
	data = subprocess.check_output(
    "python temp.py",
    stderr=subprocess.STDOUT,
    shell=True,
    text=True)
	return render_template('index.html',data=data)   

if(__name__=='__main__'):  #This is so that we can run it directly in debug mode
	app.run(debug=True)