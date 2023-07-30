import torch


def init_weights(m):
    """
    Initialize the weights of linear layers with ones.

    Parameters:
        m (torch.nn.Module): The module for which weights need to be initialized.
    """
    if isinstance(m, torch.nn.Linear):
        torch.nn.init.ones_(m.weight)
