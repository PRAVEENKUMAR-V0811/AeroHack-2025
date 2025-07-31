from flask import Flask, request, jsonify
from flask_cors import CORS
import kociemba

app = Flask(__name__)
CORS(app)

@app.route("/solve", methods=["POST"])
def solve():
    data = request.get_json()
    cube_string = data.get("cube")
    try:
        solution = kociemba.solve(cube_string)
        return jsonify({"solution": solution})
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == "__main__":
    from waitress import serve
    serve(app, host="0.0.0.0", port=8080)
