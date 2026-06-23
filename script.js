// Time zones configuration
const timezones = [
    { id: 'ny', timezone: 'America/New_York', name: 'New York' },
    { id: 'london', timezone: 'Europe/London', name: 'London' },
    { id: 'dubai', timezone: 'Asia/Dubai', name: 'Dubai' },
    { id: 'tokyo', timezone: 'Asia/Tokyo', name: 'Tokyo' },
    { id: 'sydney', timezone: 'Australia/Sydney', name: 'Sydney' },
    { id: 'cairo', timezone: 'Africa/Cairo', name: 'Cairo' },
    { id: 'local', timezone: null, name: 'Local' }
];

// Function to format time
function formatTime(date) {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

// Function to format date
function formatDate(date) {
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Function to get time in specific timezone
function getTimeInTimezone(timezone) {
    if (timezone === null) {
        return new Date();
    }
    
    const now = new Date();
    const timeString = now.toLocaleString('en-US', { timeZone: timezone });
    return new Date(timeString);
}

// Function to update all clocks
function updateClocks() {
    timezones.forEach(({ id, timezone, name }) => {
        const timeDate = getTimeInTimezone(timezone);
        
        if (id !== 'local') {
            const clockElement = document.getElementById(`clock-${id}`);
            const dateElement = document.getElementById(`date-${id}`);
            
            if (clockElement) {
                clockElement.textContent = formatTime(timeDate);
            }
            if (dateElement) {
                dateElement.textContent = formatDate(timeDate);
            }
        } else {
            const clockElement = document.getElementById('clock-local');
            const dateElement = document.getElementById('date-local');
            
            if (clockElement) {
                clockElement.textContent = formatTime(timeDate);
            }
            if (dateElement) {
                dateElement.textContent = formatDate(timeDate);
            }
        }
    });
}

// Update clocks immediately and then every second
updateClocks();
setInterval(updateClocks, 1000);

// Add some interactivity
document.querySelectorAll('.clock-card').forEach(card => {
    card.addEventListener('click', function() {
        this.style.transform = 'scale(1.05)';
        setTimeout(() => {
            this.style.transform = '';
        }, 200);
    });
});

console.log('🌍 Digital Clock with Time Zones loaded successfully!');
