
export function register(runtime) {
    runtime.registerGenerator('solid', (canvas, params) => {
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = params.color || 'white'; ctx.fillRect(0, 0, canvas.width, canvas.height);
    });
}
