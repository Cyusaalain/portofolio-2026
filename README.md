<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cyusa Alain | Portfolio</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Poppins:wght@700&family=Sora:wght@600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>

    <nav class="navbar">
        <div class="logo">Cyusa Alain</div>
        <ul class="nav-menu">
            <li><a href="index.html" class="active">Home</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="journey.html">Journey</a></li>
            <li><a href="support.html">Support</a></li>
        </ul>
    </nav>

    <main class="container">
        <section class="hero">
            <h1 class="hero-text">Hi, I'm Umuhire Cyusa Alain, a Full Stack Developer building scalable web applications.</h1>
        </section>

        <section class="bio-section">
            <div class="avatar-container">
                <img src="GREEN CARD.JPG" alt="Cyusa Alain" class="avatar">
            </div>
            <div class="bio-content">
                <h3>Biography</h3>
                <p>Analytical and solution-oriented developer adept at architecting high-performance, user-centric solutions. Proven ability to minimize system latency and bugs using modern frameworks and robust CI/CD pipelines.</p>
            </div>
            <div class="connect">
                <h3>Lets connect</h3>
                <div class="social-icons">
                    <a href="https://www.instagram.com/wizzy_alain?igsh=NzU3cDB5MGkyZTV3" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="https://x.com/cyusa_umuhire" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#"><i class="fab fa-facebook"></i></a>
                    <a href="https://www.linkedin.com/in/cyusa-alain-9400772a5?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </section>

        <section class="what-i-do">
            <div class="wid-layout">
                <div class="wid-header">
                    <h3>What I do</h3>
                    <p>Bridging the gap between front-end aesthetics and back-end logic.</p>
                </div>

                <div class="wid-cards-container" id="wid-card-stack">
                    <div class="wid-card active">
                        <div class="icon-circle"><i class="fas fa-globe"></i></div>
                        <h4>Full stack development</h4>
                        <p>Architecting scalable applications using JavaScript, Python, and SQL.</p>
                    </div>

                    <div class="wid-card active">
                        <div class="icon-circle"><i class="fas fa-clipboard-list"></i></div>
                        <h4>Mobile Solutions</h4>
                        <p>Crafting mobile-friendly PWAs and apps using Dart and Flutter.</p>
                    </div>

                    <div class="wid-card hidden">
                        <div class="icon-circle"><i class="fas fa-server"></i></div>
                        <h4>System Optimization</h4>
                        <p>Reducing latency and managing Linux-based server configurations.</p>
                    </div>

                    <div class="arrow-next" id="wid-next-btn">
                        <i class="fas fa-arrow-right"></i>
                    </div>
                </div>
            </div>
        </section>

        <section class="projects">
            <h2 class="section-title">Featured Project</h2>
            
            <div class="project-card">
                <img src="Capture3.PNG" alt="Habit Tracker" class="project-thumb">
                <div class="project-info">
                    <span class="project-label">Lifestyle Habit Tracker</span>
                    <h3>UI/UX, Real-time data, Mobile-first.</h3>
                    <p>A full-stack Flutter application featuring Firebase Auth and real-time streak tracking. Users compete on habit-specific leaderboards with an integrated points and rewards system.</p>
                </div>
            </div>

            <div class="project-card">
                <img src="Capture4.PNG" alt="Clinic System" class="project-thumb">
                <div class="project-info">
                    <span class="project-label">Clinic Booking System</span>
                    <h3>Data Modeling, SQL, Relational Architecture.</h3>
                    <p>A normalized MySQL relational database designed for clinical management. Features complex many-to-many relationships, appointment scheduling constraints, and medical record integrity.</p>
                </div>
            </div>
        </section>

        <section class="snippets">
            <h2 class="section-title">Code Snippet</h2>
            <div class="snippet-grid">
                
                <div class="snippet-card">
                    <h4>Flutter/Dart Starter</h4>
                    <p>Mobile-friendly PWA boilerplate</p>
                    <div class="snippet-footer">
                        <div class="tech-icons">
                            <span class="icon-box"><i class="fas fa-wind"></i></span>
                            <span class="icon-box"><i class="fab fa-react"></i></span>
                        </div>
                        <span class="stars"><i class="fas fa-star yellow-star"></i> 8 Stars</span>
                    </div>
                </div>

                <div class="snippet-card">
                    <h4>Python/SQL Backend</h4>
                    <p>Clean architecture for scalable data management.</p>
                    <div class="snippet-footer">
                        <div class="tech-icons">
                            <span class="icon-box"><i class="fas fa-wind"></i></span>
                            <span class="icon-box"><i class="fab fa-sass"></i></span>
                            <span class="icon-box"><i class="fab fa-html5"></i></span>
                        </div>
                        <span class="stars"><i class="fas fa-star yellow-star"></i> 12 Stars</span>
                    </div>
                </div>

                <div class="snippet-card">
                    <h4>CI/CD Pipeline</h4>
                    <p>A robust deployment script to minimize system bugs.</p>
                    <div class="snippet-footer">
                        <div class="tech-icons">
                            <span class="icon-box"><i class="fas fa-wind"></i></span>
                            <span class="icon-box"><i class="fab fa-react"></i></span>
                        </div>
                        <span class="stars"><i class="fas fa-star yellow-star"></i> 8 Stars</span>
                    </div>
                </div>

                <div class="snippet-card">
                    <h4>JavaScript</h4>
                    <p>Powers interactive web experiences</p>
                    <div class="snippet-footer">
                        <div class="tech-icons">
                            <span class="icon-box"><i class="fas fa-wind"></i></span>
                            <span class="icon-box"><i class="fab fa-react"></i></span>
                        </div>
                        <span class="stars"><i class="fas fa-star yellow-star"></i> 8 Stars</span>
                    </div>
                </div>

            </div>
        </section>
    </main>

    <script src="script.js"></script>
</body>
</html>