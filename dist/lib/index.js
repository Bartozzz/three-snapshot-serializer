"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toJSON = exports.createSnapshotSerializer = exports.createScene = exports.createRenderer = exports.createCamera = void 0;
var createCamera_1 = require("./createCamera");
exports.createCamera = createCamera_1.default;
var createRenderer_1 = require("./createRenderer");
exports.createRenderer = createRenderer_1.default;
var createScene_1 = require("./createScene");
exports.createScene = createScene_1.default;
var createSnapshotSerializer_1 = require("./createSnapshotSerializer");
exports.createSnapshotSerializer = createSnapshotSerializer_1.default;
var toJSON_1 = require("./toJSON");
exports.toJSON = toJSON_1.default;
exports.default = createSnapshotSerializer_1.default();
//# sourceMappingURL=index.js.map