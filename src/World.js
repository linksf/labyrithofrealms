import Phaser from 'phaser'
import {getImageUrl} from './firebase'
export default class HelloWorldScene extends Phaser.Scene {
	constructor() {
		super('main-world')
		
	}
	getUrl() {

	}

	preload() {
		
		this.load.image('cave', 'images/caveBackground.png')
		this.load.image('forest', 'images/darkForest.png')
	}

	create() {
		this.add.image(0,0,'forest')
		// this.add.image(400, 300, 'sky')

		// const particles = this.add.particles('red')

		// const emitter = particles.createEmitter({
		// 	speed: 100,
		// 	scale: { start: 1, end: 0 },
		// 	blendMode: 'ADD',
		// })

		// const logo = this.physics.add.image(400, 100, 'logo')

		// logo.setVelocity(100, 200)
		// logo.setBounce(1, 1)
		// logo.setCollideWorldBounds(true)

		// emitter.startFollow(logo)
	}
}
