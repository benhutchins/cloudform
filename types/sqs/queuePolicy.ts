/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'



export interface QueuePolicyProperties {
    PolicyDocument: any
    Queues: List<Value<string>>
}

export default class QueuePolicy extends ResourceBase {
    constructor(properties: QueuePolicyProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::SQS::QueuePolicy', properties, dependsOn)
    }
}
