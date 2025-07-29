import re
from nltk.corpus import stopwords
from nltk.stem import PorterStemmer

stemmer = PorterStemmer()
stop_words = set(stopwords.words('english'))

def clean_txt(text):
    text = text.lower()                                           # Lowercase
    text = re.sub(r'http\S+|www\S+|https\S+', '', text)           # Remove links
    text = re.sub(r'\@\w+|\#', '', text)                          # Remove @mentions and hashtags
    text = re.sub(r'[^a-zA-Z]', ' ', text)                        # Keep only alphabets, replace others with space
    words = text.split()
    words = [stemmer.stem(word) for word in words if word not in stop_words]  # Remove stopwords and apply stemming
    return ' '.join(words)
