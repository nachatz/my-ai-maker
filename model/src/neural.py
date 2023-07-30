import torch
import torch.nn as nn


class Feedforward(nn.Module):
    """
    Feedforward Neural Network model with configurable number of hidden layers and activation function.

    This class inherits from `torch.nn.Module` and defines a feedforward neural network
    with configurable number of hidden layers and activation function.

    Parameters:
        input_size (int): The size of the input features.
        output_size (int): The size of the output (number of classes).
        num_layers (int): The number of hidden layers in the network.
        activation (str): The name of the activation function to be used. Options: 'sigmoid', 'relu', 'tanh', 'leaky_relu'.

    Attributes:
        input_size (int): The size of the input features.
        output_size (int): The size of the output (number of classes).
        num_layers (int): The number of hidden layers in the network.
        hidden_layers (torch.nn.ModuleList): List containing the hidden layers of the neural network.
        activation_func (torch.nn.Module): The activation function to be used.
    """

    def __init__(
        self,
        input_size: int,
        output_size: int,
        num_layers: int = 1,
        activation: str = "sigmoid",
    ) -> None:
        super(Feedforward, self).__init__()
        self.input_size = input_size
        self.output_size = output_size
        self.num_layers = num_layers
        activation_functions = {
            "sigmoid": torch.nn.Sigmoid(),
            "relu": torch.nn.ReLU(),
            "tanh": torch.nn.Tanh(),
            "leaky_relu": torch.nn.LeakyReLU(),
        }

        # Select the activation function based on the provided argument
        if activation not in activation_functions:
            raise ValueError(
                f"Unsupported activation function: {activation}. Options are {list(activation_functions.keys())}."
            )

        self.activation_func = activation_functions[activation]
        self.hidden_layers: nn.ModuleList[nn.Linear] = nn.ModuleList()
        for _ in range(num_layers):
            self.hidden_layers.append(
                nn.Linear(self.input_size, self.output_size, bias=False)
            )

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        """
        Define the forward pass of the network.

        Parameters:
            x (torch.Tensor): The input tensor to the network.

        Returns:
            torch.Tensor: The output tensor after passing through the network.
        """
        for layer in self.hidden_layers:
            x = layer(x)
            x = self.activation_func(x)
        return x
