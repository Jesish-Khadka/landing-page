

document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const button = dropdown.querySelector('.dropbtn');
        button.addEventListener('click', () => {
            const content = dropdown.querySelector('.dropdown-content');
            const isVisible = content.style.display === 'block' || content.classList.contains('show');
            if (isVisible) {
                content.style.display = 'none';
                dropdown.classList.remove('show');
            } else {
                content.style.display = 'block';
                dropdown.classList.add('show');
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const cardsContainer = document.querySelector('.cards-container');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const cardCount = 8; // Total number of cards
    let index = 0;

    // Create 8 cards dynamically
    for (let i = 0; i < cardCount; i++) {
        const card = document.createElement('div');
        card.className = 'cart';
        card.innerHTML = `
            <img src="quatation.png" alt="img">
            <p>It starts with an understanding of your business problem and goals. If you have existing code.</p>
            <div class="customer">
                <div class="c-desc">
                    <img src="customer.png" alt="pic">
                    <p>MD Arsalan<br> <span>Mentor at Design School</span></p>
                </div>
                <button class="read-more">
                    <span>Read More</span>
                    <span class="arrow">➔</span>
                </button>
            </div>
        `;
        cardsContainer.appendChild(card);
    }

    // Update button state
    const updateButtons = () => {
        prevBtn.disabled = index === 0;
        nextBtn.disabled = index === cardCount - 1;
    };

    // Slide to the next card
    nextBtn.addEventListener('click', () => {
        if (index < cardCount - 1) {
            index++;
            cardsContainer.style.transform = `translateX(-${index * 415}px)`; // Adjust according to card width
        }
        updateButtons();
    });

    // Slide to the previous card
    prevBtn.addEventListener('click', () => {
        if (index > 0) {
            index--;
            cardsContainer.style.transform = `translateX(-${index * 415}px)`; // Adjust according to card width
        }
        updateButtons();
    });

    // Initialize the button state
    updateButtons();
});


document.addEventListener('DOMContentLoaded', function () {
    const swiperWrapper = document.querySelector('.swiper-wrapper');

    const cardsData = [
        {
            tag: 'Artificial Intelligence',
            time: '1 week ago',
            title: 'Llama 2 By Meta AI — A Revolutionary Leap In Natural Language Processing',
            description: 'Fusing Imagination and Innovation Brahma byte lab. Your Partner in Transforming',
            image: 'robot.png',
            authorImage: 'md.png',
            authorName: 'MD Arsalan'
        },
        
    ];

    for (let i = 0; i < 8; i++) {
        const card = cardsData[i % cardsData.length]; 

        const cardHTML = `
            <div class="swiper-slide blog-card">
                <img src="${card.image}" alt="AI Image" class="card-image">
                <div class="card-content">
                    <div class="a">
                        <div class="tag">${card.tag}</div>
                        <div class="time">${card.time}</div>
                    </div>
                    <h2>${card.title}</h2>
                    <p>${card.description}</p>
                    <div class="author">
                        <img src="${card.authorImage}" alt="Author Image" class="author-image">
                        <span class="author-name">${card.authorName}</span>
                    </div>
                </div>
            </div>
        `;
        swiperWrapper.insertAdjacentHTML('beforeend', cardHTML);
    }

    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 4.5,
        spaceBetween: 30,
        loop: false, 
        centeredSlides: false, 
    });
});


