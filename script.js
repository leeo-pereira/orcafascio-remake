const container = document.querySelector('.testimonial-container');

        container.addEventListener('click', function(event) {

            const videoLink = container.dataset.videoUrl;
            if (videoLink) {
                window.open(videoLink, '_blank');
                console.log(`Vídeo ${videoLink} aberto.`);
            }

            event.stopPropagation();
        });