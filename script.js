// Sample news data
const newsData = [
    {
        title: "Tech Giants Announce Revolutionary AI Platform",
        excerpt: "Leading tech companies collaborate on groundbreaking artificial intelligence initiative...",
        image: "https://via.placeholder.com/400x200",
        category: "Technology"
    },
    {
        title: "Global Markets Hit New Record High",
        excerpt: "International markets soar as economic indicators show strong growth...",
        image: "https://via.placeholder.com/400x200",
        category: "Business"
    },
    {
        title: "Major Sports League Announces Expansion",
        excerpt: "Professional sports league reveals plans for new teams and markets...",
        image: "https://via.placeholder.com/400x200",
        category: "Sports"
    }
];

// Populate news grid
function populateNews() {
    const newsGrid = document.getElementById('newsGrid');
    
    newsData.forEach(news => {
        const newsCard = document.createElement('div');
        newsCard.className = 'news-card';
        
        newsCard.innerHTML = `
            <img src="${news.image}" alt="${news.title}">
            <div class="news-card-content">
                <span class="category">${news.category}</span>
                <h4>${news.title}</h4>
                <p>${news.excerpt}</p>
            </div>
        `;
        
        newsGrid.appendChild(newsCard);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    populateNews();
});

// Add after existing JavaScript

// Live Updates Ticker
function updateTicker() {
    const ticker = document.getElementById('newsTicker');
    const firstItem = ticker.firstElementChild;
    ticker.appendChild(firstItem.cloneNode(true));
    ticker.removeChild(firstItem);
}

setInterval(updateTicker, 3000);

// World News Region Selector
document.getElementById('regionSelector').addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        document.querySelectorAll('#regionSelector button').forEach(btn => {
            btn.classList.remove('active');
        });
        e.target.classList.add('active');
        // Add region filtering logic here
    }
});

// Visual Stories Slider
const visualStories = [
    {
        image: 'https://picsum.photos/404/600',
        title: 'Urban Life: A Photo Essay',
        count: '15 Images'
    },
    {
        image: 'https://picsum.photos/405/600',
        title: 'Nature\'s Resilience',
        count: '8 Images'
    },
    // Add more stories
];

function populateVisualStories() {
    const container = document.getElementById('visualStories');
    visualStories.forEach(story => {
        container.innerHTML += `
            <article class="story-slide">
                <img src="${story.image}" alt="${story.title}">
                <div class="story-content">
                    <h4>${story.title}</h4>
                    <span class="story-count">${story.count}</span>
                </div>
            </article>
        `;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    populateVisualStories();
});
