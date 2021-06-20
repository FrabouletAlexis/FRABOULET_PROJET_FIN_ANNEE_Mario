class EcranFin extends Phaser.Scene{
    constructor(){
        super("EcranFin");
    }
    init(data){
        
    }
    preload(){
        this.load.image('ecranFin','assets/menu/menu_fin/menu_fin.png');
        this.load.image('coffreGrisEcranFin','assets/menu/menu_fin/Menu_fin_coffre_gris.png');
        this.load.image('coffreVertEcranFin','assets/menu/menu_fin/Menu_fin_coffre_vert.png');
        this.load.image('coffreBleuEcranFin','assets/menu/menu_fin/Menu_fin_coffre_bleu.png');
        this.load.image('coffreMarronEcranFin','assets/menu/menu_fin/Menu_fin_coffre_marron.png');
        this.load.image('coffreRougeEcranFin','assets/menu/menu_fin/Menu_fin_coffre_rouge.png');
        this.load.spritesheet('boutonRetourMenu', 'assets/menu/Bouton_retour_ecran_titre.png', { frameWidth: 210, frameHeight: 65 });
    
    }
    create(){
        this.add.image(896/2, 448/2, 'ecranFin')
        this.add.image(896/2, 448/2, 'coffreGrisEcranFin')
        if (coffreVert){
            this.add.image(896/2, 448/2, 'coffreVertEcranFin')
        }
        if (coffreBleu){
            this.add.image(896/2, 448/2, 'coffreBleuEcranFin')
        }
        if (coffreMarron){
            this.add.image(896/2, 448/2, 'coffreMarronEcranFin')
        }
        if (coffreRouge){
            this.add.image(896/2, 448/2, 'coffreRougeEcranFin')
        }
    
        buttonRetourMenu = this.add.sprite(896/2, 400, 'boutonRetourMenu').setScrollFactor(0).setInteractive({ cursor: 'pointer' });

         /////// Button Jouer ///////////////////
         this.anims.create({
            key: 'RetourSurbrillance',
            frames: [ { key: 'boutonRetourMenu', frame: 1 } ],
            frameRate: 20
        })

        this.anims.create({
            key: 'Retour',
            frames: [ { key: 'boutonRetourMenu', frame: 0 } ],
            frameRate: 20
        })

        buttonRetourMenu.on('pointerover', function (event) {
    
            buttonRetourMenu.anims.play('RetourSurbrillance',true);
    
            });
            buttonRetourMenu.on('pointerout', function (event) {
    
                buttonRetourMenu.anims.play('Retour',true);
    
            });
            buttonRetourMenu.on('pointerdown', function(){
    
                this.cameras.main.fadeOut(500, 0, 0, 0)
    
        }, this)

        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
            this.scene.start('EcranTitre')
            coffreVert = false;
            coffreBleu = false;
            coffreMarron = false;
            coffreRouge = false;
        })

        this.cameras.main.fadeIn(1000);

    }
    update(){

    }
}    