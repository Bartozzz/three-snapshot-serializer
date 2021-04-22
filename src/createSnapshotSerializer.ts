import { Object3D } from "three";
import toJSON, { Configuration } from "./toJSON";

export default function createSnapshotSerializer(options?: Configuration) {
  return {
    test(object: any) {
      return object instanceof Object3D;
    },

    print(object: any, printer: Function) {
      return printer(toJSON(object, options));
    },
  };
}
