/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class Connector {
    ConnectorArn!: Value<string>
    Parameters?: {[key: string]: any}
    Id!: Value<string>

    constructor(properties: Connector) {
        Object.assign(this, properties)
    }
}

export interface ConnectorDefinitionVersionProperties {
    Connectors: List<Connector>
    ConnectorDefinitionId: Value<string>
}

export default class ConnectorDefinitionVersion extends ResourceBase<ConnectorDefinitionVersionProperties> {
    static Connector = Connector

    constructor(properties: ConnectorDefinitionVersionProperties) {
        super('AWS::Greengrass::ConnectorDefinitionVersion', properties)
    }
}
