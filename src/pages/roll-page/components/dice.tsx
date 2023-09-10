import { BoxProps, PlaneProps, useBox, usePlane } from "@react-three/cannon";
import { BufferGeometry, Mesh } from "three";

// function MyAnimatedBox() {
//   const myMesh = useRef();
//   useFrame(({ clock }) => {
//     myMesh.current.rotation.x = clock.getElapsedTime();
//   });
//   return (
//     <mesh ref={myMesh}>
//       <boxGeometry />
//       <meshBasicMaterial color="magenta" />
//     </mesh>
//   );
// }
// export default MyAnimatedBox;

export function Cube(props: BoxProps) {
  const [ref] = useBox(() => ({ mass: 1, position: [0, 5, 0], ...props }));
  return (
    <mesh
      ref={ref as React.RefObject<Mesh<BufferGeometry>>}
      receiveShadow
      castShadow
    >
      <boxGeometry />
      <meshLambertMaterial color="green" />
    </mesh>
  );
}

export function Plane(props: PlaneProps) {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));
  return (
    <mesh ref={ref as React.RefObject<Mesh<BufferGeometry>>} receiveShadow>
      <planeGeometry args={[1000, 1000]} />
      <shadowMaterial color="#171717" transparent opacity={0.4} />
    </mesh>
  );
}
