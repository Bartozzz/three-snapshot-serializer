import { Configuration } from "./toJSON";
export default function createSnapshotSerializer(options?: Configuration): {
    test(object: any): boolean;
    print(object: any, printer: Function): any;
};
