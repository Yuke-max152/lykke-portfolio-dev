import * as THREE from 'three';
import React, { useRef, useReducer, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  useGLTF,
  MeshTransmissionMaterial,
  Environment,
  Lightformer,
} from '@react-three/drei';
import {
  CuboidCollider,
  BallCollider,
  Physics,
  RigidBody,
} from '@react-three/rapier';
import { EffectComposer, N8AO } from '@react-three/postprocessing';
import { easing } from 'maath';

import FpsMonitor from '../components/FpsMonitor.jsx';
import ConnectorsOne from '../assets/3d/connectors.glb';
import { languageOptions } from '../i18n/resources.js';

const accents = ['#4060ff', '#20ffa0', '#ff4060', '#ffcc00'];

const shuffle = (accent = 0) => [
  { color: '#444', roughness: 0.1 },
  { color: '#444', roughness: 0.75 },
  { color: '#444', roughness: 0.75 },
  { color: 'white', roughness: 0.1 },
  { color: 'white', roughness: 0.75 },
  { color: 'white', roughness: 0.1 },
  { color: accents[accent], roughness: 0.1, accent: true },
  { color: accents[accent], roughness: 0.75, accent: true },
  { color: accents[accent], roughness: 0.1, accent: true },
];

const ConnectPage = () => {
  const { i18n, t } = useTranslation();

  return (
    <section>
      <div className="container">
        <div className="nav">
          <h1 className="label">{t('hero.brand')}</h1>
          <div />
          <span className="caption">
            <span className="caption-full">{t('hero.caption')}</span>
            <span className="caption-short">{t('hero.shortCaption')}</span>
          </span>
          <div />
          <div
            className="language-switcher"
            aria-label={t('languageSwitcher.label')}
          >
            {languageOptions.map(({ code, label }) => (
              <button
                className="language-option"
                type="button"
                aria-pressed={(i18n.resolvedLanguage || i18n.language) === code}
                data-active={(i18n.resolvedLanguage || i18n.language) === code}
                key={code}
                onClick={() => i18n.changeLanguage(code)}
              >
                {label}
              </button>
            ))}
          </div>
          <a
            href="https://github.com/Yuke-max152"
            target="_blank"
            rel="noreferrer"
            aria-label="Github"
          >
            <div className="button github-button">
              <svg
                className="github-icon"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.65 7.65 0 0 1 8 3.86c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
              </svg>
              {t('hero.github')}
            </div>
          </a>
          <div className="button gray">{t('hero.menuMark')}</div>
        </div>
        <Scene style={{ borderRadius: 20 }} />
        <FpsMonitor />
      </div>
    </section>
  );
};

function Scene(props) {
  const [accent, click] = useReducer((state) => ++state % accents.length, 1);
  const connectors = useMemo(() => shuffle(accent), [accent]);

  return (
    <Canvas
      onClick={click}
      shadows
      dpr={[1, 1.5]}
      gl={{ antialias: false }}
      camera={{ position: [0, 0, 15], fov: 17.5, near: 1, far: 20 }}
      {...props}
    >
      <color attach="background" args={['#d9d8d3']} />
      <ambientLight intensity={0.4} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1}
        castShadow
      />
      <Physics gravity={[0, 0, 0]}>
        <Pointer />
        {connectors.map((props, i) => (
          <Connector key={i} {...props} />
        ))}
        <Connector position={[10, 10, 5]}>
          <Model>
            <MeshTransmissionMaterial
              clearcoat={1}
              thickness={0.1}
              anisotropicBlur={0.1}
              chromaticAberration={0.1}
              samples={8}
              resolution={512}
              color={connectors[0].color}
            />
          </Model>
        </Connector>
      </Physics>
      <EffectComposer disableNormalPass multisampling={8}>
        <N8AO distanceFalloff={1} aoRadius={1} intensity={4} />
      </EffectComposer>
      <Environment resolution={256}>
        <group rotation={[-Math.PI / 3, 0, 1]}>
          <Lightformer
            form="circle"
            intensity={4}
            rotation-x={Math.PI / 2}
            position={[0, 5, -9]}
            scale={2}
          />
        </group>
      </Environment>
    </Canvas>
  );
}

function Connector({
  position,
  children,
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
  accent,
  ...props
}) {
  const api = useRef();
  const pos = useMemo(() => position || [r(10), r(10), r(10)], []);

  useFrame((state, delta) => {
    delta = Math.min(0.1, delta);
    api.current?.applyImpulse(
      vec.copy(api.current.translation()).negate().multiplyScalar(0.2)
    );
  });

  return (
    <RigidBody
      linearDamping={4}
      angularDamping={1}
      friction={0.1}
      position={pos}
      ref={api}
      colliders={false}
    >
      <CuboidCollider args={[0.38, 1.27, 0.38]} />
      <CuboidCollider args={[1.27, 0.38, 0.38]} />
      <CuboidCollider args={[0.38, 0.38, 1.27]} />
      {children ? children : <Model {...props} />}
      {accent && (
        <pointLight intensity={4} distance={2.5} color={props.color} />
      )}
    </RigidBody>
  );
}

function Pointer({ vec = new THREE.Vector3() }) {
  const ref = useRef();
  useFrame(({ mouse, viewport }) => {
    ref.current?.setNextKinematicTranslation(
      vec.set(
        (mouse.x * viewport.width) / 2,
        (mouse.y * viewport.height) / 2,
        0
      )
    );
  });

  return (
    <RigidBody
      position={[0, 0, 0]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[1]} />
    </RigidBody>
  );
}

const Model = ({ children, color = 'white', roughness = 0, ...props }) => {
  const ref = useRef();
  const { nodes, materials } = useGLTF(ConnectorsOne);

  useFrame((state, delta) => {
    // Uncomment the next line if you want to use easing
    // easing.dampC(ref.current.material.color, color, 0.2, delta);
    // Directly set the color without easing
    ref.current.material.color.set(color);
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={ref}
        castShadow
        receiveShadow
        geometry={nodes.connector.geometry}
        material={materials.base}
        scale={10}
      >
        {children}
      </mesh>
    </group>
  );
};

export default ConnectPage;
