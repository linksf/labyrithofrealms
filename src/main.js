import Phaser from 'phaser'

import World from './World'

const config = {
	type: Phaser.AUTO,
	parent: 'app',
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 },
		},
	},
	scene: [World],
}

export default new Phaser.Game(config)
