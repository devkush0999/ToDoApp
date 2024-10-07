# ToDo React Native App

## Overview

This is a simple ToDo application built using React Native. The app allows users to create, view, and complete tasks, providing a straightforward interface for task management.

## Features

- **Add Tasks**: Users can input new tasks and add them to their list.
- **View Tasks**: All added tasks are displayed in a list format.
- **Complete Tasks**: Users can mark tasks as completed by tapping on them, which removes them from the list.
- **Responsive Design**: The app is designed to work on both iOS and Android devices.

## Getting Started

### Prerequisites

To run this app, ensure you have the following installed:

- Node.js
- React Native CLI
- Android Studio or Xcode (for emulator/simulator)
- A physical device (optional)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/todo-react-native-app.git
   cd todo-react-native-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Run the app on an emulator or physical device:
   - For iOS:
     ```bash
     npm run ios
     ```
   - For Android:
     ```bash
     npm run android
     ```

## Code Structure

The main component of the app is located in `App.js`, which contains:

- **State Management**: 
  - `task`: Holds the current input value for a new task.
  - `taskItems`: An array that stores all added tasks.

- **Functions**:
  - `handleAddTask`: Adds a new task to the list.
  - `completeTask`: Removes a completed task from the list.

- **UI Components**: 
  - A text input for adding new tasks.
  - A display area for current tasks.
  - Touchable components for task completion.

### Components

- **Task**: A separate component that displays individual tasks.

## Styling

The app uses React Native's `StyleSheet` for styling. The styles are defined in the `styles` object within `App.js`. Key styles include:

- Container styling for layout and background color.
- Input field styling for user input.
- Button styling for adding tasks.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to React Native for providing a powerful framework for building mobile applications.
- Inspiration from various open-source projects and tutorials that helped shape this app.
