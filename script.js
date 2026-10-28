const STORAGE = {
    courses: "aitu-smart-campus-courses-v1",
    assignments: "aitu-smart-campus-assignments-v1",
    classes: "aitu-smart-campus-classes-v1",
    grades: "aitu-smart-campus-grades-v1",
    gradeScale: "aitu-smart-campus-grade-scale-v1",
    settings: "aitu-smart-campus-settings-v1"
};

const icons = {
    grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5zM4 5.5v16M8 7h8M8 11h7"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
    chart: '<path d="M4 19V5M4 19h17M8 15l4-5 3 2 5-7"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="m19.4 15 .1.1 1.4 1.1-1.4 2.4-1.7-.7a8 8 0 0 1-1.5.9l-.3 1.8h-2.8l-.3-1.8a8 8 0 0 1-1.5-.9l-1.7.7-1.4-2.4 1.4-1.1a7 7 0 0 1 0-1.8l-1.4-1.1 1.4-2.4 1.7.7a8 8 0 0 1 1.5-.9l.3-1.8h2.8l.3 1.8a8 8 0 0 1 1.5.9l1.7-.7 1.4 2.4-1.4 1.1a7 7 0 0 1 0 1.7Z"/>',
    sparkles: '<path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3ZM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z"/>',
    more: '<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
    arrowRight: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    trend: '<path d="m3 17 6-6 4 4 8-8M15 7h6v6"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
    chevronLeft: '<path d="m15 18-6-6 6-6"/>',
    chevronRight: '<path d="m9 18 6-6-6-6"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    edit: '<path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"/>',
    trash: '<path d="M3 6h18M8 6V4h8v2m3 0-1 14H6L5 6m4 4v6m6-6v6"/>',
    close: '<path d="m18 6-12 12M6 6l12 12"/>',
    user: '<path d="M20 21a8 8 0 0 0-16 0M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/>',
    moon: '<path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z"/>',
    shield: '<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5m0-8h.01"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
    upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>',
    refresh: '<path d="M20 7v5h-5M4 17v-5h5"/><path d="M5.6 9a7 7 0 0 1 11.6-2L20 12M4 12l2.8 5a7 7 0 0 0 11.6-2"/>'
};

function icon(name) {
    return `<svg viewBox="0 0 24 24" aria-hidden="true">${icons[name] || ""}</svg>`;
}

document.querySelectorAll("[data-icon]").forEach((element) => {
    const name = element.dataset.icon.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
    element.innerHTML = icon(name);
});

const courseColors = ["", "blue", "green", "orange", "pink"];
const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const weekDaysShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const today = new Date();
today.setHours(0, 0, 0, 0);
const dateFormatter = new Intl.DateTimeFormat("en-US", { day: "numeric", month: "short" });
const fullDateFormatter = new Intl.DateTimeFormat("en-US", { weekday: "long", day: "numeric", month: "long" });
let currentFilter = "all";
let currentPriority = "all";
let currentCourseFilter = "all";
let currentDeadlineFilter = "all";
let calendarCursor = new Date(today.getFullYear(), today.getMonth(), 1);
let selectedCalendarDate = toDateKey(today);
let scheduleWeekOffset = 0;
let toastTimer;

