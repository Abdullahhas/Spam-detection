from flask import Flask , request , jsonify
from utils import clean_txt 
import pickle , nltk

nltk.download("stopwords")


model = pickle.load(open('data/best_naive_bayes_model.pkl' , 'rb'))
vectorizer = pickle.load(open('data/tfidf_vectorizer.pkl' , 'rb'))

app = Flask(__name__)

@app.route('/')
def hello():
    return "hello"


@app.route('/predict' , methods=['POST'])
def predict():
    data = request.get_json()
    msg = data['message']

    cleaned = clean_txt(msg)
    vector_input = vectorizer.transform([cleaned])
    prediction = model.predict(vector_input)[0]

    return jsonify({'prediction': 'Spam' if prediction == 1 else 'Not Spam'})



if __name__ == "__main__":
    app.run(debug = True)