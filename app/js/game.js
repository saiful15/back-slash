


/*

var game= new Phaser.Game(320, 450, Phaser.CANVAS, 'playground', {preload: preload, create: create, update: update});

function preload(){
	game.load.image('starfield', 'image/starfield.jpg');
	game.load.image('ball', 'image/ball.png');
	game.load.image('paddle', 'image/paddle.png');
	game.load.image('brick0', 'image/brick0.png');
	game.load.image('brick1', 'image/brick1.png');
	game.load.image('brick2', 'image/brick2.png');
	game.load.image('brick3', 'image/brick3.png');
	game.load.image('brick4', 'image/brick4.png');
	game.load.image('brick5', 'image/brick5.png');
	
	game.load.image('push', 'image/push_button.png');
	game.load.image('new_game', 'image/new_game.png');
}

var ball;
var paddle;
var bricks;

var ballOnPaddle= true;

var lives= 3;
var score= 0;

var scoreText;
var livesText;
var introText;

var background;

var velocity_x= -50;
var velocity_y= -100;

var row= 2;
var column= 7;

var push;
var menu;

function create(){
	game.world.height= 1000;
	background= game.add.tileSprite(0, 0, 600, 800, 'starfield');
	
	var brick;
	bricks= game.add.group();
	
	brickGenerator();

	// Paddle 
	paddle= game.add.sprite(game.world.centerX, 380, 'paddle');
	paddle.anchor.setTo(0.5, 0.5);
	paddle.body.collideWorldBounds= true;
	paddle.body.immovable= true;
	paddle.body.bounce.setTo(1, 1);
	
	// Ball
	ball= game.add.sprite(game.world.centerX, paddle.y-16, 'ball');
	ball.anchor.setTo(0.5, 0.5);
	ball.body.collideWorldBounds= true;
	ball.body.bounce.setTo(1, 1);
	
	// Texts
	scoreText= game.add.text(0, 0, 'score: 0', {font: '16px Arial', fill: 'white', align: 'left'})
	livesText= game.add.text(268, 0, 'lives: 3', {font: '16px Arial', fill: 'white'});
	introText= game.add.text(60, 200, '-- Tap to start --\n    -- Level 1 --', {fill: 'white'});
	game.input.onDown.add(releaseBall, this);
	
	// Button
	push= game.add.button(game.world.centerX-80, 0, 'push', push);
	//menu= game.add.button(game.world.centerX-30+40, 0, 'new_game', menu);
}

function update(){
	paddle.x= game.input.x;
	if(paddle.x< 24) paddle.x= 24;
		else if(paddle.x> game.width- 24) paddle.x= game.width- 24;
	
	if(ballOnPaddle) ball.x= paddle.x;
		else{
			game.physics.collide(ball, paddle, ballHitPaddle, null, this);
			game.physics.collide(ball, bricks, ballHitBrick, null, this);
		}
	
	if(ball.y> 440 && ballOnPaddle == false) ballLost();
}

function releaseBall(){
	if(ballOnPaddle){
	ballOnPaddle= false;
	ball.body.velocity.x= velocity_x;
	ball.body.velocity.y= velocity_y;
	introText.visible= false;
	}
}

function ballLost(){
	--lives;
	if(lives<=0) gameOver();
		else{
			livesText.content= 'lives: '+lives;
			ballOnPaddle= true;
			ball.body.velocity.setTo(0, 0);
			ball.x= paddle.x+ 16;
			ball.y= paddle.y -16;
		}
}

function gameOver(){
	introText= game.add.text(0, 200, ' -- Double Tap To Restart Game --', {font: '20px Arial',fill: 'white'});
	//introText.content= 'Game Over';
	//introText.vaisable= true;
	ball.body.velocity.setTo(0, 0);
	ball.x= paddle.x+16
	ball.y= paddle.y-16;
	ballOnPaddle= true;
	game.paused= true;
}

function ballHitBrick(_ball, _brick) {
    _brick.kill();
    score += 20;
    scoreText.content = 'score: ' + score;

    if (bricks.countLiving() == 0 && row <= 6)
    {	
		row++;
        score += (1000*lives);
        scoreText.content = 'score: ' + score;
        introText.content = '-- Level '+row+' --';

        ballOnPaddle = true;
        ball.body.velocity.setTo(0, 0);
        ball.x = paddle.x + 16;
        ball.y = paddle.y - 16;
		
        brickGenerator();
		lives= 3;
		livesText.content= lives;
		velocity_x*=1.2;
		velocity_y*=1.2;
    }

}

function ballHitPaddle(){
	
}


// Generates the bricks according to the level
function brickGenerator(){
	for(var y= 0; y< row; y++){
		for(var x=0; x< column ; x++){
			brick = bricks.create(36 + (x * 36), 20 + (y * 36), 'brick'+y);
            brick.body.bounce.setTo(1, 1);
			brick.body.immovable= true;
		}
	}
}

function push(){
	game.paused= true;
}
*/
