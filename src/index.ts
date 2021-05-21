import * as p5 from 'p5';

import * as Matter from 'matter-js';

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

    p.setup = function () {
        p.createCanvas(1500, 700);

        engine = Engine.create();
        ballA = Bodies.circle(400, 200, 25, { restitution: 1 });
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

        World.add(engine.world, [ballA, boxA, ground, borderA, borderB, hoopPole, hoopBackboard, hoopPaint, rimCollisionR, rimCollisionL, hoopRim]);

        engine.world.gravity.y = 3;
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

        if (p.keyIsDown(p.UP_ARROW)) {
            Matter.Body.applyForce(ballA, ballA.position, { x: 0, y: -0.01 });
        }
        if (p.keyIsDown(p.LEFT_ARROW)) {
            Matter.Body.applyForce(ballA, ballA.position, { x: -0.01, y: 0 });
        }
        if (p.keyIsDown(p.RIGHT_ARROW)) {
            Matter.Body.applyForce(ballA, ballA.position, { x: +0.01, y: 0 });
        }
        if (p.keyIsDown(p.DOWN_ARROW)) {
            Matter.Body.applyForce(ballA, ballA.position, { x: 0, y: +0.01 });
        }
        if (p.keyIsDown(87)) {
            Matter.Body.applyForce(ballA, ballA.position, { x: 0, y: -0.01 });
        }
        if (p.keyIsDown(65)) {
            Matter.Body.applyForce(ballA, ballA.position, { x: -0.01, y: 0 });
        }
        if (p.keyIsDown(68)) {
            Matter.Body.applyForce(ballA, ballA.position, { x: +0.01, y: 0 });
        }
        if (p.keyIsDown(83)) {
            Matter.Body.applyForce(ballA, ballA.position, { x: 0, y: +0.01 });
        }
    };
};

let myp5 = new p5(sketch);