from sklearn.preprocessing import LabelEncoder

def label_encode(df, features):
    for feat in features:
        le = LabelEncoder()
        df[feat] = le.fit_transform(df[feat])
        