const canvas = document.getElementById('memeCanvas'); 
const ctx = canvas.getContext('2d'); 
const imageInput = document.getElementById('imageInput'); 
let uploadedImage = null; 

imageInput.addEventListener('change', (event) => {
    const file = event.target.files[0]; 
    const reader = new FileReader();
    
    reader.onload = (e) => {
        const img = new Image(); 
        img.src = e.target.result; 
        img.onload = () => {
            uploadedImage = img;
            drawImage();
        };
    };

    reader.readAsDataURL(file); 

});

function drawImage() {
    if (uploadedImage){
        // This clears the canvas and sets canvase dimensions to fit the image
        ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);

        // Draws uploaded image and stretches it to fit dimesions
        ctx.drawImage(uploadedImage, 0, 0, canvas.clientWidth, canvas.height);

        const topText = document.getElementById('topText').value;
        const bottomText = document.getElementById('bottomText').value;
        // Set text values
        ctx.font = "30px Impact";
        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.textAlign = 'center'; 

        // Draw top text
        ctx.fillText(topText, canvas.width / 2, 50);
        ctx.strokeText(topText, canvas.width / 2, 50); 

        // Draw bottom text
        ctx.fillText(bottomText, canvas.width / 2, canvas.height -20); 
        ctx.strokeText(bottomText, canvasWidth / 2, canvas.height -20);
    
        // topText and bottomText capture user input from the fields <input id="topText"> and <input id="bottomText">
    }
}

function generateMeme() {
    drawImage(); 

    // This function calls the drawImage function to ensure the canvas is updated with the image and user-entered text.
}

function downloadMeme() {
    // Creates temp <a> element
    const link = document.createElement('a'); 

    // Sets file name for the downloaded meme
    link.download = 'meme.png'; 

    // Converts the canvas content into a data url
    link.href = canvas.toDataURL(); 

    // Simulates a click on the link and triggers the download
    link.click(); 

}



