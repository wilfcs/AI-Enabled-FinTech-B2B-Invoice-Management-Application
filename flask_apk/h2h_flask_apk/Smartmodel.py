import pandas as pd
from sklearn.preprocessing import LabelEncoder
import numpy as np
import pickle

def preprocess_and_predict(df):
    
    # Data Preprocessing
    df.fillna("NaN", inplace=True)
    df["ORDER_CREATION_DATE"] = pd.to_datetime(df["ORDER_CREATION_DATE"], format="%Y-%m-%d")
    # Check if "ORDER_AMOUNT" column exists and contains string values
    if "ORDER_AMOUNT" in df.columns and df["ORDER_AMOUNT"].dtype == object:
        df["ORDER_AMOUNT"] = df["ORDER_AMOUNT"].str.replace("-", "").str.replace(",", ".")
    conversion_rates = {"USD" : 1.00 , "EUR": 1.10 , "AUD" : 0.66 , "CAD" : 0.74 , "GBP" : 1.24 , "MYR" : 0.22 , "PLN" : 0.24 , "AED" : 0.27 , "HKD" : 0.13 , "CHF" : 1.10 , "RON" : 0.22 , "SGD" : 0.74 , "CZK" : 0.04 , "HU1" : 0.003 , "NZD" : 0.62 , "BHD" : 2.65 , "SAR" : 0.27 , "QAR" : 0.27 , "KWD" : 3.25 , "SEK" :0.09}
    df["amount_in_usd"] = df.apply(lambda row: float(row["ORDER_AMOUNT"]) * conversion_rates.get(row["ORDER_CURRENCY"], 1), axis=1)
    if "unique_cust_id" not in df.columns:
        df["unique_cust_id"] = df["CUSTOMER_NUMBER"].astype(str) + df["COMPANY_CODE"].astype(str)

    # Feature Extraction
    categorical_cols = df.select_dtypes(include=['object']).columns
    df[categorical_cols] = df[categorical_cols].fillna('Missing')
    le = LabelEncoder()
    for col in categorical_cols:
        df[col] = df[col].astype(str)
        df[col] = le.fit_transform(df[col])

    numeric_cols = df.select_dtypes(include=['float64', 'int64']).columns
    small_constant = 1e-6
    for cols in numeric_cols:
        df[cols] = df[cols].apply(lambda x: round(np.log(x + small_constant), 6))

    grouped_df = df.groupby(['SALES_ORG', 'DIVISION'])
    average_order_amount = grouped_df['ORDER_AMOUNT'].mean().reset_index().rename(columns={'ORDER_AMOUNT': 'AVERAGE_ORDER_AMOUNT'})
    total_order_count = grouped_df.size().reset_index().rename(columns={0: 'TOTAL_ORDER_COUNT'})
    df = pd.merge(df, average_order_amount, on=['SALES_ORG', 'DIVISION'], how='left')
    df = pd.merge(df, total_order_count, on=['SALES_ORG', 'DIVISION'], how='left')

    # Prediction
    top_columns = ['AVERAGE_ORDER_AMOUNT', 'DIVISION', 'TOTAL_ORDER_COUNT','CUSTOMER_NUMBER', 'RELEASED_CREDIT_VALUE']
    features = df[top_columns]
    model = pickle.load(open("model.sav", 'rb'))
    prediction = np.expm1(model.predict(features))
    return prediction.tolist()