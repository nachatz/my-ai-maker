from sklearn.preprocessing import LabelEncoder

label_encode_lambda = lambda column: LabelEncoder().fit_transform(column) if column.dtype == 'O' else column
