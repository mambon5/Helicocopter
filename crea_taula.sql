CREATE TABLE helikopter_users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    IP VARCHAR(45),
    comment TEXT,
    distance DECIMAL(10,2) DEFAULT 0,
    clerks INT DEFAULT 0,
    eggs INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
