import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import spaceShip from '../assets/glb/flying_spaceship.glb'

export function Car(props) {

  const group = useRef();
  const { nodes, materials, animations } = useGLTF(spaceShip);
  const { actions } = useAnimations(animations, group);

  console.log(actions)

  useEffect(() => {
    actions["Object_0"].play();
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.019}
        >
          <group name="e2c5ef140f0848158371b1c9abb51507abccleanermaterialmergergles">
            <group name="Object_2" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Object_3">
                <group
                  name="Object_4"
                  position={[0, 141.632, 0]}
                  rotation={[-1.571, 1.57, 1.571]}
                >
                  <group name="Object_5" position={[0, -123.765, 0]}>
                    <group name="TimeframeMainGroup">
                      <group name="Object_7">
                        <mesh
                          name="rocketShape_3_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.rocketShape_3_0.geometry}
                          material={materials.rocketShape}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="Object_9">
                  <group name="Object_10">
                    <group name="Object_11" scale={-1}>
                      <group name="TimeframeMainGroup_1">
                        <group name="Object_13">
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_0"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_0.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_15" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_1"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_1.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_17" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_2"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_2.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_19" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_3"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_3.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_21" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_4"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_4.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_23" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_5"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_5.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_25" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_6"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_6.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_27" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_7"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_7.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_29" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_8"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_8.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_31" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_9"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_9.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_33" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_10"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_10.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_35" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_11"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_11.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_37" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_12"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_12.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_39" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_13"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_13.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_41" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_14"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_14.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_43" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_15"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_15.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_45" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_16"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_16.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_47" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_17"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_17.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_49" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_18"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_18.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_51" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_19"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_19.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_53" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_20"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_20.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_55" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_21"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_21.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_57" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_22"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_22.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_59" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_23"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_23.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_61" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_24"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_24.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_63" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_25"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_25.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_65" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_26"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_26.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_67" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_27"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_27.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_69" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_28"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_28.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_71" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_29"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_29.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_73" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_30"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_30.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_75" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_31"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_31.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_77" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_32"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_32.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_79" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_33"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_33.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_81" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_34"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_34.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_83" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_35"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_35.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_85" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_36"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_36.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_87" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_37"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_37.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_89" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_38"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_38.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_91" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_39"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_39.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_93" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_40"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_40.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_95" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_41"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_41.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_97" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_42"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_42.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_99" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_43"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_43.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_101" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_44"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_44.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_103" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_45"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_45.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_105" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_46"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_46.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_107" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_47"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_47.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_109" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_48"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_48.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_111" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_49"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_49.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_113" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_50"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_50.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_115" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_51"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_51.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_117" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_52"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_52.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_119" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_53"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_53.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_121" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_54"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_54.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_123" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_55"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_55.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_125" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_56"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_56.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_127" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_57"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_57.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_129" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_58"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_58.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_131" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_59"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_59.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_133" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_60"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_60.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_135" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_61"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_61.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_137" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_62"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_62.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_139" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_63"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_63.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_141" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_64"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_64.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_143" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_65"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_65.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_145" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_66"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_66.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_147" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_67"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_67.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_149" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_68"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_68.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_151" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_69"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_69.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_153" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_70"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_70.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_155" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_71"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_71.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_157" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_72"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_72.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_159" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_73"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_73.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_161" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_74"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_74.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_163" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_75"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_75.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_165" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_76"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_76.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_167" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_77"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_77.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_169" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_78"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_78.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_171" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_79"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_79.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_173" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_80"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_80.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_175" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_81"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_81.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_177" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_82"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_82.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_179" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_83"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_83.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_181" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_84"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_84.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_183" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_85"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_85.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_185" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_86"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_86.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_187" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_87"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_87.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_189" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_88"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_88.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_191" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_89"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_89.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_193" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_90"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_90.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_195" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_91"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_91.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_197" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_92"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_92.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_199" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_93"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_93.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_201" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_94"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_94.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_203" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_95"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_95.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_205" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_96"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_96.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_207" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_97"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_97.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_209" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_98"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_98.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_211" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_99"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_99.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_213" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_100"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_100.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_215" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_101"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_101.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_217" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_102"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_102.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_219" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_103"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_103.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_221" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_104"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_104.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_223" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_105"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_105.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_225" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_106"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_106.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_227" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_107"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_107.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_229" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_108"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_108.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_231" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_109"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_109.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_233" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_110"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_110.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_235" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_111"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_111.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_237" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_112"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_112.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_239" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_113"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_113.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_241" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_114"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_114.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_243" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_115"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_115.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_245" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_116"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_116.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_247" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_117"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_117.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_249" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_118"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_118.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_251" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_119"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_119.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_253" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_120"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_120.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_255" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_121"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_121.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_257" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_122"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_122.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_259" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_123"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_123.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_261" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_124"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_124.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_263" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_125"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_125.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_265" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_126"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_126.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_267" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_127"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_127.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_269" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_128"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_128.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_271" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_129"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_129.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_273" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_130"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_130.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_275" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_131"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_131.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_277" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_132"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_132.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_279" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_133"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_133.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_281" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_134"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_134.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_283" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_135"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_135.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_285" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_136"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_136.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_287" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_137"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_137.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_289" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_138"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_138.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_291" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_139"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_139.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_293" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_140"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_140.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_295" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_141"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_141.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_297" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_142"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_142.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_299" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_143"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_143.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                        <group name="Object_301" scale={0}>
                          <mesh
                            name="Volume_Mesher_1PolygonShape_7_144"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.Volume_Mesher_1PolygonShape_7_144.geometry
                            }
                            material={materials.Volume_Mesher_1PolygonShape}
                          />
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}
