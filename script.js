
// Course data
const courses = [
    {
        id: 1,
        title: 'Web Development Fundamentals',
        category: 'Technology',
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1469&q=80',
        rating: 4.7,
        duration: '8 weeks',
        students: '1,250',
        description: 'Learn the core concepts of web development including HTML, CSS, and JavaScript.',
        instructor: 'Dr. Sarah Johnson',
        level: 'Beginner',
        prerequisites: 'Basic computer knowledge',
        syllabus: [
            'Introduction to Web Development',
            'HTML5 Fundamentals',
            'CSS3 Styling and Layout',
            'JavaScript Basics',
            'DOM Manipulation',
            'Responsive Design',
            'Web APIs',
            'Project Development'
        ]
    },
    {
        id: 2,
        title: 'Advanced Healthcare Management',
        category: 'Healthcare',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1470&q=80',
        rating: 4.9,
        duration: '12 weeks',
        students: '850',
        description: 'Develop skills in healthcare administration and patient management systems.',
        instructor: 'Dr. Michael Chen',
        level: 'Advanced',
        prerequisites: 'Basic healthcare knowledge or experience',
        syllabus: [
            'Healthcare Systems Overview',
            'Medical Records Management',
            'Healthcare Analytics',
            'Patient Care Coordination',
            'Healthcare Policy',
            'Quality Management',
            'Healthcare Technology',
            'Leadership in Healthcare'
        ]
    },
    {
        id: 3,
        title: 'Modern Agricultural Techniques',
        category: 'Agriculture',
        image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1470&q=80',
        rating: 4.5,
        duration: '10 weeks',
        students: '920',
        description: 'Explore sustainable farming methods and agricultural technology applications.',
        instructor: 'Prof. Rajesh Patel',
        level: 'Intermediate',
        prerequisites: 'Basic agricultural knowledge',
        syllabus: [
            'Sustainable Farming Practices',
            'Soil Management',
            'Crop Selection and Rotation',
            'Irrigation Systems',
            'Agricultural Technology',
            'Pest Management',
            'Harvest Techniques',
            'Market Integration'
        ]
    }
];

// Toggle modal visibility
function toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

// Close modal on outside click
window.onclick = function(event) {
    document.querySelectorAll('.modal').forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
};

// View course details
function viewCourseDetails(courseId) {
    const course = courses.find(c => c.id === courseId);
   
    if (course) {
        document.querySelector('.course-details-content').scrollIntoView({
            behavior:"smooth"
        })
        document.querySelector('.course-details-content').innerHTML = `
            <div class="course-details-header">
                <img src="${course.image}" alt="${course.title}" class="course-details-image">
                <div class="course-details-info">
                    <h2>${course.title}</h2>
                    <p class="course-category">${course.category}</p>
                    <div class="course-meta">
                        <span>⭐ ${course.rating}</span>
                        <span>⏱ ${course.duration}</span>
                        <span>👥 ${course.students} students</span>
                    </div>
                </div>
            </div>
            <div class="course-details-body">
                <h3>About this course</h3>
                <p>${course.description}</p>
                <h3>Instructor</h3>
                <p>${course.instructor}</p>
                <h3>Level</h3>
                <p>${course.level}</p>
                <h3>Prerequisites</h3>
                <p>${course.prerequisites}</p>
                <h3>Syllabus</h3>
                <ul>${course.syllabus.map(item => `<li>${item}</li>`).join('')}</ul>
                <button class="primary-btn enroll-btn">Enroll Now</button>
            </div>
        `;
        
        toggleModal('courseDetailsModal');
    }
}

// Render courses
function renderCourses(coursesToRender = courses) {
    const courseGrid = document.querySelector('.course-grid');
    courseGrid.innerHTML = coursesToRender.map(course => `
        <div class="course-card">
            <img src="${course.image}" alt="${course.title}">
            <div class="course-content">
                <span class="course-category">${course.category}</span>
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <div class="course-meta">
                    <span>⭐ ${course.rating}</span>
                    <span>⏱ ${course.duration}</span>
                    <span>👥 ${course.students} students</span>
                </div>
                <button onclick="viewCourseDetails(${course.id})" class="primary-btn">View Course</button>
            </div>
        </div>
    `).join('');
}

// Filter courses
function setupCourseFilters() {
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            renderCourses(button.textContent === 'All Courses' ? courses : courses.filter(course => course.category === button.textContent));
        });
    });
}

// Setup login and signup forms
function setupForms() {
    document.getElementById('loginForm')?.addEventListener('submit', e => {
        e.preventDefault();
        console.log('Login:', document.getElementById('loginEmail').value);
        toggleModal('loginModal');
    });
    document.getElementById('signupForm')?.addEventListener('submit', e => {
        e.preventDefault();
        console.log('Signup:', document.getElementById('signupEmail').value);
        toggleModal('signupModal');
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderCourses();
    setupCourseFilters();
    setupForms();
});
