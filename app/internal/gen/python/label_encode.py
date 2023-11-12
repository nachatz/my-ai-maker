from sklearn.preprocessing import LabelEncoder as le

def label_encode_strings(df):
    le = le()
    for col in df.columns:
        if df[col].dtype == 'object':
            df[col] = le.fit_transform(df[col])
