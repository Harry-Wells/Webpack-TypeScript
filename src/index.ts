
import p5 from 'p5';

import * as Matter from 'matter-js';

let screen = 'home';
let level = 0;

let height = 0;
let power = 0;

let shotsTaken = 0;
let shotsMade = 0;
let shotsMissed = 0;

var shot = false;
var levelC = false;
var levelF = false;

var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

let sketch = function (p: p5) {
    let engine: Matter.Engine;
    var ballA: Matter.Body;
    var ground: Matter.Body;
    var borderA: Matter.Body;
    var borderB: Matter.Body;
    var hoopPole: Matter.Body;
    var hoopBackboard: Matter.Body;
    var hoopPaint: Matter.Body;
    var hoopRim: Matter.Body;
    var rimCollisionR: Matter.Body;
    var rimCollisionL: Matter.Body;
    var netA: Matter.Body;
    var netB : Matter.Body;
    var boxLvl1: Matter.Body;
    var boxLvl2A: Matter.Body;
    var boxLvl2B: Matter.Body;
    var boxLvl2C: Matter.Body;
    var boxLvl2D: Matter.Body;
    var boxLvl3A: Matter.Body;
    var boxLvl3B: Matter.Body;
    var boxLvl3C: Matter.Body;
    var boxLvl3D: Matter.Body;
    var boxLvl3E: Matter.Body;
    var boxLvl3F: Matter.Body;
    var boxLvl3G: Matter.Body;
    var boxLvl3H: Matter.Body;
    var boxLvl3I: Matter.Body;
    var boxLvl3J: Matter.Body;
    var boxLvl4: Matter.Body;
    var boxLvl5A: Matter.Body;
    var boxLvl5B: Matter.Body;
    var boxLvl5C: Matter.Body;
    var boxLvl5D: Matter.Body;
    var boxLvl5E: Matter.Body;
    var boxLvl5F: Matter.Body;
    var boxLvl5G: Matter.Body;
    var boxLvl5H: Matter.Body;
    var boxLvl5I: Matter.Body;
    var boxLvl5J: Matter.Body;
    var boxLvl5K: Matter.Body;

    p.setup = function () {
        p.createCanvas(1500, 700);

        engine = Engine.create();
        ballA = Bodies.circle(200, 675, 25, { restitution: 1 });
        ground = Bodies.rectangle(400, 700, 10000, 60, { isStatic: true });
        borderA = Bodies.rectangle(-5, 350, 10, 10000, { isStatic: true });
        borderB = Bodies.rectangle(1505, 350, 10, 10000, { isStatic: true });
        hoopPole = Bodies.rectangle(1400, 475, 25, 390, { isStatic: true });
        hoopPole.collisionFilter = { 'group': -1 };
        hoopBackboard = Bodies.rectangle(1400, 200, 30, 200, { isStatic: true });
        hoopPaint = Bodies.rectangle(1390, 250, 10, 100, { isStatic: true });
        rimCollisionR = Bodies.rectangle(1375, 275, 20, 10, { isStatic: true });
        rimCollisionL = Bodies.rectangle(1290, 275, 10, 10, { isStatic: true });
        hoopRim = Bodies.rectangle(1335, 275, 100, 10, { isStatic: true });
        hoopRim.collisionFilter = { 'group': -1 };
        netA = Bodies.rectangle(1381.5, 310, 3, 60, { isStatic: true });
        netB = Bodies.rectangle(1288.5, 310, 3, 60, { isStatic: true });

        World.add(engine.world, [ballA, ground, borderA, borderB, hoopPole, hoopBackboard, hoopPaint, rimCollisionR, rimCollisionL, hoopRim, netA, netB]);

        engine.world.gravity.y = 3;

        p.textSize(16);

        if (screen == 'level') {
            engine = Engine.create();
            ballA = Bodies.circle(200, 675, 25, { restitution: 1 });
            ground = Bodies.rectangle(400, 700, 10000, 60, { isStatic: true });
            borderA = Bodies.rectangle(-500, 350, 1000, 10000, { isStatic: true });
            borderB = Bodies.rectangle(2000, 350, 1000, 10000, { isStatic: true });
            hoopPole = Bodies.rectangle(1400, 475, 25, 390, { isStatic: true });
            hoopPole.collisionFilter = { 'group': -1 };
            hoopBackboard = Bodies.rectangle(1400, 200, 30, 200, { isStatic: true });
            hoopPaint = Bodies.rectangle(1390, 250, 10, 100, { isStatic: true });
            rimCollisionR = Bodies.rectangle(1375, 275, 20, 10, { isStatic: true });
            rimCollisionL = Bodies.rectangle(1290, 275, 10, 10, { isStatic: true });
            hoopRim = Bodies.rectangle(1335, 275, 100, 10, { isStatic: true });
            hoopRim.collisionFilter = { 'group': -1 };
            netA = Bodies.rectangle(1381.5, 310, 3, 60, { isStatic: true });
            netB = Bodies.rectangle(1288.5, 310, 3, 60, { isStatic: true });

            World.add(engine.world, [ballA, ground, borderA, borderB, hoopPole, hoopBackboard, hoopPaint, rimCollisionR, rimCollisionL, hoopRim, netA, netB]);

            engine.world.gravity.y = 3;

            p.textSize(16);

            if (level == 1) {
                boxLvl1 = Bodies.rectangle(750, 350, 75, 75, { isStatic: true });

                World.add(engine.world, [boxLvl1]);
            }

            if (level == 2) {
                boxLvl2A = Bodies.rectangle(1110, 25, 550, 50, { isStatic: true });
                boxLvl2B = Bodies.rectangle(950, 175, 100, 50, { isStatic: true });
                boxLvl2C = Bodies.rectangle(1075, 225, 100, 50, { isStatic: true });
                boxLvl2D = Bodies.rectangle(1200, 275, 100, 50, { isStatic: true });

                World.add(engine.world, [boxLvl2A, boxLvl2B, boxLvl2C, boxLvl2D])
            }

            if (level == 3) {
                boxLvl3A = Bodies.rectangle(750, 660, 50, 20, { isStatic: true });
                boxLvl3B = Bodies.rectangle(750, 525, 50, 250);
                boxLvl3C = Bodies.rectangle(200, 300, 100, 100, { isStatic: true });
                boxLvl3D = Bodies.rectangle(1100, 400, 100, 100, { isStatic: true });
                boxLvl3E = Bodies.rectangle(900, 250, 100, 100, { isStatic: true });
                boxLvl3E.collisionFilter = { 'group': -1 };
                boxLvl3F = Bodies.rectangle(400, 645, 100, 50, { isStatic: true });
                boxLvl3G = Bodies.rectangle(600, 200, 100, 100, { isStatic: true });
                boxLvl3H = Bodies.rectangle(1300, 200, 100, 100, { isStatic: true });
                boxLvl3H.collisionFilter = { 'group': -1 };
                boxLvl3I = Bodies.rectangle(300, 100, 100, 100, { isStatic: true });
                boxLvl3J = Bodies.rectangle(1450, 645, 50, 50);

                World.add(engine.world, [boxLvl3A, boxLvl3B, boxLvl3C, boxLvl3D, boxLvl3E, boxLvl3F, boxLvl3G, boxLvl3H, boxLvl3I, boxLvl3J]);
            }

            if (level == 4) {
                boxLvl4 = Bodies.rectangle(750, 350, 300, 700, { isStatic: true });

                World.add(engine.world, [boxLvl4]);
            }

            if (level == 5) {
                boxLvl5A = Bodies.rectangle(500, 620, 200, 100, { isStatic: true });
                boxLvl5B = Bodies.rectangle(700, 520, 200, 100, { isStatic: true });
                boxLvl5C = Bodies.rectangle(900, 420, 200, 100, { isStatic: true });
                boxLvl5D = Bodies.rectangle(1100, 320, 200, 100, { isStatic: true });
                boxLvl5E = Bodies.rectangle(100, 550, 200, 100, { isStatic: true });
                boxLvl5F = Bodies.rectangle(300, 450, 200, 100, { isStatic: true });
                boxLvl5G = Bodies.rectangle(500, 350, 200, 100, { isStatic: true });
                boxLvl5H = Bodies.rectangle(700, 250, 200, 100, { isStatic: true });
                boxLvl5I = Bodies.rectangle(900, 150, 200, 100, { isStatic: true });
                boxLvl5J = Bodies.rectangle(1100, 75, 200, 50, { isStatic: true });
                boxLvl5K = Bodies.rectangle(1350, 25, 300, 50, { isStatic: true });

                World.add(engine.world, [boxLvl5A, boxLvl5B, boxLvl5C, boxLvl5D, boxLvl5E, boxLvl5F, boxLvl5G, boxLvl5H, boxLvl5I, boxLvl5J, boxLvl5K])
            }
        };
    };

    p.draw = function () {
        if (screen == 'level') {

            Engine.update(engine, 10);

            p.background('blue');
            p.textSize(16);

            if (level == 1) {
                // Draw BoxLvl1
                p.fill('#715428');

                engine.world.bodies.forEach(body => {
                    p.beginShape()
                    boxLvl1.vertices.forEach(vertex => {
                        p.vertex(vertex.x, vertex.y);
                    })
                    p.endShape(p.CLOSE);
                });

                p.textAlign(p.LEFT);
                p.stroke(0);
                p.fill('white');

                // Draw instructions
                p.text('Controls:', 5, 25);
                p.text('Increase Height - W or Up Arrow', 5, 50);
                p.text('Decrease Height - S or Down Arrow', 5, 75);
                p.text('Increase Power - D or Right Arrow', 5, 100);
                p.text('Decrease Power - A or Left Arrow', 5, 125);
                p.text('Take Shot - Enter', 5, 150);

                p.textSize(50);
                p.textAlign(p.CENTER);
                p.text('Level 1', 750, 50);
                p.textSize(16);
                p.text("One Box, One Basket", 750, 75);
            }

            if (level == 2) {
                p.fill('#715428');

                engine.world.bodies.forEach(body => {
                    p.beginShape()
                    boxLvl2A.vertices.forEach(vertex => {
                        p.vertex(vertex.x, vertex.y);
                    })
                    p.endShape(p.CLOSE);
                });

                engine.world.bodies.forEach(body => {
                    p.beginShape()
                    boxLvl2B.vertices.forEach(vertex => {
                        p.vertex(vertex.x, vertex.y);
                    })
                    p.endShape(p.CLOSE);
                });

                engine.world.bodies.forEach(body => {
                    p.beginShape()
                    boxLvl2C.vertices.forEach(vertex => {
                        p.vertex(vertex.x, vertex.y);
                    })
                    p.endShape(p.CLOSE);
                });

                engine.world.bodies.forEach(body => {
                    p.beginShape()
                    boxLvl2D.vertices.forEach(vertex => {
                        p.vertex(vertex.x, vertex.y);
                    })
                    p.endShape(p.CLOSE);
                });

                p.fill('white');
                p.textSize(50);
                p.textAlign(p.CENTER);
                p.text('Level 2', 750, 50);
                p.textSize(16);
                p.text('Bouncing Down', 750, 75)
            }

            if (level == 3) {
                p.textAlign(p.CENTER);
                p.fill('white');
                p.text('But', 750, 425);
                p.text('things', 750, 450);
                p.text('may', 750, 475);
                p.text('not', 750, 500);
                p.text('be', 750, 525);
                p.text('as', 750, 550);
                p.text('they', 750, 575);
                p.text('seem', 750, 600);

                p.fill('#715428');

                engine.world.bodies.forEach(body => {
                    p.beginShape()
                    boxLvl3A.vertices.forEach(vertex => {
                        p.vertex(vertex.x, vertex.y);
                    })
                    p.endShape(p.CLOSE);
                });

                engine.world.bodies.forEach(body => {
                    p.beginShape()
                    boxLvl3B.vertices.forEach(vertex => {
                        p.vertex(vertex.x, vertex.y);
                    })
                    p.endShape(p.CLOSE);
                });

                engine.world.bodies.forEach(body => {
                    p.beginShape()
                    boxLvl3C.vertices.forEach(vertex => {
                        p.vertex(vertex.x, vertex.y);
                    })
                    p.endShape(p.CLOSE);
                });

                engine.world.bodies.forEach(body => {
                    p.beginShape()
                    boxLvl3D.vertices.forEach(vertex => {
                        p.vertex(vertex.x, vertex.y);
                    })
                    p.endShape(p.CLOSE);
                });

                engine.world.bodies.forEach(body => {
                    p.beginShape()
                    boxLvl3E.vertices.forEach(vertex => {
                        p.vertex(vertex.x, vertex.y);
                    })
                    p.endShape(p.CLOSE);
                });

                engine.world.bodies.forEach(body => {
                    p.beginShape()
                    boxLvl3F.vertices.forEach(vertex => {
                        p.vertex(vertex.x, vertex.y);
                    })
                    p.endShape(p.CLOSE);
                });

                engine.world.bodies.forEach(body => {
                    p.beginShape()
                    boxLvl3G.vertices.forEach(vertex => {
                        p.vertex(vertex.x, vertex.y);
                    })
                    p.endShape(p.CLOSE);
                });

                engine.world.bodies.forEach(body => {
                    p.beginShape()
                    boxLvl3H.vertices.forEach(vertex => {
                        p.vertex(vertex.x, vertex.y);
                    })
                    p.endShape(p.CLOSE);
                });

                engine.world.bodies.forEach(body => {
                    p.beginShape()
                    boxLvl3I.vertices.forEach(vertex => {
                        p.vertex(vertex.x, vertex.y);
                    })
                    p.endShape(p.CLOSE);
                });

                engine.world.bodies.forEach(body => {
                    p.beginShape()
                    boxLvl3J.vertices.forEach(vertex => {
                        p.vertex(vertex.x, vertex.y);
                    })
                    p.endShape(p.CLOSE);
                });

                p.fill('white');
                p.textSize(50);
                p.text('Level 3', 750, 50);
                p.textSize(16);
                p.text('Boxes everywhere', 750, 75);
            }

            if (level == 4) {
                p.fill('#715428');
                
                engine.world.bodies.forEach(body => {
                    p.beginShape()
                    boxLvl4.vertices.forEach(vertex => {
                        p.vertex(vertex.x, vertex.y);
                    })
                    p.endShape(p.CLOSE);
                });

                p.fill('white');
                p.textSize(50);
                p.textAlign(p.CENTER);
                p.text('Level 4', 750, 50);
                p.textSize(16);
                p.text("Think outside 'the box'", 750, 75);
            }

            if (level == 5) {
                p.fill('#715428');

                engine.world.bodies.forEach(body => {
                    p.beginShape()
                    boxLvl5A.vertices.forEach(vertex => {
                        p.vertex(vertex.x, vertex.y);
                    })
                    p.endShape(p.CLOSE);
                });

                engine.world.bodies.forEach(body => {
                    p.beginShape()
                    boxLvl5B.vertices.forEach(vertex => {
                        p.vertex(vertex.x, vertex.y);
                    })
                    p.endShape(p.CLOSE);
                });

                engine.world.bodies.forEach(body => {
                    p.beginShape()
                    boxLvl5C.vertices.forEach(vertex => {
                        p.vertex(vertex.x, vertex.y);
                    })
                    p.endShape(p.CLOSE);
                });

                engine.world.bodies.forEach(body => {
                    p.beginShape()
                    boxLvl5D.vertices.forEach(vertex => {
                        p.vertex(vertex.x, vertex.y);
                    })
                    p.endShape(p.CLOSE);
                });

                engine.world.bodies.forEach(body => {
                    p.beginShape()
                    boxLvl5E.vertices.forEach(vertex => {
                        p.vertex(vertex.x, vertex.y);
                    })
                    p.endShape(p.CLOSE);
                });

                engine.world.bodies.forEach(body => {
                    p.beginShape()
                    boxLvl5F.vertices.forEach(vertex => {
                        p.vertex(vertex.x, vertex.y);
                    })
                    p.endShape(p.CLOSE);
                });

                engine.world.bodies.forEach(body => {
                    p.beginShape()
                    boxLvl5G.vertices.forEach(vertex => {
                        p.vertex(vertex.x, vertex.y);
                    })
                    p.endShape(p.CLOSE);
                });

                engine.world.bodies.forEach(body => {
                    p.beginShape()
                    boxLvl5H.vertices.forEach(vertex => {
                        p.vertex(vertex.x, vertex.y);
                    })
                    p.endShape(p.CLOSE);
                });

                engine.world.bodies.forEach(body => {
                    p.beginShape()
                    boxLvl5I.vertices.forEach(vertex => {
                        p.vertex(vertex.x, vertex.y);
                    })
                    p.endShape(p.CLOSE);
                });

                engine.world.bodies.forEach(body => {
                    p.beginShape()
                    boxLvl5J.vertices.forEach(vertex => {
                        p.vertex(vertex.x, vertex.y);
                    })
                    p.endShape(p.CLOSE);
                });

                engine.world.bodies.forEach(body => {
                    p.beginShape()
                    boxLvl5K.vertices.forEach(vertex => {
                        p.vertex(vertex.x, vertex.y);
                    })
                    p.endShape(p.CLOSE);
                });

                p.fill('white');
                p.textSize(50);
                p.textAlign(p.CENTER);
                p.text('Level 5', 750, 50);
                p.textSize(16);
                p.text("'The Staircase'", 750, 75);
            }

            // Draw BallA
            p.fill('orange');

            engine.world.bodies.forEach(body => {
                p.beginShape()
                ballA.vertices.forEach(vertex => {
                    p.vertex(vertex.x, vertex.y);
                })
                p.endShape(p.CLOSE);
            });

            // Draw Ground
            p.fill('grey');

            engine.world.bodies.forEach(body => {
                p.beginShape()
                ground.vertices.forEach(vertex => {
                    p.vertex(vertex.x, vertex.y);
                })
                p.endShape(p.CLOSE);
            });

            // Draw BorderA
            engine.world.bodies.forEach(body => {
                p.beginShape()
                borderA.vertices.forEach(vertex => {
                    p.vertex(vertex.x, vertex.y);
                })
                p.endShape(p.CLOSE);
            });

            //Draw BorderB
            engine.world.bodies.forEach(body => {
                p.beginShape()
                borderB.vertices.forEach(vertex => {
                    p.vertex(vertex.x, vertex.y);
                })
                p.endShape(p.CLOSE);
            });

            // Draw HoopPole
            p.fill('#757575');

            engine.world.bodies.forEach(body => {
                p.beginShape()
                hoopPole.vertices.forEach(vertex => {
                    p.vertex(vertex.x, vertex.y);
                })
                p.endShape(p.CLOSE);
            });

            // Draw HoopBackboard
            p.fill('white');

            engine.world.bodies.forEach(body => {
                p.beginShape()
                hoopBackboard.vertices.forEach(vertex => {
                    p.vertex(vertex.x, vertex.y);
                })
                p.endShape(p.CLOSE);
            });

            // Draw HoopPaint
            p.fill('red');

            engine.world.bodies.forEach(body => {
                p.beginShape()
                hoopPaint.vertices.forEach(vertex => {
                    p.vertex(vertex.x, vertex.y);
                })
                p.endShape(p.CLOSE);
            });

            // Draw RimCollisionR
            p.fill('#f74323');

            engine.world.bodies.forEach(body => {
                p.beginShape()
                rimCollisionR.vertices.forEach(vertex => {
                    p.vertex(vertex.x, vertex.y);
                })
                p.endShape(p.CLOSE);
            });

            // Draw RimCollisionL
            engine.world.bodies.forEach(body => {
                p.beginShape()
                rimCollisionL.vertices.forEach(vertex => {
                    p.vertex(vertex.x, vertex.y);
                })
                p.endShape(p.CLOSE);
            });

            // Draw HoopRim
            engine.world.bodies.forEach(body => {
                p.beginShape()
                hoopRim.vertices.forEach(vertex => {
                    p.vertex(vertex.x, vertex.y);
                })
                p.endShape(p.CLOSE);
            });

            p.noStroke();

            // Draw NetA
            p.fill('white');

            engine.world.bodies.forEach(body => {
                p.beginShape()
                netA.vertices.forEach(vertex => {
                    p.vertex(vertex.x, vertex.y);
                })
                p.endShape(p.CLOSE);
            });

            // Draw NetB
            engine.world.bodies.forEach(body => {
                p.beginShape()
                netB.vertices.forEach(vertex => {
                    p.vertex(vertex.x, vertex.y);
                })
                p.endShape(p.CLOSE);
            });

            // Draw Net Design
            p.stroke(255);

            p.line(1287.5, 290, 1307.5, 280);
            p.line(1287.5, 300, 1322.5, 280);
            p.line(1287.5, 310, 1337.5, 280);
            p.line(1287.5, 320, 1352.5, 280);
            p.line(1287.5, 330, 1367.5, 280);
            p.line(1287.5, 340, 1382.5, 280);
            p.line(1302.5, 340, 1382.5, 290);
            p.line(1317.5, 340, 1382.5, 300);
            p.line(1332.5, 340, 1382.5, 310);
            p.line(1347.5, 340, 1382.5, 320);
            p.line(1362.5, 340, 1382.5, 330);

            p.line(1362.5, 280, 1382.5, 290);
            p.line(1347.5, 280, 1382.5, 300);
            p.line(1332.5, 280, 1382.5, 310);
            p.line(1317.5, 280, 1382.5, 320);
            p.line(1302.5, 280, 1382.5, 330);
            p.line(1287.5, 280, 1382.5, 340);
            p.line(1287.5, 290, 1367.5, 340);
            p.line(1287.5, 300, 1352.5, 340);
            p.line(1287.5, 310, 1337.5, 340);
            p.line(1287.5, 320, 1322.5, 340);
            p.line(1287.5, 330, 1307.5, 340);
            
            // Draw Height & Power Values
            p.textSize(16);
            p.textAlign(p.LEFT);
            p.stroke(0);
            p.fill('white');
            p.text('Height = ' + height, 1400, 25);
            p.text('Power = ' + power, 1400, 50);

            // Checks that the user has not already shot the ball
            if (shot == false) {
                if (p.keyIsDown(p.UP_ARROW)) {
                    height = height + 1;
                    if (height > 100) {
                        height = 100;
                    };
                }
                if (p.keyIsDown(p.LEFT_ARROW)) {
                    power = power - 1;
                    if (power < -100) {
                        power = -100;
                    };
                }
                if (p.keyIsDown(p.RIGHT_ARROW)) {
                    power = power + 1;
                    if (power > 100) {
                        power = 100;
                    };
                }
                if (p.keyIsDown(p.DOWN_ARROW)) {
                    height = height - 1;
                    if (height < 0) {
                        height = 0;
                    };
                }
                if (p.keyIsDown(87)) {
                    height = height + 1;
                    if (height > 100) {
                        height = 100;
                    };
                }
                if (p.keyIsDown(65)) {
                    power = power - 1;
                    if (power < -100) {
                        power = -100;
                    };
                }
                if (p.keyIsDown(68)) {
                    power = power + 1;
                    if (power > 100) {
                        power = 100;
                    };
                }
                if (p.keyIsDown(83)) {
                    height = height - 1;
                    if (height < 0) {
                        height = 0;
                    };
                }
                if (p.keyIsDown(p.ENTER)) {
                    Matter.Body.applyForce(ballA, ballA.position, { x: 0, y: -(height * 0.008) });
                    Matter.Body.applyForce(ballA, ballA.position, { x: power * 0.008, y: 0 });
                    height = 0;
                    power = 0;
                    shot = true;
                    shotsTaken = shotsTaken + 1;
                }
            }

            // Check if the ball has landed in the basket
            var distBallA = p.dist(ballA.position.x, ballA.position.y, 1335, 310);
            if (distBallA < 25) {
                levelC = true;
                shotsMade = shotsMade + 1;
            }
            if (levelC == true) {
                screen = 'levelCS';
            }

            // Display level failure text if the ball is stationary after the user has taken the shot
            if (shot == true) {
                if (ballA.velocity.x < 0.005 && ballA.velocity.x > -0.005 && ballA.velocity.y < 0.005 && ballA.velocity.y > -0.005) {
                    levelF = true;
                    shotsMissed = shotsMissed + 1;
                }         
            }

            // Don't display level failure text if level has been completed
            if (levelC == true) {
                levelF = false;
            }

            // Display level failure text if the user has failed the level
            if (levelF == true) {
                screen = 'levelFS';
            }
        }

        if (screen == 'home') {
            height = 0;
            power = 0;
            shot = false;
            levelC = false;
            levelF = false;
            p.background('black');
            p.fill('purple');
            p.rect(550, 150, 400, 200);
            p.rect(100, 400, 400, 200);
            p.rect(550, 400, 400, 200);
            p.rect(1000, 400, 400, 200);
            p.fill('white');
            p.textSize(75);
            p.textAlign(p.CENTER);
            p.text('Basket Bounce', 750, 100);
            p.textSize(50);
            p.text('Level Selection', 750, 240);
            p.text('[Enter]', 750, 290);
            p.text('View Stats', 300, 490);
            p.text('[S]', 300, 540);
            if (p.keyIsDown(p.ENTER)) {
                screen = 'levelSel'
            }
            if (p.keyIsDown(83)) {
                screen = 'stats'
            }
        }

        if (screen == 'stats') {
            p.background('black');
            p.fill('brown');
            p.rect(100, 200, 400, 200);
            p.rect(550, 200, 400, 200);
            p.rect(1000, 200, 400, 200);
            p.fill('purple');
            p.rect(550, 450, 400, 200);
            p.fill('white');
            p.textSize(75);
            p.textAlign(p.CENTER);
            p.text('Session Stats', 750, 100);
            p.textSize(50);
            p.text('Shots Taken', 300, 275);
            p.text(shotsTaken, 300, 350);
            p.text('Shots Made', 750, 275);
            p.text(shotsMade, 750, 350);
            p.text('Shots Missed', 1200, 275);
            p.text(shotsMissed, 1200, 350);
            p.text('Home', 750, 535);
            p.text('[H]', 750, 585);
            if (p.keyIsDown(72)) {
                screen = 'home'
            }
        }

        if (screen == 'levelSel') {
            p.background('black');
            p.fill('purple');
            p.rect(100, 200, 100, 100);
            p.fill('white');
            p.textSize(75);
            p.textAlign(p.CENTER);
            p.text('Level Selection', 750, 100);
            p.textSize(25);
            p.text('Press the number on your keyboard corresponding to the level that you would like to play', 750, 625);
            p.textSize(50);
            p.fill('purple');
            p.rect(100, 200, 100, 100);
            p.rect(400, 200, 100, 100);
            p.rect(700, 200, 100, 100);
            p.rect(1000, 200, 100, 100);
            p.rect(1300, 200, 100, 100);
            p.rect(100, 400, 100, 100);
            p.rect(400, 400, 100, 100);
            p.rect(700, 400, 100, 100);
            p.rect(1000, 400, 100, 100);
            p.rect(1300, 400, 100, 100);
            p.fill('white');
            p.text('1', 150, 265);
            if (p.keyIsDown(49)) {
                screen = 'level'
                level = 1
                reset();
            }
            p.text('2', 450, 265);
            if (p.keyIsDown(50)) {
                screen = 'level'
                level = 2
                reset();
            }
            p.text('3', 750, 265);
            if (p.keyIsDown(51)) {
                screen = 'level'
                level = 3
                reset();
            }
            p.text('4', 1050, 265);
            if (p.keyIsDown(52)) {
                screen = 'level'
                level = 4
                reset();
            }
            p.text('5', 1350, 265);
            if (p.keyIsDown(53)) {
                screen = 'level'
                level = 5
                reset();
            }
            p.textSize(25);
            p.text('New', 150, 460);
            p.text('Levels', 450, 460);
            p.text('Coming', 750, 460);
            p.text('Soon', 1050, 460);
            p.text('(Maybe)', 1350, 460);
        }

        if (screen == 'levelCS') {
            height = 0;
            power = 0;
            shot = false;
            levelC = false;
            levelF = false;
            p.background('green');
            p.textSize(100);
            p.textAlign(p.CENTER);
            p.text('Level Completed!', 750, 150);
            p.fill('white');
            p.textSize(50);
            p.text('Home', 750, 250);
            p.text('[H]', 750, 300);
            p.text('Level Selection', 750, 400);
            p.text('[L]', 750, 450);
            p.text('Restart Level', 750, 550);
            p.text('[R]', 750, 600);
            if (p.keyIsDown(72)) {
                screen = 'home'
            }
            if (p.keyIsDown(76)) {
                screen = 'levelSel'
            }
            if (p.keyIsDown(82)) {
                screen = 'level'
                reset();
            }
        }

        if (screen == 'levelFS') {
            height = 0;
            power = 0;
            shot = false;
            levelC = false;
            levelF = false;
            p.background('red');
            p.textSize(100);
            p.textAlign(p.CENTER);
            p.text('Level Failed!', 750, 150);
            p.fill('white');
            p.textSize(50);
            p.text('Home', 750, 250);
            p.text('[H]', 750, 300);
            p.text('Level Selection', 750, 400);
            p.text('[L]', 750, 450);
            p.text('Restart Level', 750, 550);
            p.text('[R]', 750, 600);
            if (p.keyIsDown(72)) {
                screen = 'home'
            }
            if (p.keyIsDown(76)) {
                screen = 'levelSel'
            }
            if (p.keyIsDown(82)) {
                screen = 'level'
                reset();
            }
        }

        function reset() {
            engine = Engine.create();
            ballA = Bodies.circle(200, 675, 25, { restitution: 1 });
            ground = Bodies.rectangle(400, 700, 10000, 60, { isStatic: true });
            borderA = Bodies.rectangle(-500, 350, 1000, 10000, { isStatic: true });
            borderB = Bodies.rectangle(2000, 350, 1000, 10000, { isStatic: true });
            hoopPole = Bodies.rectangle(1400, 475, 25, 390, { isStatic: true });
            hoopPole.collisionFilter = { 'group': -1 };
            hoopBackboard = Bodies.rectangle(1400, 200, 30, 200, { isStatic: true });
            hoopPaint = Bodies.rectangle(1390, 250, 10, 100, { isStatic: true });
            rimCollisionR = Bodies.rectangle(1375, 275, 20, 10, { isStatic: true });
            rimCollisionL = Bodies.rectangle(1290, 275, 10, 10, { isStatic: true });
            hoopRim = Bodies.rectangle(1335, 275, 100, 10, { isStatic: true });
            hoopRim.collisionFilter = { 'group': -1 };
            netA = Bodies.rectangle(1381.5, 310, 3, 60, { isStatic: true });
            netB = Bodies.rectangle(1288.5, 310, 3, 60, { isStatic: true });
    
            World.add(engine.world, [ballA, ground, borderA, borderB, hoopPole, hoopBackboard, hoopPaint, rimCollisionR, rimCollisionL, hoopRim, netA, netB]);
    
            engine.world.gravity.y = 3;
    
            p.textSize(16);

            if (level == 1) {
                boxLvl1 = Bodies.rectangle(750, 350, 75, 75, { isStatic: true });
    
                World.add(engine.world, [boxLvl1]);
            }

            if (level == 2) {
                boxLvl2A = Bodies.rectangle(1110, 25, 550, 50, { isStatic: true });
                boxLvl2B = Bodies.rectangle(950, 175, 100, 50, { isStatic: true });
                boxLvl2C = Bodies.rectangle(1075, 225, 100, 50, { isStatic: true });
                boxLvl2D = Bodies.rectangle(1200, 275, 100, 50, { isStatic: true });

                World.add(engine.world, [boxLvl2A, boxLvl2B, boxLvl2C, boxLvl2D])
            }
    
            if (level == 3) {
                boxLvl3A = Bodies.rectangle(750, 660, 50, 20, { isStatic: true });
                boxLvl3B = Bodies.rectangle(750, 525, 50, 250);
                boxLvl3C = Bodies.rectangle(200, 300, 100, 100, { isStatic: true });
                boxLvl3D = Bodies.rectangle(1100, 400, 100, 100, { isStatic: true });
                boxLvl3E = Bodies.rectangle(900, 250, 100, 100, { isStatic: true });
                boxLvl3E.collisionFilter = { 'group': -1 };
                boxLvl3F = Bodies.rectangle(400, 645, 100, 50, { isStatic: true });
                boxLvl3G = Bodies.rectangle(600, 200, 100, 100, { isStatic: true });
                boxLvl3H = Bodies.rectangle(1300, 200, 100, 100, { isStatic: true });
                boxLvl3H.collisionFilter = { 'group': -1 };
                boxLvl3I = Bodies.rectangle(300, 100, 100, 100, { isStatic: true });
                boxLvl3J = Bodies.rectangle(1450, 645, 50, 50);
    
                World.add(engine.world, [boxLvl3A, boxLvl3B, boxLvl3C, boxLvl3D, boxLvl3E, boxLvl3F, boxLvl3G, boxLvl3H, boxLvl3I, boxLvl3J]);
            }
    
            if (level == 4) {
                boxLvl4 = Bodies.rectangle(750, 350, 300, 700, { isStatic: true });
    
                World.add(engine.world, [boxLvl4]);
            }

            if (level == 5) {
                boxLvl5A = Bodies.rectangle(500, 620, 200, 100, { isStatic: true });
                boxLvl5B = Bodies.rectangle(700, 520, 200, 100, { isStatic: true });
                boxLvl5C = Bodies.rectangle(900, 420, 200, 100, { isStatic: true });
                boxLvl5D = Bodies.rectangle(1100, 320, 200, 100, { isStatic: true });
                boxLvl5E = Bodies.rectangle(100, 550, 200, 100, { isStatic: true });
                boxLvl5F = Bodies.rectangle(300, 450, 200, 100, { isStatic: true });
                boxLvl5G = Bodies.rectangle(500, 350, 200, 100, { isStatic: true });
                boxLvl5H = Bodies.rectangle(700, 250, 200, 100, { isStatic: true });
                boxLvl5I = Bodies.rectangle(900, 150, 200, 100, { isStatic: true });
                boxLvl5J = Bodies.rectangle(1100, 75, 200, 50, { isStatic: true });
                boxLvl5K = Bodies.rectangle(1350, 25, 300, 50, { isStatic: true });

                World.add(engine.world, [boxLvl5A, boxLvl5B, boxLvl5C, boxLvl5D, boxLvl5E, boxLvl5F, boxLvl5G, boxLvl5H, boxLvl5I, boxLvl5J, boxLvl5K])
            }
        }
    };
};

let myp5 = new p5(sketch);