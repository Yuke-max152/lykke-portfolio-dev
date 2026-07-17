import { useEffect, useMemo, useState } from 'react';

export const FPS_MONITOR_ENABLED = true;

const SAMPLE_INTERVAL_MS = 600;
const TARGET_FPS = 60;

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const formatFrameTime = (frameTime) => {
  if (frameTime === null) {
    return '--';
  }

  return `${frameTime.toFixed(1)}ms`;
};

const FpsMonitor = () => {
  const [sample, setSample] = useState({
    fps: null,
    frameTime: null,
  });

  useEffect(() => {
    if (!FPS_MONITOR_ENABLED) {
      return undefined;
    }

    let animationFrameId;
    let frameCount = 0;
    let frameTimeTotal = 0;
    let sampleStartedAt = performance.now();
    let previousFrameAt = sampleStartedAt;

    const measureFrame = (now) => {
      frameCount += 1;
      frameTimeTotal += now - previousFrameAt;
      previousFrameAt = now;

      const elapsed = now - sampleStartedAt;

      if (elapsed >= SAMPLE_INTERVAL_MS) {
        setSample({
          fps: Math.round((frameCount * 1000) / elapsed),
          frameTime: frameTimeTotal / frameCount,
        });

        frameCount = 0;
        frameTimeTotal = 0;
        sampleStartedAt = now;
      }

      animationFrameId = requestAnimationFrame(measureFrame);
    };

    animationFrameId = requestAnimationFrame(measureFrame);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const fpsRatio = useMemo(
    () => clamp((sample.fps || 0) / TARGET_FPS, 0, 1),
    [sample.fps]
  );

  if (!FPS_MONITOR_ENABLED) {
    return null;
  }

  return (
    <aside
      className="fps-monitor"
      aria-label="FPS performance monitor"
      style={{ '--fps-ratio': fpsRatio }}
    >
      <span className="fps-monitor__label">FPS</span>
      <span className="fps-monitor__value">{sample.fps ?? '--'}</span>
      <span className="fps-monitor__meta">{formatFrameTime(sample.frameTime)}</span>
      <span className="fps-monitor__track" aria-hidden="true">
        <span className="fps-monitor__bar" />
      </span>
    </aside>
  );
};

export default FpsMonitor;
