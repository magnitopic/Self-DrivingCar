const canvas = document.querySelector("#myCanvas");
canvas.width = 500;

const ctx = canvas.getContext("2d");
const road = new Road(canvas.width / 2, canvas.width*0.9);
const car = new Car(100, 100, 30, 50);

animate();

function animate() {
	car.update();
	canvas.height = window.innerHeight;
	road.draw(ctx);
	car.draw(ctx);
	requestAnimationFrame(animate);
}
