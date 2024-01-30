from flask import Flask, render_template, request
import sys
sys.path.append('api/util')

import paldeck

app = Flask(__name__)
pal = paldeck.paldeck()

static_combo_list = pal.get_pal_list()

@app.route('/')
def index():
    return render_template('index.html', combo_list=static_combo_list)

@app.route('/dynamic_list', methods=['GET'])
def dynamic_list():
    selected_item = request.args.get('selected_item')
    dynamic_list = get_dynamic_list(selected_item)
    return {'dynamic_list': dynamic_list}

def get_dynamic_list(selected_item):
    return pal.get_combi_list(selected_item)