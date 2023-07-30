import torch.nn as nn


class LinearRegression(nn.Module):
    """
    Linear Regression model using PyTorch.

    This class inherits from `torch.nn.Module` and defines a simple linear regression model
    with one linear layer. It is intended for regression tasks.

    Parameters:
        input_size (int): The size of the input features.
        output_size (int): The size of the output (usually 1 for regression).

    Attributes:
        linear (torch.nn.Linear): The linear layer of the regression model.

    Note:
        The `forward` method defines the forward pass of the model.
    """

    def __init__(self, input_size, output_size):
        super(LinearRegression, self).__init__()
        self.linear = nn.Linear(input_size, output_size)

    def forward(self, x):
        """
        Define the forward pass of the model.

        Parameters:
            x (torch.Tensor): The input tensor to the model.

        Returns:
            torch.Tensor: The output tensor after passing through the model.
        """
        return self.linear(x)
