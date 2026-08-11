// type Timestamp = number;
// interface Wave {
//     startTime: Timestamp;
//     height: number;
//     buoyReached: Promise<void>;
// }

// interface DangerousWave {
//     reachTime: Timestamp;
//     height: number;
// }

// type WavesEndHandler = (result: DangerousWave[]) => void;

// interface DetectDangerousWaveProps {
//     distanceToLighthouse: number;
//     distanceToBuoy: number;
//     wavesFinished: Promise<WavesEndHandler>;
// }

// type DetectDangerousWaveReturn = (wave: Wave) => void;

export const detectDangerousWave = ({
    distanceToLighthouse,
    distanceToBuoy,
    wavesFinished,
}) => {
    // your code here

    return (wave) => {
        // your code here
    };
};

const delay = (delay, ...params) =>
    new Promise((resolve) => setTimeout(resolve, delay, ...params));

const wavesFinished = delay(2000, (result) => {
    const expectedResult = [
        { reachTime: startTime + 2000, height: 5 },
        { reachTime: startTime + 3000, height: 7 },
    ];
    
    console.assert(
        JSON.stringify(result) === JSON.stringify(expectedResult),
        "test failed"
    );
});

const detector = detectDangerousWave({
    distanceToLighthouse: 100,
    distanceToBuoy: 80,
    wavesFinished,
});

const startTime = Date.now();

// at startTime
detector({ height: 2, startTime, buoyReached: delay(400) });
detector({ height: 7, startTime, buoyReached: delay(600) });

// at startTime + 500
detector({
    height: 2,
    startTime: startTime + 500,
    buoyReached: delay(300 + 500),
});

// at startTime + 1000
detector({
    height: 1,
    startTime: startTime + 1000,
    buoyReached: delay(200 + 1000),
});
