from flask import Flask, render_template, request
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
    
    # 동적으로 생성되는 리스트
    dynamic_list = get_dynamic_list(selected_item)
    
    return {'dynamic_list': dynamic_list}

def get_dynamic_list(selected_item):
    # 실제로는 선택된 항목에 따라 데이터베이스 쿼리 또는 다른 동적 데이터를 가져오는 로직을 작성해야 합니다.
    # 여기서는 간단한 예시로 정적 데이터를 반환합니다.
    return pal.get_combi_list(selected_item)

if __name__ == '__main__':
    app.run(debug=True)