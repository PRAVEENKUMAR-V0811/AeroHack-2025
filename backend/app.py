from flask import Flask, request, jsonify
from flask_cors import CORS
from solver import solve_cube

app = Flask(__name__)
CORS(app)

@app.route("/solve", methods=["POST"])
def solve():
    data = request.get_json()
    state = data.get("state")
    if not state:
        return jsonify({"error": "Cube state not provided"}), 400
    
    solution = solve_cube(state)
    return jsonify({"solution": solution})

if __name__ == "__main__":
    app.run(debug=True)
