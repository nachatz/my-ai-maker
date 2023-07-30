import torch


class LogisticRegression(torch.nn.Module):
    """
    Logistic Regression model

    This clas inherits from `torch.nn.Module` and defines a logistic regression model
    with one linear layer and a sigmoid activation function. It is intended for binary
    classification tasks.

    Parameters:
        input_size (int): The size of the input features.

    Attributes:
        input_size (int): The size of the input features.
        linear (torch.nn.Linear): The linear layer of the logistic regression model.
        sigmoid (torch.nn.Sigmoid): The sigmoid activation function.
    """

    def __init__(self, input_size):
        super(LogisticRegression, self).__init__()
        self.input_size = input_size
        self.linear = torch.nn.Linear(self.input_size, 1)
        self.sigmoid = torch.nn.Sigmoid()

    def forward(self, x):
        """
        Define the forward pass of the model.

        Parameters:
            x (torch.Tensor): The input tensor to the model.

        Returns:
            torch.Tensor: The output tensor after passing through the model.
        """
        preactivation = self.linear(x)
        output = self.sigmoid(preactivation)
        return output
