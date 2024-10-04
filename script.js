// Add JavaScript code for your web site here and call it from index.html.
function talkSpacePage() {
    window.location.href = "TalkSpace.html"; 
}


const infoTitle = document.getElementById('info-title');
const infoText = document.getElementById('info-text');

const data = [
    {
        title: 'Information Title 1',
        text: 'This is the first piece of information displayed inside the rotating box.',
    },
    {
        title: 'Information Title 2',
        text: 'This is the second piece of information displayed inside the rotating box.',
    },
    {
        title: 'Information Title 3',
        text: 'This is the third piece of information displayed inside the rotating box.',
    }
];

let currentIndex = 0;

function updateContent() {
    infoTitle.textContent = data[currentIndex].title;
    infoText.textContent = data[currentIndex].text;
}

document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : data.length - 1; // Wrap around to the last item
    updateContent();
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex < data.length - 1) ? currentIndex + 1 : 0; // Wrap around to the first item
    updateContent();
});

// Initial content display
updateContent();