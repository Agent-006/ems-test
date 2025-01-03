const employees = [
    {
        id: 1,
        email: "employee1@example.com",
        password: "123",
        tasks: [
            {
                title: "Update CRM Data",
                description: "Ensure all customer data is up to date.",
                date: "2024-12-28",
                category: "Data Management",
                active: true,
                newTask: true,
                completed: false,
                failed: false,
            },
            {
                title: "Prepare Sales Report",
                description: "Compile sales report for Q4.",
                date: "2024-12-29",
                category: "Reporting",
                active: false,
                newTask: false,
                completed: true,
                failed: false,
            },
            {
                title: "Schedule Team Meeting",
                description: "Set up a meeting for project updates.",
                date: "2024-12-30",
                category: "Scheduling",
                active: true,
                newTask: false,
                completed: false,
                failed: false,
            },
        ],
    },
    {
        id: 2,
        email: "employee2@example.com",
        password: "123",
        tasks: [
            {
                title: "Review Codebase",
                description: "Analyze the codebase for improvements.",
                date: "2024-12-27",
                category: "Development",
                active: true,
                newTask: false,
                completed: false,
                failed: false,
            },
            {
                title: "Fix UI Bugs",
                description: "Address issues in the user interface.",
                date: "2024-12-28",
                category: "Bug Fixing",
                active: true,
                newTask: true,
                completed: false,
                failed: false,
            },
        ],
    },
    {
        id: 3,
        email: "employee3@example.com",
        password: "123",
        tasks: [
            {
                title: "Create Marketing Plan",
                description: "Develop a marketing strategy for Q1.",
                date: "2024-12-29",
                category: "Marketing",
                active: false,
                newTask: true,
                completed: false,
                failed: true,
            },
            {
                title: "Write Blog Post",
                description: "Draft a blog post for the company website.",
                date: "2024-12-27",
                category: "Content Creation",
                active: false,
                newTask: false,
                completed: true,
                failed: false,
            },
            {
                title: "Organize Files",
                description: "Reorganize shared drive folders.",
                date: "2024-12-30",
                category: "Organization",
                active: true,
                newTask: false,
                completed: false,
                failed: false,
            },
        ],
    },
    {
        id: 4,
        email: "employee4@example.com",
        password: "123",
        tasks: [
            {
                title: "Research Competitors",
                description: "Analyze competitors' strategies.",
                date: "2024-12-28",
                category: "Research",
                active: true,
                newTask: false,
                completed: false,
                failed: false,
            },
            {
                title: "Conduct Survey",
                description: "Distribute and analyze customer surveys.",
                date: "2024-12-30",
                category: "Customer Feedback",
                active: false,
                newTask: true,
                completed: false,
                failed: false,
            },
            {
                title: "Draft Proposal",
                description: "Prepare a proposal for a new project.",
                date: "2024-12-29",
                category: "Planning",
                active: false,
                newTask: false,
                completed: true,
                failed: false,
            },
        ],
    },
    {
        id: 5,
        email: "employee5@example.com",
        password: "123",
        tasks: [
            {
                title: "Plan Team Outing",
                description: "Organize an outing for the team.",
                date: "2024-12-31",
                category: "Team Building",
                active: true,
                newTask: true,
                completed: false,
                failed: false,
            },
            {
                title: "Develop API",
                description: "Implement new API endpoints.",
                date: "2024-12-29",
                category: "Development",
                active: false,
                newTask: false,
                completed: true,
                failed: false,
            },
            {
                title: "Test New Features",
                description: "Perform QA on recent updates.",
                date: "2024-12-30",
                category: "Quality Assurance",
                active: false,
                newTask: false,
                completed: true,
                failed: true,
            },
        ],
    },
];

const admin = [
    {
        id: 1,
        email: "admin@example.com",
        password: "123",
    },
];

export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
    const employees_data = JSON.parse(localStorage.getItem("employees"));
    const admin_data = JSON.parse(localStorage.getItem("admin"));
};