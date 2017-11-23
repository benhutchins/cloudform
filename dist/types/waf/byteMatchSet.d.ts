import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface ByteMatchTupleProperties {
    FieldToMatch: FieldToMatch;
    PositionalConstraint: Value<string>;
    TargetString?: Value<string>;
    TargetStringBase64?: Value<string>;
    TextTransformation: Value<string>;
}
export declare class ByteMatchTuple extends ResourceBase {
    constructor(properties: ByteMatchTupleProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface FieldToMatchProperties {
    Data?: Value<string>;
    Type: Value<string>;
}
export declare class FieldToMatch extends ResourceBase {
    constructor(properties: FieldToMatchProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface ByteMatchSetProperties {
    ByteMatchTuples?: List<ByteMatchTuple>;
    Name: Value<string>;
}
export default class ByteMatchSet extends ResourceBase {
    constructor(properties: ByteMatchSetProperties, dependsOn?: Value<string> | Value<string>[]);
}
