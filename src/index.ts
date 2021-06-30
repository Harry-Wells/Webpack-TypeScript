import p5 from 'p5';

import * as Matter from 'matter-js';

let height = 0;
let power = 0;

var shot = false
var levelC = false
var levelF = false

var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

let sketch = function (p: p5) {
    let engine: Matter.Engine;
    var ballA: Matter.Body;
    var boxA: Matter.Body;
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

    p.setup = function () {
        p.createCanvas(1500, 700);

        engine = Engine.create();
        ballA = Bodies.circle(200, 675, 25, { restitution: 1 });
        boxA = Bodies.rectangle(750, 350, 75, 75, { isStatic: true });
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

        World.add(engine.world, [ballA, boxA, ground, borderA, borderB, hoopPole, hoopBackboard, hoopPaint, rimCollisionR, rimCollisionL, hoopRim, netA, netB]);

        engine.world.gravity.y = 3;

        p.textSize(16);
        p.textAlign();
    };

    p.draw = function () {
        Engine.update(engine, 10);

        p.background('blue');

        // Draw BallA
        p.fill('orange');

        engine.world.bodies.forEach(body => {
            p.beginShape()
            ballA.vertices.forEach(vertex => {
                p.vertex(vertex.x, vertex.y);
            })
            p.endShape(p.CLOSE);
        });

        // Draw BoxA
        p.fill('#715428');

        engine.world.bodies.forEach(body => {
            p.beginShape()
            boxA.vertices.forEach(vertex => {
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
            }
        }

        // Check if the ball has landed in the basket
        var distBallA = p.dist(ballA.position.x, ballA.position.y, 1335, 310);
        if (distBallA < 25) {
            levelC = true;
        }
        if (levelC == true) {
            p.text('Level Completed!', 750, 200);
        }

        // Display level failure text if the ball is stationary after the user has taken the shot
        if (shot == true) {
            if (ballA.velocity.x < 0.001) {
                if (ballA.velocity.x > -0.001) {
                    if (ballA.velocity.y < 0.001) {
                        if (ballA.velocity.y > -0.001) {
                            levelF = true;
                        }
                    }
                }
            }           
        }

        // Don't display level failure text if level has been completed
        if (levelC == true) {
            levelF = false;
        }

        // Display level failure text if the user has failed the level
        if (levelF == true) {
            p.text('Level Failed!', 750, 200);
        }
    };
};

let myp5 = new p5(sketch);