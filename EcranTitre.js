class EcranTitre extends Phaser.Scene{

    constructor(){
        super("EcranTitre");
    }

    init(data){
        
    }
    preload(){

        this.load.image('ecranTitre','assets/menu/ecran_titre.png');
        this.load.spritesheet('boutonJouer','assets/menu/Bouton_Jouer.png', { frameWidth: 260, frameHeight: 108 });
        this.load.spritesheet('bontonCommande','assets/menu/Bouton_commande.png', { frameWidth: 208, frameHeight: 65 });
        this.load.spritesheet('bontonSuite','assets/menu/Bouton_suite.png', { frameWidth: 75, frameHeight: 45 });
        this.load.spritesheet('bontonChoixMobile','assets/menu/Bouton_choix_mobile.png', { frameWidth: 190, frameHeight: 50 });
        this.load.image('panneauCommande','assets/menu/panneau_commande.png');
        
        this.load.image('parallaxe3','assets/parallaxe/parallaxe_3.png');
        this.load.image('parallaxe2','assets/parallaxe/parallaxe_2.png');
        this.load.image('parallaxe1','assets/parallaxe/parallaxe_1.png');
        this.load.image('fond','assets/parallaxe/Fond.png');

        this.load.audio('audio_fond_menu', 'assets/audio/music_fond_menu.ogg')
        this.load.audio('audio_fond_niveau', 'assets/audio/music_fond_niveau.ogg')

        this.load.audio('bruit_fumi', 'assets/audio/bruit_attaque.wav')
        //this.load.audio('bruit_fumi', 'assets/audio/bruit_fumi.mp3')
        this.load.audio('bruit_attaque', 'assets/audio/bruit_attaque.wav')
        this.load.audio('bruit_acide', 'assets/audio/bruit_acide.mp3')
        this.load.audio('bruit_coup_colosse', 'assets/audio/bruit_coup_colosse.wav')
        this.load.audio('bruit_execution', 'assets/audio/bruit_execution.mp3')
        this.load.audio('bruit_fiole', 'assets/audio/bruit_fiole.mp3')
        this.load.audio('bruit_recup', 'assets/audio/bruit_recup_fumi.wav')
        this.load.audio('bruit_recup_coffre', 'assets/audio/bruit_recup_coffre.wav')
        this.load.audio('bruit_ouvre_porte', 'assets/audio/bruit_porte.ogg')

        this.load.spritesheet('boutonPause','assets/menu/Bouton_pause.png', { frameWidth: 55, frameHeight: 60 });
        this.load.image('menuPause','assets/menu/panneau_pause.png');
        this.load.spritesheet('flecheDroite','assets/menu/bouton_mobile/Bouton_fleche_droite.png', { frameWidth: 48, frameHeight: 48 });
        this.load.spritesheet('flecheGauche','assets/menu/bouton_mobile/Bouton_fleche_gauche.png', { frameWidth: 48, frameHeight: 48 });
        this.load.spritesheet('flecheHaut','assets/menu/bouton_mobile/Bouton_fleche_haut.png', { frameWidth: 48, frameHeight: 48 });
        this.load.spritesheet('flecheBas','assets/menu/bouton_mobile/Bouton_fleche_bas.png', { frameWidth: 48, frameHeight: 48 });
        this.load.spritesheet('boutonFumi','assets/menu/bouton_mobile/Bouton_fumi.png', { frameWidth: 48, frameHeight: 48 });

        this.load.image('texteChope','assets/tuto/texte_chope.png');
        this.load.image('texteChopeMobile','assets/tuto/texte_chope_mobile.png');
        this.load.image('tutoDeplacement','assets/tuto/tuto_deplacement.png');
        this.load.image('tutoDeplacementMobile','assets/tuto/tuto_deplacement_mobile.png');
        this.load.image('tutoAttaque','assets/tuto/tuto_attaque.png');
        this.load.image('tutoAttaqueMobile','assets/tuto/tuto_attaque_mobile.png');
        this.load.image('tutoSaut','assets/tuto/tuto_saut.png');
        this.load.image('tutoSautMobile','assets/tuto/tuto_saut_mobile.png');
        this.load.image('tutoDash','assets/tuto/tuto_dash.png');
        this.load.image('tutoDashMobile','assets/tuto/tuto_dash_mobile.png');
        
        
        this.load.image('texteDebut','assets/menu/Texte_debut.png');
        this.load.image('texteGameOver','assets/menu/GameOver.png');

        this.load.image('CoffreGris','assets/menu/coffre/Coffre_gris.png');
        this.load.image('CoffreVert','assets/menu/coffre/coffre_vert_menu.png');
        this.load.image('CoffreBleu','assets/menu/coffre/coffre_bleu_menu.png');
        this.load.image('CoffreMarron','assets/menu/coffre/coffre_marron_menu.png');
        this.load.image('CoffreRouge','assets/menu/coffre/coffre_rouge_menu.png');

        this.load.spritesheet('boutonRetour','assets/menu/bouton_retour.png', { frameWidth: 208, frameHeight: 65 });

        this.load.spritesheet('vinetta', 'assets/spritesheet/spritesheet_Vinetta.png', { frameWidth: 160, frameHeight: 150 });
        this.load.spritesheet('vinetta_Mort_fiole', 'assets/spritesheet/spritesheet_Vinetta_Mort_fiole.png', { frameWidth: 235, frameHeight: 150 });
        this.load.spritesheet('soldat', 'assets/spritesheet/spritesheet_Soldat.png', { frameWidth: 90, frameHeight: 160 });
        this.load.spritesheet('colosse', 'assets/spritesheet/spritesheet_Colosse.png', { frameWidth: 120, frameHeight: 160 });
        this.load.spritesheet('archer', 'assets/spritesheet/spritesheet_Tireur.png', { frameWidth: 87, frameHeight: 150 });
        this.load.spritesheet('chimiste', 'assets/spritesheet/spritesheet_Chimiste.png', { frameWidth: 90, frameHeight: 150 });

        this.load.spritesheet('explosionFumi', 'assets/FX/explosion_fumi.png', { frameWidth: 380, frameHeight: 400 });
        this.load.image('fleche','assets/spritesheet/fleche.png');
        this.load.image('bombe','assets/item/Bombe_Loot.png');
        this.load.image('fiole','assets/item/Fiole.png');
        this.load.image('clefVert','assets/item/clef_vert.png');
        this.load.image('clefBleu','assets/item/clef_bleu.png');
        this.load.image('clefRouge','assets/item/clef_rouge.png');

        this.load.image('tresorVert','assets/item/Coffre_Vert.png');
        this.load.image('tresorBleu','assets/item/Coffre_Bleu.png');
        this.load.image('tresorMarron','assets/item/Coffre_Marron.png');
        this.load.image('tresorRouge','assets/item/Coffre_Rouge.png');

        this.load.image('porteVert','assets/item/porte_deverouille_vert.png');
        this.load.image('porteBleu','assets/item/porte_deverouille_bleu.png');
        this.load.image('porteRouge','assets/item/porte_deverouille_rouge.png');
        
        this.load.image('barreFumi0','assets/barre_fumi/Barre_fumi_0.png');
        this.load.image('barreFumi1','assets/barre_fumi/Barre_fumi_1.png');
        this.load.image('barreFumi2','assets/barre_fumi/Barre_fumi_2.png');
        this.load.image('barreFumi3','assets/barre_fumi/Barre_fumi_3.png');
        this.load.image('barreFumi4','assets/barre_fumi/Barre_fumi_4.png');
        this.load.image('barreFumi5','assets/barre_fumi/Barre_fumi_5.png');
             
    }
    create(){

        

        this.add.image(896/2, 448/2, 'ecranTitre')
            
        buttonJouer = this.add.sprite(625, 285, 'boutonJouer').setScrollFactor(0).setInteractive({ cursor: 'pointer' });
        buttonChoixMobile = this.add.sprite(625, 400, 'bontonChoixMobile').setScrollFactor(0).setInteractive({ cursor: 'pointer' });

        
    
        /////// Button Jouer ///////////////////
        this.anims.create({
            key: 'JouerSurbrillance',
            frames: [ { key: 'boutonJouer', frame: 1 } ],
            frameRate: 20
        })

        this.anims.create({
            key: 'Jouer',
            frames: [ { key: 'boutonJouer', frame: 0 } ],
            frameRate: 20
        })
        buttonJouer.on('pointerover', function (event) {
    
            buttonJouer.anims.play('JouerSurbrillance',true);
    
            });
            buttonJouer.on('pointerout', function (event) {
    
                buttonJouer.anims.play('Jouer',true);
    
            });
            buttonJouer.on('pointerdown', function(){
    
                this.cameras.main.fadeOut(500, 0, 0, 0)
    
        }, this)

        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
            this.scene.start('LettreDebut')
        })

        this.cameras.main.fadeIn(1000);
        
        /////// Button choix mobile ///////////////////
        this.anims.create({
            key: 'nonChoix_neutre',
            frames: [ { key: 'bontonChoixMobile', frame: 0 } ],
            frameRate: 20
        })

        this.anims.create({
            key: 'nonChoix_active',
            frames: [ { key: 'bontonChoixMobile', frame: 1 } ],
            frameRate: 20
        })

        this.anims.create({
            key: 'Choix_neutre',
            frames: [ { key: 'bontonChoixMobile', frame: 2 } ],
            frameRate: 20
        })

        this.anims.create({
            key: 'Choix_active',
            frames: [ { key: 'bontonChoixMobile', frame: 3 } ],
            frameRate: 20
        })
    
        buttonChoixMobile.on('pointerover', function (event) {
            if (commandeMobile){
                buttonChoixMobile.anims.play('Choix_active',true);
            }
            else {
                buttonChoixMobile.anims.play('nonChoix_active',true);
            }
            
    
            });
           buttonChoixMobile.on('pointerout', function (event) {
    
            if (commandeMobile){
                buttonChoixMobile.anims.play('Choix_neutre',true);
            }
            else {
                buttonChoixMobile.anims.play('nonChoix_neutre',true);
            }
    
        });
        buttonChoixMobile.on('pointerdown', function(){
    
            if (commandeMobile){
                commandeMobile = false;
            }
            else {
                commandeMobile = true;
            }

        }, this)
           
        

    }
    update(){
    }

}