import torch
import torch.nn as nn
import torch.utils.data as data


def test_model(
    model: nn.Module, dataloader: data.DataLoader, criterion: nn.Module
) -> None:
    """
    Evaluate a PyTorch model using the provided data and criterion.

    Parameters:
        model (torch.nn.Module): The PyTorch model to be evaluated.
        dataloader (torch.utils.data.DataLoader): The DataLoader containing the test data.
        criterion (torch.nn.Module): The loss function used for evaluating the model.
    """
    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    model.to(device)

    model.eval()
    running_loss = 0.0

    with torch.no_grad():
        for inputs, targets in dataloader:
            inputs, targets = inputs.to(device), targets.to(device)

            outputs = model(inputs)
            loss = criterion(outputs, targets)

            running_loss += loss.item() * inputs.size(0)

        test_loss = running_loss / len(dataloader.dataset)

        print(f"Test Loss: {test_loss:.4f}")
