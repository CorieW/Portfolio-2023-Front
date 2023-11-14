import Star from './Star.ts';

export default class ShootingStar extends Star {
    public velocityX: number;
    public velocityY: number;
    public velocityCurve: number;
    public tailLength: number;

    private tailPoints: Array<{ x: number, y: number }>;

    constructor(x: number, y: number, radius: number, color: string, opacity: number, minOpacity: number, maxOpacity: number, opacityVelocity: number, velocityX: number, velocityY: number, velocityCurve: number, tailLength: number) {
        super(x, y, radius, color, opacity, minOpacity, maxOpacity, opacityVelocity);
        this.velocityX = velocityX;
        this.velocityY = velocityY;
        this.velocityCurve = velocityCurve;
        this.tailLength = tailLength;

        this.tailPoints = [];
    }

    public update(time: number): void {
        super.update(time);

        this.x += this.velocityX * time;
        this.y += this.velocityY * time;

        this.velocityX *= this.velocityCurve;
        this.velocityY *= this.velocityCurve;

        this.tailPoints.push({ x: this.x, y: this.y });

        if (this.tailPoints.length > this.tailLength) {
            this.tailPoints.shift();
        }
    }

    public getTailPoints(): Array<{ x: number, y: number }> {
        return this.tailPoints;
    }
}