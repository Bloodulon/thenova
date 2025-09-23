document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) {
        console.error("Элемент с ID 'particles-canvas' не найден.");
        return;
    }

    const ctx = canvas.getContext('2d');
    let particles = [];
    const particleCount = 80;
    const repulsionStrength = 2;

    const mouse = {
        x: null,
        y: null,
        radius: 100
    };

    window.addEventListener('mousemove', (event) => {
        mouse.x = event.x;
        mouse.y = event.y;
    });

    function resizeCanvas() {

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    class Particle {
        constructor() {

            this.x = Math.random() * window.innerWidth;
            this.y = Math.random() * window.innerHeight;
            
            this.size = Math.random() * 2 + 1;
            this.speedX = Math.random() * 0.4 - 0.25;
            this.speedY = Math.random() * 0.4 - 0.25;
            this.baseSpeedX = this.speedX;
            this.baseSpeedY = this.speedY;
            this.color = 'rgba(151, 167, 184, 1)';
            this.opacity = Math.random() * 0.5 + 0.1;
        }

        update() {
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < mouse.radius) {
                const angle = Math.atan2(dy, dx);
                const force = (mouse.radius - distance) / mouse.radius;
                this.speedX = -Math.cos(angle) * force * repulsionStrength;
                this.speedY = -Math.sin(angle) * force * repulsionStrength;
            } else {
                const deceleration = 0.05;
                this.speedX += (this.baseSpeedX - this.speedX) * deceleration;
                this.speedY += (this.baseSpeedY - this.speedY) * deceleration;
            }

            this.x += this.speedX;
            this.y += this.speedY;
            
            // Если частица вышла за пределы экрана, "возрождаем" её
            if (this.x > window.innerWidth || this.x < 0 || this.y > window.innerHeight || this.y < 0) {
                this.x = Math.random() * window.innerWidth;
                this.y = Math.random() * window.innerHeight;
                this.speedX = this.baseSpeedX;
                this.speedY = this.baseSpeedY;
            }
        }

        draw() {
            ctx.fillStyle = this.color; 
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function createParticles() {
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
        }
        requestAnimationFrame(animate);
    }

    resizeCanvas();
    createParticles();
    animate();

    window.addEventListener('resize', resizeCanvas);
});