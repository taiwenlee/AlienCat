class Menu extends Phaser.Scene {
   constructor() {
      super("menuScene");
   }

   preload() {
      this.load.audio('backgroundmusic', 'assets/Catlien.wav');
      this.load.image('button', 'assets/button.png');
      this.load.image('menubackground', 'assets/tempbackground.jpg');
   }

   create() {

      // background music
      this.music = this.sound.add('backgroundmusic', {volume: musicVol});
      this.music.setLoop(true);
      this.music.play();

      // add a background image
      this.background = this.add.image(0, 0, 'menubackground');
      this.background.setDisplaySize(game.config.width, game.config.height).setOrigin(0);

      this.add.text(20, 20, "Menu Scene");

      // basic text button to go to play scene
      /*const playButton = this.add.text(game.config.width/2, game.config.height/2, "Play", { fill: '#0f0'}).setOrigin(0.5);
      playButton.setInteractive();
      playButton.on('pointerdown', () => {
         this.scene.start("playScene");
      });*/

      // temp play button
      const playButton = this.add.image(game.config.width/2, game.config.height/2, 'button').setOrigin(0.5);
      playButton.setInteractive();
      playButton.on('pointerdown', () => {
         this.scene.start("playScene");
      });
      playButton.scale = 0.3; // temp scaling for the button

      // temp setting button
      const settingButton = this.add.image(game.config.width/2 + 60, game.config.height/2 + 40, 'button').setOrigin(0.5);
      settingButton.setInteractive();
      settingButton.on('pointerdown', () => {
         this.scene.launch("settingScene");
      });
      settingButton.scale = 0.3; // temp scaling for the button

      // temp how to play button
      const howToPlayButton = this.add.image(game.config.width/2 - 60, game.config.height/2 + 40, 'button').setOrigin(0.5);
      howToPlayButton.setInteractive();
      howToPlayButton.on('pointerdown', () => {
         this.scene.launch("howToPlayScene");
      });
      howToPlayButton.scale = 0.3; // temp scaling for the button

   }

   update() {
      this.music.volume = musicVol;
   }
}
