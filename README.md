# Expense Splitter App

A full-stack web application to add, split, and track expenses among multiple users.

This project helps users manage shared expenses by automatically calculating equal splits and displaying transaction history.

---

## Features

- Add expenses with description and amount
- Select who paid for the expense
- Add multiple participants
- Equal expense splitting
- Automatic split calculation
- Expense history tracking
- User balance display
- Admin panel for managing users and expenses

---

## Tech Stack

### Frontend
- React.js
- HTML
- CSS
- JavaScript
- Axios

### Backend
- Python
- Django
- Django REST Framework

### Database
- SQLite

---

## Project Structure

```bash
expense-splitter-app/
│
├── backend/
│   ├── backend/
│   ├── expenses/
│   ├── db.sqlite3
│   └── manage.py
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AddExpense.js
│   │   │   ├── ExpenseList.js
│   │   │   └── Navbar.js
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/sachintharun70-web/Tharun-splitter-app.git
cd Tharun-splitter-app
```

---

## Backend Setup

Go to backend folder:

```bash
cd backend
```

Install dependencies:

```bash
pip install django djangorestframework django-cors-headers
```

Run migrations:

```bash
python manage.py makemigrations
python manage.py migrate
```

Start backend server:

```bash
python manage.py runserver
```

Backend runs on:

```bash
http://127.0.0.1:8000/
```

---

## Frontend Setup

Open new terminal:

```bash
cd frontend
```

Install packages:

```bash
npm install
npm install axios
```

Run frontend:

```bash
npm start
```

Frontend runs on:

```bash
http://localhost:3000/
```

---

## API Endpoints

### Users
- `/api/users/`

### Expenses
- `/api/expenses/`

### Splits
- `/api/splits/`

---

## Usage

1. Add users from Django admin panel
2. Open frontend UI
3. Add expense details
4. Select payer
5. Select participants
6. Submit expense
7. View automatic split calculation in expense history

Example:

- Lunch: ₹300
- Paid by: Tharun
- Participants: Deena, Virat, Tharun

Output:

- Deena owes ₹100
- Virat owes ₹100
- Tharun owes ₹100

---

## Future Improvements

- Custom split functionality
- User authentication
- Balance summary dashboard
- Expense deletion
- Monthly analytics

---

## Author

**Tharun J**

- Email: sachintharun70@gmail.com

---

## License

This project is for educational and portfolio purposes.
