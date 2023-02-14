import joblib

from flask import Flask, request
from flask_cors import CORS
from pandas import DataFrame
from sklearn.pipeline import Pipeline

features = [
    'fixed_acidity', 'volatile_acidity', 'citric_acid',
    'residual_sugar', 'free_sulfur_dioxide', 'density',
    'pH', 'sulphates', 'alcohol', 'type'
]
rfc_pipeline: Pipeline = joblib.load("../py-jupyter-mldp/model.pkl")

app = Flask(__name__)
CORS(app)

@app.route("/")
def _():
    return __name__

@app.route("/api/predict", methods=["POST"])
def predict():
    try:
        X_request = DataFrame(request.json, index=[0])[features]
    except:
        return {"message": "Invalid request body"}, 400

    return {"quality": rfc_pipeline.predict(X_request)[0]}, 200

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)