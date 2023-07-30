import torch


# Stochastic
def train_model(model, dataloader, criterion, optimizer, num_epochs):
    """
    Train a PyTorch model using the provided data and hyperparameters.

    Parameters:
        model (torch.nn.Module): The PyTorch model to be trained.
        dataloader (torch.utils.data.DataLoader): The DataLoader containing the training data.
        criterion: The loss function used for training the model.
        optimizer: The optimization algorithm for updating model parameters.
        num_epochs (int): The number of epochs to train the model.

    Returns:
        state_dict (dict): The final state of the trained model's parameters.
    """
    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    model.to(device)

    for epoch in range(num_epochs):
        model.train()
        running_loss = 0.0

        for inputs, targets in dataloader:
            inputs, targets = inputs.to(device), targets.to(device)

            outputs = model(inputs)
            loss = criterion(outputs, targets)

            optimizer.zero_grad()
            loss.backward()
            optimizer.step()

            running_loss += loss.item() * inputs.size(0)

        epoch_loss = running_loss / len(dataloader.dataset)

        print(f"Epoch [{epoch+1}/{num_epochs}], Loss: {epoch_loss:.4f}")

    # Return the weights
    return model.state_dict()