function makeId() {
    return window.crypto?.randomUUID ? window.crypto.randomUUID() : `id-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function readStorage(key, fallback) {
    try {
        const value = JSON.parse(localStorage.getItem(key));
        return value ?? fallback;
    } catch (error) {
        console.warn(`Could not read local data for ${key}.`, error);
        return fallback;
    }
}

function writeStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        showToast("Could not save data in this browser.");
        console.error("Local storage write failed.", error);
    }
}

function toDateKey(date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function dateFromKey(key) {
    const [year, month, day] = key.split("-").map(Number);
    return new Date(year, month - 1, day);
}

function shiftDate(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

function seedCourses() {
    return ["Calculus I", "Linear Algebra", "Programming Fundamentals (C++)", "Information and Communication Technologies", "Computer Systems Architecture", "English"].map((name) => ({ id: makeId(), name }));
}

let courses = readStorage(STORAGE.courses, null);
if (!Array.isArray(courses)) {
    courses = seedCourses();
    writeStorage(STORAGE.courses, courses);
}

function seedAssignments() {
    const courseId = (name) => courses.find((course) => course.name === name)?.id || courses[0]?.id || "";
    return [
        { id: makeId(), title: "Functions and limits problem set", courseId: courseId("Calculus I"), due: toDateKey(shiftDate(today, 1)), priority: "high", description: "Sample task — replace with your own assignment.", completed: false, createdAt: toDateKey(shiftDate(today, -8)) },
        { id: makeId(), title: "C++ arrays practice", courseId: courseId("Programming Fundamentals (C++)"), due: toDateKey(shiftDate(today, 3)), priority: "medium", description: "Sample task — replace with your own assignment.", completed: false, createdAt: toDateKey(shiftDate(today, -6)) },
        { id: makeId(), title: "Network technologies reflection", courseId: courseId("Information and Communication Technologies"), due: toDateKey(shiftDate(today, 5)), priority: "medium", description: "Sample task — replace with your own assignment.", completed: false, createdAt: toDateKey(shiftDate(today, -4)) },
        { id: makeId(), title: "Matrix operations worksheet", courseId: courseId("Linear Algebra"), due: toDateKey(shiftDate(today, 8)), priority: "low", description: "Sample task — replace with your own assignment.", completed: false, createdAt: toDateKey(shiftDate(today, -3)) },
        { id: makeId(), title: "Short technical writing exercise", courseId: courseId("English"), due: toDateKey(shiftDate(today, -1)), priority: "normal", description: "Sample task — replace with your own assignment.", completed: true, completedAt: toDateKey(today), createdAt: toDateKey(shiftDate(today, -12)) }
    ];
}

let assignments = readStorage(STORAGE.assignments, null);
if (!Array.isArray(assignments)) {
    assignments = seedAssignments();
    writeStorage(STORAGE.assignments, assignments);
}
let prioritiesMigrated = false;
assignments = assignments.map((item) => {
    const priority = item.priority === "normal" ? "medium" : ["high", "medium", "low"].includes(item.priority) ? item.priority : "medium";
    if (priority !== item.priority) prioritiesMigrated = true;
    return { ...item, priority };
});
if (prioritiesMigrated) writeStorage(STORAGE.assignments, assignments);

function seedClasses() {
    const courseId = (name) => courses.find((course) => course.name === name)?.id || courses[0]?.id || "";
    return [
        { id: makeId(), day: 1, start: "09:00", end: "10:30", courseId: courseId("Calculus I"), room: "Room 204" },
        { id: makeId(), day: 1, start: "11:00", end: "12:30", courseId: courseId("Programming Fundamentals (C++)"), room: "Lab 3" },
        { id: makeId(), day: 2, start: "10:00", end: "11:30", courseId: courseId("Linear Algebra"), room: "Room 318" },
        { id: makeId(), day: 3, start: "09:00", end: "10:30", courseId: courseId("Information and Communication Technologies"), room: "Room 112" },
        { id: makeId(), day: 4, start: "13:00", end: "14:30", courseId: courseId("Computer Systems Architecture"), room: "Lab 2" },
        { id: makeId(), day: 5, start: "11:00", end: "12:30", courseId: courseId("English"), room: "Room 206" },
        { id: makeId(), day: 6, start: "09:30", end: "11:00", courseId: courseId("Programming Fundamentals (C++)"), room: "Lab 3" }
    ];
}

let classes = readStorage(STORAGE.classes, null);
if (!Array.isArray(classes)) {
    classes = seedClasses();
    writeStorage(STORAGE.classes, classes);
}

let settings = readStorage(STORAGE.settings, {});
if (!settings || typeof settings !== "object" || Array.isArray(settings)) settings = {};

const defaultGradeScale = [
    { min: 0, max: 49, points: 0.0 },
    { min: 50, max: 54, points: 1.0 },
    { min: 55, max: 59, points: 1.7 },
    { min: 60, max: 64, points: 2.0 },
    { min: 65, max: 69, points: 2.3 },
    { min: 70, max: 74, points: 2.7 },
    { min: 75, max: 79, points: 3.0 },
    { min: 80, max: 84, points: 3.3 },
    { min: 85, max: 89, points: 3.7 },
    { min: 90, max: 100, points: 4.0 }
];

function isValidGradeScale(scale) {
    if (!Array.isArray(scale) || scale.length !== 10) return false;
    const ordered = [...scale].sort((a, b) => a.min - b.min);
    return ordered.every((band, index) => Number.isInteger(band.min) && Number.isInteger(band.max) && Number.isFinite(band.points) && band.points >= 0 && band.points <= 4 && band.min === (index === 0 ? 0 : ordered[index - 1].max + 1) && band.max >= band.min && band.max <= 100 && (index === 9 ? band.max === 100 : band.max < 100))
        && ordered.every((band, index) => index === 0 || band.points >= ordered[index - 1].points);
}

let gradeScale = readStorage(STORAGE.gradeScale, null);
if (!isValidGradeScale(gradeScale)) {
    gradeScale = defaultGradeScale.map((band) => ({ ...band }));
    writeStorage(STORAGE.gradeScale, gradeScale);
}

let grades = readStorage(STORAGE.grades, []);
if (!Array.isArray(grades)) grades = [];

function saveCourses() { writeStorage(STORAGE.courses, courses); }
function saveAssignments() { writeStorage(STORAGE.assignments, assignments); }
function saveClasses() { writeStorage(STORAGE.classes, classes); }
function saveSettings() { writeStorage(STORAGE.settings, settings); }
function courseById(id) { return courses.find((course) => course.id === id); }
function courseName(id) { return courseById(id)?.name || "Unassigned course"; }
function escapeHtml(value = "") {
    return String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}
function renderEmpty(title, description) { return `<div class="empty-state"><strong>${title}</strong>${description}</div>`; }
function dateLabel(key) { return new Intl.DateTimeFormat("en-US", { day: "numeric", month: "short" }).format(dateFromKey(key)); }
function weekdayFor(date) { return (date.getDay() + 6) % 7 + 1; }
function isThisWeek(date) {
    const monday = new Date(today);
    monday.setDate(today.getDate() - ((today.getDay() + 6) % 7));
    return date >= monday && date < shiftDate(monday, 7);
}
function pluralTasks(count) { return `${count} ${count === 1 ? "task" : "tasks"}`; }

function getDueLabel(item) {
    if (item.completed) return "Completed";
    const days = Math.round((dateFromKey(item.due) - today) / 86400000);
    if (days < 0) return `${Math.abs(days)}d overdue`;
    if (days === 0) return "Today";
    if (days === 1) return "Tomorrow";
    return dateLabel(item.due);
}

function assignmentRow(item, includeActions = false) {
    const colorIndex = Math.abs([...courseName(item.courseId)].reduce((sum, character) => sum + character.charCodeAt(0), 0)) % courseColors.length;
    const days = Math.round((dateFromKey(item.due) - today) / 86400000);
    const dueClass = item.completed ? "" : days < 0 ? "overdue" : days <= 2 ? "due-soon" : "";
    const priorityLabel = item.priority.charAt(0).toUpperCase() + item.priority.slice(1);
    const priority = `<span class="priority-label priority-${item.priority}">${priorityLabel}</span>`;
    const actions = includeActions ? `<div class="row-actions"><button class="row-action" data-action="edit-assignment" data-id="${item.id}" aria-label="Edit assignment" title="Edit">${icon("edit")}</button><button class="row-action delete" data-action="delete-assignment" data-id="${item.id}" aria-label="Delete assignment" title="Delete">${icon("trash")}</button></div>` : "";
    return `<div class="assignment-row ${item.completed ? "is-completed" : ""}"><button class="assignment-check ${item.completed ? "done" : ""}" data-action="toggle-assignment" data-id="${item.id}" aria-label="${item.completed ? "Mark as incomplete" : "Mark as completed"}" title="${item.completed ? "Mark as incomplete" : "Mark as completed"}">${icon("check")}</button><div class="assignment-main"><span class="assignment-name">${escapeHtml(item.title)}${priority}</span><span class="assignment-meta"><i class="course-dot ${courseColors[colorIndex]}"></i>${escapeHtml(courseName(item.courseId))}${item.description ? `<span>·</span><span>${escapeHtml(item.description)}</span>` : ""}</span><span class="assignment-date ${dueClass}">${getDueLabel(item)}</span></div>${actions}</div>`;
}

function renderDashboard() {
    const active = assignments.filter((item) => !item.completed);
    const completed = assignments.length - active.length;
    const rate = assignments.length ? Math.round((completed / assignments.length) * 100) : 0;
    const dueThisWeek = active.filter((item) => isThisWeek(dateFromKey(item.due)));
    const todayClasses = classes.filter((item) => item.day === weekdayFor(today)).sort((a, b) => a.start.localeCompare(b.start));
    document.getElementById("stat-active").textContent = active.length;
    document.getElementById("stat-week").textContent = dueThisWeek.length;
    document.getElementById("stat-completed").textContent = `${rate}%`;
    document.getElementById("stat-classes").textContent = todayClasses.length;
    document.getElementById("stat-classes-caption").textContent = "sample timetable";
    document.getElementById("nav-task-count").textContent = active.length;
    document.getElementById("nav-course-count").textContent = courses.length;
    document.getElementById("progress-percent").textContent = `${rate}%`;
    document.getElementById("progress-ring").style.setProperty("--progress", `${rate}%`);
    document.getElementById("legend-done").textContent = completed;
    document.getElementById("legend-open").textContent = active.length;
    document.getElementById("stat-active-caption").textContent = active.length === 1 ? "awaiting completion" : "awaiting completion";
    document.getElementById("stat-completed-caption").textContent = `${completed} of ${assignments.length} assignments`;
    document.getElementById("progress-note-text").textContent = assignments.length ? (rate === 100 ? "Great work — all assignments are complete." : `${completed} of ${assignments.length} assignments completed. Keep it up.`) : "Add an assignment to start tracking your progress.";
    const upcoming = [...active].sort((a, b) => a.due.localeCompare(b.due)).slice(0, 4);
    document.getElementById("dashboard-assignments").innerHTML = upcoming.length ? upcoming.map((item) => assignmentRow(item)).join("") : renderEmpty("No active assignments", "Add an assignment to see it here.");
    document.getElementById("week-badge").textContent = pluralTasks(dueThisWeek.length);
    document.getElementById("week-list").innerHTML = dueThisWeek.length ? dueThisWeek.sort((a, b) => a.due.localeCompare(b.due)).slice(0, 5).map((item) => {
        const date = dateFromKey(item.due);
        return `<div class="week-item"><span class="week-date-box"><strong>${date.getDate()}</strong><small>${weekDaysShort[(date.getDay() + 6) % 7]}</small></span><span class="week-item-copy"><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(courseName(item.courseId))}</small></span></div>`;
    }).join("") : renderEmpty("No deadlines this week", "Your upcoming tasks will appear here.");
    document.getElementById("schedule-today-label").textContent = fullDateFormatter.format(today);
    document.getElementById("today-schedule").innerHTML = todayClasses.length ? todayClasses.map((item) => `<div class="today-class"><span class="class-time">${item.start}</span><span class="class-color"></span><span class="class-info"><strong>${escapeHtml(courseName(item.courseId))}</strong><small>${escapeHtml(item.room || "Classroom not set")}</small></span><span class="class-room">${item.end}</span></div>`).join("") : renderEmpty("No classes scheduled", "Add your own classes in the weekly timetable.");
}

function renderNotifications() {
    const dueSoon = assignments.filter((item) => {
        if (item.completed) return false;
        const days = Math.round((dateFromKey(item.due) - today) / 86400000);
        return days <= 3;
    }).sort((a, b) => a.due.localeCompare(b.due));
    const count = dueSoon.length;
    const badge = document.getElementById("notification-count");
    badge.hidden = count === 0;
    badge.textContent = count > 9 ? "9+" : String(count);
    document.getElementById("notification-summary").textContent = count ? `${count} overdue or due within 3 days` : "No urgent deadlines";
    document.getElementById("notification-list").innerHTML = count ? dueSoon.slice(0, 6).map((item) => {
        const days = Math.round((dateFromKey(item.due) - today) / 86400000);
        const dueText = days < 0 ? `${Math.abs(days)} day${days === -1 ? "" : "s"} overdue` : days === 0 ? "Due today" : days === 1 ? "Due tomorrow" : `Due ${dateLabel(item.due)}`;
        return `<button class="notification-item" data-notification-task="${item.id}"><span class="notification-indicator ${days < 0 ? "is-overdue" : ""}"></span><span><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(courseName(item.courseId))} · ${dueText}</small></span><span class="priority-mini priority-${item.priority}">${item.priority}</span></button>`;
    }).join("") : renderEmpty("Nothing urgent", "Deadlines due in the next three days will appear here.");
}

function renderAssignments() {
    const query = document.getElementById("assignment-search").value.trim().toLocaleLowerCase("en");
    const counts = { all: assignments.length, active: assignments.filter((item) => !item.completed).length, completed: assignments.filter((item) => item.completed).length };
    document.getElementById("filter-count-all").textContent = counts.all;
    document.getElementById("filter-count-active").textContent = counts.active;
    document.getElementById("filter-count-completed").textContent = counts.completed;
    const filtered = [...assignments].filter((item) => {
        const matchesFilter = currentFilter === "all" || (currentFilter === "completed" ? item.completed : !item.completed);
        const matchesSearch = !query || `${item.title} ${courseName(item.courseId)}`.toLocaleLowerCase("en").includes(query);
        const matchesPriority = currentPriority === "all" || item.priority === currentPriority;
        const matchesCourse = currentCourseFilter === "all" || item.courseId === currentCourseFilter;
        const daysUntilDue = Math.round((dateFromKey(item.due) - today) / 86400000);
        const matchesDeadline = currentDeadlineFilter === "all"
            || (currentDeadlineFilter === "overdue" && !item.completed && daysUntilDue < 0)
            || (currentDeadlineFilter === "today" && !item.completed && daysUntilDue === 0)
            || (currentDeadlineFilter === "week" && !item.completed && daysUntilDue > 0 && daysUntilDue <= 7)
            || (currentDeadlineFilter === "later" && !item.completed && daysUntilDue > 7);
        return matchesFilter && matchesPriority && matchesCourse && matchesDeadline && matchesSearch;
    }).sort((a, b) => Number(a.completed) - Number(b.completed) || a.due.localeCompare(b.due));
    document.getElementById("assignment-list").innerHTML = filtered.length ? filtered.map((item) => assignmentRow(item, true)).join("") : renderEmpty("No assignments found", "Change your filters or add a new assignment.");
}

function renderCourses() {
    const courseList = document.getElementById("course-list");
    const query = document.getElementById("course-search").value.trim().toLocaleLowerCase("en");
    const filteredCourses = courses.filter((course) => course.name.toLocaleLowerCase("en").includes(query));
    document.getElementById("course-result-count").textContent = `${filteredCourses.length} ${filteredCourses.length === 1 ? "course" : "courses"}`;
    if (!courses.length) {
        courseList.innerHTML = `<article class="panel course-empty">${renderEmpty("No courses yet", "Add courses to organize assignments and your class schedule.")}</article>`;
        return;
    }
    if (!filteredCourses.length) {
        courseList.innerHTML = `<article class="panel course-empty">${renderEmpty("No matching courses", "Try another course name or clear the search field.")}</article>`;
        return;
    }
    courseList.innerHTML = filteredCourses.map((course) => {
        const index = courses.indexOf(course);
        const related = assignments.filter((item) => item.courseId === course.id);
        const done = related.filter((item) => item.completed).length;
        const progress = related.length ? Math.round(done / related.length * 100) : 0;
        const color = courseColors[index % courseColors.length];
        return `<article class="panel course-card"><div class="course-card-top"><span class="course-mark ${color}">${escapeHtml(course.name.trim().slice(0, 2).toUpperCase())}</span><div class="course-actions"><button class="row-action" data-action="edit-course" data-id="${course.id}" aria-label="Edit ${escapeHtml(course.name)}" title="Edit course">${icon("edit")}</button><button class="row-action delete" data-action="delete-course" data-id="${course.id}" aria-label="Remove ${escapeHtml(course.name)}" title="Remove course">${icon("trash")}</button></div></div><h2>${escapeHtml(course.name)}</h2><p>${pluralTasks(related.length)} · ${done} completed</p><div class="course-progress"><span style="width:${progress}%"></span></div><div class="course-card-footer"><span>Assignment progress</span><strong>${progress}%</strong></div></article>`;
    }).join("");
}

function renderCourseOptions() {
    const options = courses.length ? courses.map((course) => `<option value="${course.id}">${escapeHtml(course.name)}</option>`).join("") : "<option value=\"\">Add a course first</option>";
    document.getElementById("assignment-course").innerHTML = options;
    document.getElementById("class-course").innerHTML = options;
    document.getElementById("assignment-course").disabled = !courses.length;
    document.getElementById("class-course").disabled = !courses.length;
    const courseFilter = document.getElementById("assignment-course-filter");
    const selectedCourse = courses.some((course) => course.id === currentCourseFilter) ? currentCourseFilter : "all";
    if (selectedCourse !== currentCourseFilter) currentCourseFilter = selectedCourse;
    courseFilter.innerHTML = `<option value="all">All courses</option>${courses.map((course) => `<option value="${course.id}">${escapeHtml(course.name)}</option>`).join("")}`;
    courseFilter.value = currentCourseFilter;
}

function renderCalendar() {
    const year = calendarCursor.getFullYear();
    const month = calendarCursor.getMonth();
    document.getElementById("calendar-month-title").textContent = `${monthNames[month]} ${year}`;
    const first = new Date(year, month, 1);
    const gridStart = new Date(year, month, 1 - ((first.getDay() + 6) % 7));
    const headers = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => `<div class="calendar-weekday">${day}</div>`).join("");
    const days = Array.from({ length: 42 }, (_, index) => {
        const date = shiftDate(gridStart, index);
        const key = toDateKey(date);
        const due = assignments.filter((item) => item.due === key);
        const classes = ["calendar-day", date.getMonth() !== month ? "outside-month" : "", key === toDateKey(today) ? "is-today" : "", key === selectedCalendarDate ? "is-selected" : ""].filter(Boolean).join(" ");
        const events = due.slice(0, 2).map((item) => `<span class="day-event ${item.priority === "high" && !item.completed ? "high" : ""}" title="${escapeHtml(item.title)}">${escapeHtml(item.title)}</span>`).join("");
        const overflow = due.length > 2 ? `<span class="day-event">+${due.length - 2} more</span>` : "";
        return `<button class="${classes}" data-calendar-date="${key}" aria-label="${date.toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })}${due.length ? `, ${due.length} assignments due` : ""}"><span class="day-number">${date.getDate()}</span><span class="day-events">${events}${overflow}</span></button>`;
    }).join("");
    document.getElementById("calendar-grid").innerHTML = headers + days;
    renderCalendarAgenda();
}

function renderCalendarAgenda() {
    const date = dateFromKey(selectedCalendarDate);
    const due = assignments.filter((item) => item.due === selectedCalendarDate).sort((a, b) => Number(a.completed) - Number(b.completed));
    const label = selectedCalendarDate === toDateKey(today) ? "Today" : `${monthNames[date.getMonth()]} ${date.getDate()}`;
    document.getElementById("agenda-title").textContent = due.length ? `Deadlines · ${label}` : "Upcoming deadlines";
    document.querySelector(".calendar-agenda .panel-heading p").textContent = fullDateFormatter.format(date);
    document.getElementById("calendar-agenda-list").innerHTML = due.length ? due.map((item) => `<div class="agenda-item"><span class="agenda-date"><strong>${date.getDate()}</strong><small>${weekDaysShort[(date.getDay() + 6) % 7]}</small></span><span class="agenda-copy"><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(courseName(item.courseId))} · ${item.completed ? "Completed" : "Due"}</small></span></div>`).join("") : renderEmpty("No assignments due", "Select a marked date to see its assignment details.");
}

function renderSchedule() {
    const monday = new Date(today);
    monday.setDate(today.getDate() - ((today.getDay() + 6) % 7) + scheduleWeekOffset * 7);
    const days = Array.from({ length: 6 }, (_, index) => shiftDate(monday, index));
    document.getElementById("schedule-week-title").textContent = `${dateFormatter.format(days[0])} – ${dateFormatter.format(days[5])}, ${days[5].getFullYear()}`;
    const slots = Array.from({ length: 21 }, (_, index) => {
        const totalMinutes = 8 * 60 + index * 30;
        return `${String(Math.floor(totalMinutes / 60)).padStart(2, "0")}:${String(totalMinutes % 60).padStart(2, "0")}`;
    });
    let markup = '<div class="schedule-head"></div>';
    markup += days.map((date, index) => `<div class="schedule-head ${toDateKey(date) === toDateKey(today) ? "is-today" : ""}"><span>${weekDays[index]}</span><strong>${date.getDate()}</strong></div>`).join("");
    markup += slots.map((time) => `<div class="schedule-time">${time}</div>${days.map((date, index) => {
        const dayNumber = index + 1;
        const lesson = classes.find((item) => item.day === dayNumber && item.start === time);
        if (!lesson) return '<div class="schedule-cell"><div class="schedule-empty"></div></div>';
        return `<div class="schedule-cell"><article class="class-card ${courseColors[(classes.indexOf(lesson)) % courseColors.length] ? `color-${courseColors[(classes.indexOf(lesson)) % courseColors.length]}` : ""}"><strong>${escapeHtml(courseName(lesson.courseId))}</strong><span>${lesson.start}–${lesson.end} · ${escapeHtml(lesson.room || "Room not set")}</span><div class="class-card-actions"><button data-action="edit-class" data-id="${lesson.id}" aria-label="Edit ${escapeHtml(courseName(lesson.courseId))}" title="Edit class">${icon("edit")}</button><button data-action="delete-class" data-id="${lesson.id}" aria-label="Remove ${escapeHtml(courseName(lesson.courseId))}" title="Remove class">${icon("trash")}</button></div></article></div>`;
    }).join("")}`).join("");
    document.getElementById("schedule-table").innerHTML = markup;
}

function renderAnalytics() {
    const completed = assignments.filter((item) => item.completed).length;
    const active = assignments.length - completed;
    const rate = assignments.length ? Math.round(completed / assignments.length * 100) : 0;
    document.getElementById("analytics-total").textContent = assignments.length;
    document.getElementById("analytics-done").textContent = completed;
    document.getElementById("analytics-open").textContent = active;
    document.getElementById("analytics-rate").textContent = `${rate}%`;
    const counts = new Map();
    assignments.forEach((item) => counts.set(courseName(item.courseId), (counts.get(courseName(item.courseId)) || 0) + 1));
    const entries = [...counts.entries()].sort((a, b) => b[1] - a[1]);
    document.getElementById("subject-list").innerHTML = entries.length ? entries.map(([name, count]) => `<div class="subject-row"><div class="subject-heading"><span>${escapeHtml(name)}</span><strong>${count}</strong></div><div class="subject-track"><span style="width:${Math.max(8, count / assignments.length * 100)}%"></span></div></div>`).join("") : renderEmpty("No analytics yet", "Add assignments to see course statistics.");
    drawActivityChart();
}

function gradePointsFor(score, scale = gradeScale) {
    return scale.find((band) => score >= band.min && score <= band.max)?.points ?? 0;
}

function renderGradeCourseOptions() {
    const select = document.getElementById("grade-course");
    const selected = select.value;
    select.innerHTML = courses.length
        ? `<option value="">Select a course</option>${courses.map((course) => `<option value="${course.id}">${escapeHtml(course.name)}</option>`).join("")}`
        : '<option value="">Add a course first</option>';
    select.disabled = courses.length === 0;
    if (courses.some((course) => course.id === selected)) select.value = selected;
}

function renderGradeScale() {
    document.getElementById("grade-scale-editor").innerHTML = gradeScale.map((band) => `<label class="scale-band"><span>${band.min}–${band.max}%</span><input type="number" min="0" max="4" step="0.1" value="${band.points.toFixed(1)}" data-scale-min="${band.min}" aria-label="GPA points for ${band.min} to ${band.max} percent"></label>`).join("");
}

function renderGrades() {
    const totalCredits = grades.reduce((sum, item) => sum + item.credits, 0);
    const weightedPoints = grades.reduce((sum, item) => sum + gradePointsFor(item.score) * item.credits, 0);
    const weightedScore = grades.reduce((sum, item) => sum + item.score * item.credits, 0);
    document.getElementById("gpa-result").textContent = totalCredits ? (weightedPoints / totalCredits).toFixed(2) : "0.00";
    document.getElementById("grade-course-count").textContent = grades.length;
    document.getElementById("grade-average").textContent = totalCredits ? `${(weightedScore / totalCredits).toFixed(1)}%` : "0%";
    document.getElementById("grade-credits").textContent = totalCredits;
    document.getElementById("grade-tracker-count").textContent = `${grades.length} ${grades.length === 1 ? "entry" : "entries"}`;
    document.getElementById("grade-list").innerHTML = grades.length ? [...grades].sort((a, b) => courseName(a.courseId).localeCompare(courseName(b.courseId))).map((item) => {
        const points = gradePointsFor(item.score);
        return `<div class="grade-row"><div class="grade-course-info"><strong>${escapeHtml(courseName(item.courseId))}</strong><small>${item.credits} ${item.credits === 1 ? "credit" : "credits"}</small></div><div class="grade-result"><strong>${item.score.toFixed(1)}%</strong><small>${points.toFixed(1)} GPA points</small></div><div class="grade-progress"><span style="width:${item.score}%"></span></div><div class="row-actions"><button class="row-action" data-action="edit-grade" data-id="${item.id}" aria-label="Edit ${escapeHtml(courseName(item.courseId))} grade" title="Edit grade">${icon("edit")}</button><button class="row-action delete" data-action="delete-grade" data-id="${item.id}" aria-label="Delete ${escapeHtml(courseName(item.courseId))} grade" title="Delete grade">${icon("trash")}</button></div></div>`;
    }).join("") : renderEmpty("No grades added", "Enter your own course results to calculate GPA and track performance.");
    document.getElementById("grade-distribution").innerHTML = grades.length ? gradeScale.slice().reverse().map((band) => {
        const count = grades.filter((item) => item.score >= band.min && item.score <= band.max).length;
        const width = grades.length ? count / grades.length * 100 : 0;
        return `<div class="distribution-row"><div class="distribution-label"><span>${band.min}–${band.max}%</span><strong>${count}</strong></div><div class="distribution-track"><span style="width:${width}%"></span></div></div>`;
    }).join("") : renderEmpty("No grade distribution yet", "Your grade bands will appear when you add results.");
    renderGradeCourseOptions();
    renderGradeScale();
}

function drawActivityChart() {
    const canvas = document.getElementById("activity-chart");
    if (!canvas || !canvas.clientWidth) return;
    const context = canvas.getContext("2d");
    const ratio = window.devicePixelRatio || 1;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    context.scale(ratio, ratio);
    const styles = getComputedStyle(document.documentElement);
    const muted = styles.getPropertyValue("--ink-faint").trim();
    const line = styles.getPropertyValue("--line").trim();
    const purple = styles.getPropertyValue("--purple").trim();
    const blue = styles.getPropertyValue("--blue").trim();
    const padding = { top: 14, right: 12, bottom: 30, left: 28 };
    const chartWidth = width - padding.left - padding.right;
    const chartHeight = height - padding.top - padding.bottom;
    const monday = new Date(today);
    monday.setDate(today.getDate() - ((today.getDay() + 6) % 7));
    const weeks = Array.from({ length: 8 }, (_, index) => shiftDate(monday, (index - 7) * 7));
    const added = weeks.map((start) => assignments.filter((item) => {
        const created = dateFromKey(item.createdAt || item.due);
        return created >= start && created < shiftDate(start, 7);
    }).length);
    const done = weeks.map((start) => assignments.filter((item) => {
        const completedAt = dateFromKey(item.completedAt || item.due);
        return item.completed && completedAt >= start && completedAt < shiftDate(start, 7);
    }).length);
    const max = Math.max(4, ...added, ...done);
    context.font = "10px Arial, sans-serif";
    context.textBaseline = "middle";
    for (let tick = 0; tick <= 4; tick += 1) {
        const y = padding.top + chartHeight - tick / 4 * chartHeight;
        context.beginPath();
        context.strokeStyle = line;
        context.lineWidth = 1;
        context.moveTo(padding.left, y);
        context.lineTo(width - padding.right, y);
        context.stroke();
        context.fillStyle = muted;
        context.textAlign = "right";
        context.fillText(String(Math.round(max * tick / 4)), padding.left - 8, y);
    }
    const groupWidth = chartWidth / weeks.length;
    const barWidth = Math.min(13, groupWidth * .25);
    weeks.forEach((start, index) => {
        const x = padding.left + groupWidth * index + groupWidth / 2;
        const doneHeight = done[index] / max * chartHeight;
        const addedHeight = added[index] / max * chartHeight;
        context.fillStyle = purple;
        context.beginPath();
        context.roundRect(x - barWidth - 2, padding.top + chartHeight - doneHeight, barWidth, Math.max(0, doneHeight), 3);
        context.fill();
        context.fillStyle = blue;
        context.beginPath();
        context.roundRect(x + 2, padding.top + chartHeight - addedHeight, barWidth, Math.max(0, addedHeight), 3);
        context.fill();
        context.fillStyle = muted;
        context.textAlign = "center";
        context.fillText(`${start.getDate()} ${monthNames[start.getMonth()].slice(0, 3)}`, x, height - 11);
    });
}

function applyProfile() {
    const name = settings.name || "Student Name";
    const program = settings.program || "Software Engineering";
    const university = settings.university || "Astana IT University";
    const group = settings.group || "Software Engineering";
    const academicYear = settings.academicYear || "";
    document.getElementById("profile-name").textContent = name;
    document.getElementById("profile-group").textContent = group;
    document.getElementById("profile-avatar").textContent = name.split(/\s+/).slice(0, 2).map((part) => part[0] || "").join("").toLocaleUpperCase("en");
    document.getElementById("dashboard-program").textContent = `${program} Program`;
    document.getElementById("sidebar-program").textContent = program;
    document.getElementById("sidebar-university").textContent = university;
    document.getElementById("setting-name").value = settings.name || "";
    document.getElementById("setting-program").value = program;
    document.getElementById("setting-university").value = university;
    document.getElementById("setting-group").value = settings.group || "";
    document.getElementById("setting-academic-year").value = academicYear;
    document.getElementById("profile-display-name").textContent = name;
    document.getElementById("profile-display-program").textContent = `${program} · ${university}`;
    document.getElementById("profile-avatar-large").textContent = name.split(/\s+/).slice(0, 2).map((part) => part[0] || "").join("").toLocaleUpperCase("en") || "S";
}

function renderAll() {
    renderCourseOptions();
    renderCourses();
    renderDashboard();
    renderAssignments();
    renderSchedule();
    renderCalendar();
    renderAnalytics();
    renderNotifications();
    renderGrades();
    applyProfile();
}

function navigate(view) {
    const target = document.getElementById(`view-${view}`);
    if (!target) return;
    document.querySelectorAll(".view-section").forEach((section) => section.classList.toggle("active", section === target));
    document.querySelectorAll(".nav-link").forEach((link) => link.classList.toggle("active", link.dataset.view === view));
    document.getElementById("breadcrumb-current").textContent = target.dataset.title;
    document.getElementById("sidebar").classList.remove("open");
    if (view === "analytics") drawActivityChart();
}

function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("visible"), 2500);
}

function openModal(id) {
    document.querySelectorAll(".modal-backdrop.open").forEach((modal) => closeModal(modal));
    const modal = document.getElementById(id);
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    modal.querySelector("input:not([type=hidden]), select")?.focus();
}

function closeModal(modal) {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    if (!document.querySelector(".modal-backdrop.open")) document.body.style.overflow = "";
}

function openAssignment(item = null) {
    document.getElementById("assignment-form").reset();
    document.getElementById("assignment-id").value = item?.id || "";
    document.getElementById("assignment-title").value = item?.title || "";
    document.getElementById("assignment-course").value = item?.courseId || courses[0]?.id || "";
    document.getElementById("assignment-due").value = item?.due || toDateKey(today);
    document.getElementById("assignment-priority").value = item?.priority || "medium";
    document.getElementById("assignment-description").value = item?.description || "";
    document.getElementById("assignment-modal-title").textContent = item ? "Edit assignment" : "New assignment";
    document.getElementById("save-assignment").innerHTML = `${icon("check")}${item ? "Save changes" : "Save assignment"}`;
    openModal("assignment-modal");
}

function openCourse(course = null) {
    document.getElementById("course-form").reset();
    document.getElementById("course-id").value = course?.id || "";
    document.getElementById("course-name").value = course?.name || "";
    document.getElementById("course-modal-title").textContent = course ? "Edit course" : "Add course";
    openModal("course-modal");
}

function openClass(item = null) {
    document.getElementById("class-form").reset();
    document.getElementById("class-id").value = item?.id || "";
    document.getElementById("class-course").value = item?.courseId || courses[0]?.id || "";
    document.getElementById("class-day").value = String(item?.day || 1);
    document.getElementById("class-room").value = item?.room || "";
    document.getElementById("class-start").value = item?.start || "09:00";
    document.getElementById("class-end").value = item?.end || "10:00";
    document.getElementById("class-modal-title").textContent = item ? "Edit class" : "Add class";
    openModal("class-modal");
}

function setTheme(theme) {
    settings.theme = theme === "dark" ? "dark" : "light";
    document.documentElement.dataset.theme = settings.theme;
    document.querySelectorAll("[data-theme-option]").forEach((button) => button.classList.toggle("active", button.dataset.themeOption === settings.theme));
    saveSettings();
    drawActivityChart();
}

function toggleAssignment(id) {
    const item = assignments.find((assignment) => assignment.id === id);
    if (!item) return;
    item.completed = !item.completed;
    item.completedAt = item.completed ? toDateKey(today) : null;
    saveAssignments();
    renderAll();
    showToast(item.completed ? "Assignment marked complete." : "Assignment moved back to in progress.");
}

document.querySelectorAll("[data-view]").forEach((button) => button.addEventListener("click", () => navigate(button.dataset.view)));
document.querySelectorAll("[data-open-assignment]").forEach((button) => button.addEventListener("click", () => openAssignment()));
document.querySelectorAll("[data-open-course]").forEach((button) => button.addEventListener("click", () => openCourse()));
document.querySelectorAll("[data-open-class]").forEach((button) => button.addEventListener("click", () => openClass()));
document.querySelectorAll("[data-close-modal]").forEach((button) => button.addEventListener("click", () => closeModal(button.closest(".modal-backdrop"))));
document.querySelectorAll(".modal-backdrop").forEach((modal) => modal.addEventListener("click", (event) => { if (event.target === modal) closeModal(modal); }));
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") document.querySelectorAll(".modal-backdrop.open").forEach(closeModal);
});

document.querySelectorAll("[data-filter]").forEach((button) => button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach((tab) => tab.classList.toggle("active", tab === button));
    renderAssignments();
}));
document.getElementById("assignment-search").addEventListener("input", renderAssignments);
document.getElementById("course-search").addEventListener("input", renderCourses);
document.getElementById("assignment-course-filter").addEventListener("change", (event) => {
    currentCourseFilter = event.target.value;
    renderAssignments();
});
document.getElementById("priority-filter").addEventListener("change", (event) => {
    currentPriority = event.target.value;
    renderAssignments();
});
document.getElementById("deadline-filter").addEventListener("change", (event) => {
    currentDeadlineFilter = event.target.value;
    renderAssignments();
});

function handleAssignmentAction(event) {
    const button = event.target.closest("[data-action]");
    if (!button) return;
    const item = assignments.find((assignment) => assignment.id === button.dataset.id);
    if (!item) return;
    if (button.dataset.action === "toggle-assignment") toggleAssignment(item.id);
    if (button.dataset.action === "edit-assignment") openAssignment(item);
    if (button.dataset.action === "delete-assignment" && window.confirm(`Delete “${item.title}”?`)) {
        assignments = assignments.filter((assignment) => assignment.id !== item.id);
        saveAssignments();
        renderAll();
        showToast("Assignment deleted.");
    }
}
document.getElementById("assignment-list").addEventListener("click", handleAssignmentAction);
document.getElementById("dashboard-assignments").addEventListener("click", handleAssignmentAction);

document.getElementById("assignment-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const id = document.getElementById("assignment-id").value;
    const existing = assignments.find((item) => item.id === id);
    const value = {
        id: existing?.id || makeId(),
        title: document.getElementById("assignment-title").value.trim(),
        courseId: document.getElementById("assignment-course").value,
        due: document.getElementById("assignment-due").value,
        priority: document.getElementById("assignment-priority").value,
        description: document.getElementById("assignment-description").value.trim(),
        completed: existing?.completed || false,
        completedAt: existing?.completedAt || null,
        createdAt: existing?.createdAt || toDateKey(today)
    };
    if (!value.title || !value.courseId || !value.due) return;
    assignments = existing ? assignments.map((item) => item.id === id ? value : item) : [...assignments, value];
    saveAssignments();
    closeModal(document.getElementById("assignment-modal"));
    renderAll();
    showToast(existing ? "Assignment updated." : "Assignment added.");
});

document.getElementById("course-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const id = document.getElementById("course-id").value;
    const name = document.getElementById("course-name").value.trim();
    if (!name) return;
    if (courses.some((course) => course.name.toLocaleLowerCase("en") === name.toLocaleLowerCase("en") && course.id !== id)) {
        showToast("A course with that name already exists.");
        return;
    }
    const existing = courses.find((course) => course.id === id);
    courses = existing ? courses.map((course) => course.id === id ? { ...course, name } : course) : [...courses, { id: makeId(), name }];
    saveCourses();
    closeModal(document.getElementById("course-modal"));
    renderAll();
    showToast(existing ? "Course updated." : "Course added.");
});

document.getElementById("course-list").addEventListener("click", (event) => {
    const button = event.target.closest("[data-action]");
    if (!button) return;
    const course = courseById(button.dataset.id);
    if (!course) return;
    if (button.dataset.action === "edit-course") openCourse(course);
    if (button.dataset.action === "delete-course" && window.confirm(`Remove “${course.name}” and its linked assignments and classes?`)) {
        courses = courses.filter((item) => item.id !== course.id);
        assignments = assignments.filter((item) => item.courseId !== course.id);
        classes = classes.filter((item) => item.courseId !== course.id);
        saveCourses();
        saveAssignments();
        saveClasses();
        renderAll();
        showToast("Course and linked items removed.");
    }
});

document.getElementById("class-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const id = document.getElementById("class-id").value;
    const existing = classes.find((item) => item.id === id);
    const value = {
        id: existing?.id || makeId(),
        courseId: document.getElementById("class-course").value,
        day: Number(document.getElementById("class-day").value),
        room: document.getElementById("class-room").value.trim(),
        start: document.getElementById("class-start").value,
        end: document.getElementById("class-end").value
    };
    if (!value.courseId || !value.start || !value.end || value.start >= value.end) {
        showToast("Please enter a valid class time.");
        return;
    }
    const overlaps = classes.some((item) => item.id !== id && item.day === value.day && item.start < value.end && item.end > value.start);
    if (overlaps) {
        showToast("This time overlaps another class on that day.");
        return;
    }
    classes = existing ? classes.map((item) => item.id === id ? value : item) : [...classes, value];
    saveClasses();
    closeModal(document.getElementById("class-modal"));
    renderAll();
    showToast(existing ? "Class updated." : "Class added.");
});

document.getElementById("schedule-table").addEventListener("click", (event) => {
    const button = event.target.closest("[data-action]");
    if (!button) return;
    const item = classes.find((entry) => entry.id === button.dataset.id);
    if (!item) return;
    if (button.dataset.action === "edit-class") openClass(item);
    if (button.dataset.action === "delete-class" && window.confirm(`Remove ${courseName(item.courseId)} from ${weekDays[item.day - 1]}?`)) {
        classes = classes.filter((entry) => entry.id !== item.id);
        saveClasses();
        renderAll();
        showToast("Class removed.");
    }
});

function resetGradeForm() {
    document.getElementById("grade-form").reset();
    document.getElementById("grade-id").value = "";
    document.getElementById("grade-form-heading").textContent = "Add a course grade";
    document.getElementById("save-grade").innerHTML = `${icon("plus")}Save grade`;
    document.getElementById("cancel-grade-edit").hidden = true;
}

document.getElementById("grade-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const id = document.getElementById("grade-id").value;
    const existing = grades.find((item) => item.id === id);
    const value = {
        id: existing?.id || makeId(),
        courseId: document.getElementById("grade-course").value,
        score: Number(document.getElementById("grade-value").value),
        credits: Number(document.getElementById("grade-credit-value").value)
    };
    if (!value.courseId || !Number.isFinite(value.score) || value.score < 0 || value.score > 100 || !Number.isInteger(value.credits) || value.credits < 1 || value.credits > 30) return;
    grades = existing ? grades.map((item) => item.id === id ? value : item) : [...grades, value];
    writeStorage(STORAGE.grades, grades);
    resetGradeForm();
    renderGrades();
    showToast(existing ? "Grade updated." : "Grade saved.");
});

document.getElementById("cancel-grade-edit").addEventListener("click", resetGradeForm);
document.getElementById("grade-list").addEventListener("click", (event) => {
    const button = event.target.closest("[data-action]");
    if (!button) return;
    const item = grades.find((grade) => grade.id === button.dataset.id);
    if (!item) return;
    if (button.dataset.action === "edit-grade") {
        document.getElementById("grade-id").value = item.id;
        document.getElementById("grade-course").value = item.courseId;
        document.getElementById("grade-value").value = item.score;
        document.getElementById("grade-credit-value").value = item.credits;
        document.getElementById("grade-form-heading").textContent = "Edit course grade";
        document.getElementById("save-grade").innerHTML = `${icon("check")}Save changes`;
        document.getElementById("cancel-grade-edit").hidden = false;
        document.getElementById("grade-form-heading").scrollIntoView({ behavior: "smooth", block: "center" });
    }
    if (button.dataset.action === "delete-grade" && window.confirm(`Delete the grade for ${courseName(item.courseId)}?`)) {
        grades = grades.filter((grade) => grade.id !== item.id);
        writeStorage(STORAGE.grades, grades);
        if (document.getElementById("grade-id").value === item.id) resetGradeForm();
        renderGrades();
        showToast("Grade deleted.");
    }
});

document.getElementById("grade-scale-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const nextScale = defaultGradeScale.map((band) => ({
        ...band,
        points: Number(document.querySelector(`[data-scale-min="${band.min}"]`).value)
    }));
    if (!isValidGradeScale(nextScale)) {
        showToast("GPA points must be between 0 and 4 and must not decrease for higher grade bands.");
        return;
    }
    gradeScale = nextScale;
    writeStorage(STORAGE.gradeScale, gradeScale);
    renderGrades();
    document.getElementById("grade-scale-message").textContent = "Conversion table saved";
    window.setTimeout(() => { document.getElementById("grade-scale-message").textContent = ""; }, 2200);
});

document.getElementById("reset-grade-scale").addEventListener("click", () => {
    if (!window.confirm("Restore the demonstration GPA conversion table?")) return;
    gradeScale = defaultGradeScale.map((band) => ({ ...band }));
    writeStorage(STORAGE.gradeScale, gradeScale);
    renderGrades();
    showToast("Demonstration scale restored.");
});

function exportStudentData() {
    const bundle = {
        application: "AITU SMART CAMPUS",
        dataVersion: 1,
        exportedAt: new Date().toISOString(),
        courses,
        assignments,
        classes,
        grades,
        gradeScale,
        settings
    };
    const file = new Blob([JSON.stringify(bundle, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = url;
    link.download = `aitu-smart-campus-${toDateKey(today)}.json`;
    link.click();
    URL.revokeObjectURL(url);
    document.getElementById("data-management-message").textContent = "Student data exported as JSON.";
}

function validateImportedData(bundle) {
    const fail = (message) => { throw new Error(message); };
    const validText = (value, limit = 200) => typeof value === "string" && value.trim().length > 0 && value.length <= limit;
    const validDate = (value) => typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(dateFromKey(value).getTime()) && toDateKey(dateFromKey(value)) === value;
    const validTime = (value) => typeof value === "string" && /^(?:[01]\d|2[0-3]):[0-5]\d$/.test(value);
    if (!bundle || bundle.application !== "AITU SMART CAMPUS" || bundle.dataVersion !== 1) fail("This file is not a supported AITU Smart Campus export.");
    if (!["courses", "assignments", "classes", "grades"].every((key) => Array.isArray(bundle[key])) || !isValidGradeScale(bundle.gradeScale)) fail("The file is missing required data or has an invalid GPA scale.");
    if (!bundle.settings || typeof bundle.settings !== "object" || Array.isArray(bundle.settings)) fail("The student settings are invalid.");
    const idsAreUnique = (items) => items.every((item) => validText(item.id, 100)) && new Set(items.map((item) => item.id)).size === items.length;
    if (!idsAreUnique(bundle.courses) || bundle.courses.some((course) => !validText(course.name, 80))) fail("Course records are invalid.");
    const courseIds = new Set(bundle.courses.map((course) => course.id));
    if (!idsAreUnique(bundle.assignments) || bundle.assignments.some((item) => !validText(item.title, 90) || !courseIds.has(item.courseId) || !validDate(item.due) || !["high", "medium", "low"].includes(item.priority) || typeof item.completed !== "boolean" || (item.description !== undefined && typeof item.description !== "string") || (item.createdAt && !validDate(item.createdAt)) || (item.completedAt && !validDate(item.completedAt)))) fail("One or more assignment records are invalid.");
    if (!idsAreUnique(bundle.classes) || bundle.classes.some((item) => !courseIds.has(item.courseId) || !Number.isInteger(item.day) || item.day < 1 || item.day > 6 || !validTime(item.start) || !validTime(item.end) || item.start >= item.end || (item.room !== undefined && typeof item.room !== "string"))) fail("One or more class schedule records are invalid.");
    if (bundle.classes.some((item, index) => bundle.classes.slice(index + 1).some((other) => item.day === other.day && item.start < other.end && item.end > other.start))) fail("The imported timetable contains overlapping classes.");
    if (!idsAreUnique(bundle.grades) || bundle.grades.some((item) => !courseIds.has(item.courseId) || !Number.isFinite(item.score) || item.score < 0 || item.score > 100 || !Number.isInteger(item.credits) || item.credits < 1 || item.credits > 30)) fail("One or more grade records are invalid.");
    if (bundle.settings.theme !== undefined && !["dark", "light"].includes(bundle.settings.theme)) fail("The saved theme is invalid.");
    for (const key of ["name", "program", "university", "group", "academicYear"]) {
        if (bundle.settings[key] !== undefined && typeof bundle.settings[key] !== "string") fail("One or more profile fields are invalid.");
    }
    return true;
}

function importStudentData(bundle) {
    validateImportedData(bundle);
    courses = bundle.courses;
    assignments = bundle.assignments;
    classes = bundle.classes;
    grades = bundle.grades;
    gradeScale = bundle.gradeScale;
    settings = bundle.settings;
    saveCourses();
    saveAssignments();
    saveClasses();
    writeStorage(STORAGE.grades, grades);
    writeStorage(STORAGE.gradeScale, gradeScale);
    saveSettings();
    document.documentElement.dataset.theme = settings.theme || "light";
    document.querySelectorAll("[data-theme-option]").forEach((button) => button.classList.toggle("active", button.dataset.themeOption === (settings.theme || "light")));
    renderAll();
}

document.getElementById("export-data").addEventListener("click", exportStudentData);
document.getElementById("import-data-trigger").addEventListener("click", () => document.getElementById("import-data-file").click());
document.getElementById("import-data-file").addEventListener("change", async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const status = document.getElementById("data-management-message");
    try {
        const bundle = JSON.parse(await file.text());
        importStudentData(bundle);
        status.textContent = "Import complete. All saved student data has been updated.";
    } catch (error) {
        status.textContent = `Import cancelled: ${error.message}`;
    } finally {
        event.target.value = "";
    }
});

document.getElementById("reset-demo-data").addEventListener("click", () => {
    if (!window.confirm("Reset all courses, assignments, classes, grades, profile details, and the GPA scale to demonstration data?")) return;
    courses = seedCourses();
    assignments = seedAssignments();
    classes = seedClasses();
    grades = [];
    gradeScale = defaultGradeScale.map((band) => ({ ...band }));
    settings = { theme: "light" };
    saveCourses();
    saveAssignments();
    saveClasses();
    writeStorage(STORAGE.grades, grades);
    writeStorage(STORAGE.gradeScale, gradeScale);
    saveSettings();
    document.documentElement.dataset.theme = "light";
    document.querySelectorAll("[data-theme-option]").forEach((button) => button.classList.toggle("active", button.dataset.themeOption === "light"));
    currentFilter = "all";
    currentPriority = "all";
    currentCourseFilter = "all";
    currentDeadlineFilter = "all";
    document.getElementById("priority-filter").value = "all";
    document.getElementById("assignment-course-filter").value = "all";
    document.getElementById("deadline-filter").value = "all";
    document.getElementById("assignment-search").value = "";
    document.getElementById("course-search").value = "";
    renderAll();
    document.getElementById("data-management-message").textContent = "Demonstration data restored. No real student grades are included.";
});

document.getElementById("calendar-grid").addEventListener("click", (event) => {
    const day = event.target.closest("[data-calendar-date]");
    if (!day) return;
    selectedCalendarDate = day.dataset.calendarDate;
    const selected = dateFromKey(selectedCalendarDate);
    if (selected.getMonth() !== calendarCursor.getMonth() || selected.getFullYear() !== calendarCursor.getFullYear()) calendarCursor = new Date(selected.getFullYear(), selected.getMonth(), 1);
    renderCalendar();
});
document.getElementById("calendar-prev").addEventListener("click", () => { calendarCursor.setMonth(calendarCursor.getMonth() - 1); renderCalendar(); });
document.getElementById("calendar-next").addEventListener("click", () => { calendarCursor.setMonth(calendarCursor.getMonth() + 1); renderCalendar(); });
document.getElementById("calendar-today").addEventListener("click", () => { calendarCursor = new Date(today.getFullYear(), today.getMonth(), 1); selectedCalendarDate = toDateKey(today); renderCalendar(); });
document.getElementById("schedule-prev").addEventListener("click", () => { scheduleWeekOffset -= 1; renderSchedule(); });
document.getElementById("schedule-next").addEventListener("click", () => { scheduleWeekOffset += 1; renderSchedule(); });
document.getElementById("schedule-today").addEventListener("click", () => { scheduleWeekOffset = 0; renderSchedule(); });

document.querySelectorAll("[data-theme-option]").forEach((button) => button.addEventListener("click", () => setTheme(button.dataset.themeOption)));
document.getElementById("save-profile").addEventListener("click", () => {
    settings = {
        ...settings,
        name: document.getElementById("setting-name").value.trim(),
        program: document.getElementById("setting-program").value.trim() || "Software Engineering",
        university: document.getElementById("setting-university").value.trim() || "Astana IT University",
        group: document.getElementById("setting-group").value.trim(),
        academicYear: document.getElementById("setting-academic-year").value
    };
    saveSettings();
    applyProfile();
    const message = document.getElementById("profile-save-message");
    message.textContent = "Profile saved";
    window.setTimeout(() => { message.textContent = ""; }, 2200);
});
document.getElementById("clear-data").addEventListener("click", () => {
    if (!window.confirm("Delete all assignments? This cannot be undone.")) return;
    assignments = [];
    saveAssignments();
    renderAll();
    showToast("All assignments cleared.");
});
document.getElementById("menu-toggle").addEventListener("click", () => document.getElementById("sidebar").classList.toggle("open"));
document.getElementById("notification-button").addEventListener("click", () => {
    const panel = document.getElementById("notification-panel");
    const isOpen = panel.hidden;
    panel.hidden = !isOpen;
    document.getElementById("notification-button").setAttribute("aria-expanded", String(isOpen));
});
document.getElementById("close-notifications").addEventListener("click", () => {
    document.getElementById("notification-panel").hidden = true;
    document.getElementById("notification-button").setAttribute("aria-expanded", "false");
});
document.addEventListener("click", (event) => {
    const panel = document.getElementById("notification-panel");
    if (!panel.hidden && !panel.contains(event.target) && !document.getElementById("notification-button").contains(event.target)) {
        panel.hidden = true;
        document.getElementById("notification-button").setAttribute("aria-expanded", "false");
    }
});
document.getElementById("notification-list").addEventListener("click", (event) => {
    const item = event.target.closest("[data-notification-task]");
    if (!item) return;
    document.getElementById("notification-panel").hidden = true;
    document.getElementById("notification-button").setAttribute("aria-expanded", "false");
    currentFilter = "active";
    currentPriority = "all";
    currentCourseFilter = "all";
    currentDeadlineFilter = "all";
    document.querySelectorAll("[data-filter]").forEach((tab) => tab.classList.toggle("active", tab.dataset.filter === "active"));
    document.getElementById("assignment-course-filter").value = "all";
    document.getElementById("priority-filter").value = "all";
    document.getElementById("deadline-filter").value = "all";
    document.getElementById("assignment-search").value = "";
    navigate("assignments");
    const row = [...document.querySelectorAll("#assignment-list .assignment-row")].find((entry) => entry.querySelector(`[data-id="${item.dataset.notificationTask}"]`));
    row?.scrollIntoView({ behavior: "smooth", block: "center" });
});
window.addEventListener("resize", () => { if (document.getElementById("view-analytics").classList.contains("active")) drawActivityChart(); });

document.getElementById("today-label").textContent = fullDateFormatter.format(today);
document.getElementById("welcome-date").textContent = fullDateFormatter.format(today).toUpperCase();
document.documentElement.dataset.theme = settings.theme === "dark" ? "dark" : "light";
document.querySelectorAll("[data-theme-option]").forEach((button) => button.classList.toggle("active", button.dataset.themeOption === (settings.theme || "light")));
applyProfile();
renderAll();