import torch
import pandas as pd


def preprocess_data(csv_file):
    """
    Read a CSV file and preprocess the data.

    Parameters:
        csv_file (str): The path to the CSV file.

    Returns:
        pandas.DataFrame: The preprocessed data as a DataFrame.
    """
    df = pd.read_csv(csv_file)
    return df


def init_weights(m: torch.nn.Module) -> None:
    """
    Initialize the weights of linear layers with ones.

    Parameters:
        m (torch.nn.Module): The module for which weights need to be initialized.
    """
    if isinstance(m, torch.nn.Linear):
        torch.nn.init.ones_(m.weight)
