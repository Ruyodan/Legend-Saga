
# Legend Saga

**Transforming Learning Through Fun and Real-Time Engagement**

![Legend Saga Screenshot](images/legend_saga_001.png?raw=true "Legend Saga Screenshot")

## Introduction

Legend Saga is an innovative and interactive quiz platform designed to enhance learning through engaging and competitive gameplay. Whether you're an educator aiming to make learning more exciting or a student wanting to test your knowledge, Legend Saga combines fun with real-time engagement for a better learning experience. With features like live leaderboards, customizable content, and rewards, it makes learning not just informative, but also enjoyable.

### Key Features:
- **Interactive Quizzes**: Fun, multiple-choice questions tailored for different subjects.
- **Real-Time Participation**: Live leaderboards to foster competitive learning.
- **Customizable Content**: Create tailored quizzes for specific groups or subjects.
- **Engaging Gameplay**: Use points, teams, and rewards to boost motivation.
- **Cross-Platform Access**: Accessible on both web and mobile devices.

## Technologies Used

- **Front-end**: [React](https://reactjs.org/) for building dynamic, responsive UIs.
- **Back-end**: [Flask](https://flask.palletsprojects.com/) for server-side logic and API handling.
- **Database**: [MongoDB](https://www.mongodb.com/) to manage real-time quiz data.
- **Real-Time Synchronization**: WebSockets for real-time updates.

## Learning Objectives

Legend Saga is a hands-on project aimed at helping developers and educators:
- Gain experience in web application development.
- Master real-time data processing using modern web technologies.
- Develop teamwork and project management skills.
- Create a practical educational tool that caters to diverse audiences.
- Enhance back-end and front-end integration skills.

## Challenges Addressed

- **Real-time Synchronization**: Ensuring smooth interactions for multiple users simultaneously.
- **User Interface**: Designing an intuitive and user-friendly experience.
- **Data Management**: Efficiently handling large datasets for quizzes and scores.
- **Security**: Protecting user data in real-time environments.

## Python Module Dependencies

To run the Legend Saga app, you need the following Python modules and dependencies:

- **Flask**: A micro web framework for Python.
- **Flask-SocketIO**: For handling real-time communication.
- **MongoDB**: Database for storing quiz data.
- **Jinja2**: For rendering dynamic HTML content.
- **Bootstrap**: For front-end styling.

You can install these dependencies via pip using the following command:

```bash
pip install Flask Flask-SocketIO pymongo
```

## Getting Started

To get started with Legend Saga, follow these steps:

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/yourusername/legend-saga.git
    ```
   
2. **Set Up Virtual Environment**:
    ```bash
    cd legend-saga
    python -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
    ```

3. **Install Dependencies**:
    ```bash
    pip install -r requirements.txt
    ```

4. **Configure Database**:
   - Ensure MongoDB is installed and running on your local machine.
   - Update the database configurations in `config.py`.

5. **Run the Application**:
    ```bash
    flask run
    ```

6. **Access the App**:
   Visit `http://localhost:5000` in your web browser to start interacting with Legend Saga.

## Screenshots

![Screenshot 1](images/Screen_001.png?raw=true "Screenshot 1")
![Screenshot 2](images/Screen_002.png?raw=true "Screenshot 2")

## Customization

You can easily customize Legend Saga to fit your specific educational or gamification needs:

- **Quizzes**: Modify or add quiz data in the MongoDB database.
- **Front-end**: Edit the React components for custom UI elements.
- **Real-Time Features**: Adjust real-time data updates via Flask-SocketIO.
- **Styling**: Update the Bootstrap styles or create new custom CSS for a unique look.

## Future Enhancements

- **User Authentication**: Allow users to create accounts, track scores, and manage quiz history.
- **Leaderboard**: Add a leaderboard to display high scores globally or within a group.
- **Timed Quizzes**: Introduce a timer to add more excitement to quizzes.
- **Export Results**: Enable quiz results to be exported in various formats like CSV or PDF.
- **Mobile-First Design**: Enhance responsiveness for mobile devices.

## Contributing

We welcome contributions from the community! If you'd like to contribute, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -m "Add new feature"`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a pull request.

