from flask import Flask, request, jsonify
from utils import clean_txt
import joblib  
import nltk

nltk.download("stopwords")


model = joblib.load('data/best_naive_bayes_model.pkl')
vectorizer = joblib.load('data/tfidf_vectorizer.pkl')

app = Flask(__name__)

@app.route('/')
def hello():
    return "hello"

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    msg = data['message']

    cleaned = clean_txt(msg)
    vector_input = vectorizer.transform([cleaned])
    probs = model.predict_proba(vector_input)[0]
    spam_prob = probs[1]  # index 1 is probability for class '1' (spam)

    return jsonify({
    'prediction': 'Spam' if spam_prob > 0.5 else 'Not Spam',
    'spam_probability': round(spam_prob, 3)
})


if __name__ == "__main__":
    app.run(debug=True)
