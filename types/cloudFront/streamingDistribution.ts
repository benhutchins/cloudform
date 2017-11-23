/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export interface TrustedSignersProperties {
    Enabled: Value<boolean>
    AwsAccountNumbers?: List<Value<string>>
}

export class TrustedSigners extends ResourceBase {
    constructor(properties: TrustedSignersProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::CloudFront::TrustedSigners', properties, dependsOn)
    }
}

export interface S3OriginProperties {
    DomainName: Value<string>
    OriginAccessIdentity: Value<string>
}

export class S3Origin extends ResourceBase {
    constructor(properties: S3OriginProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::CloudFront::S3Origin', properties, dependsOn)
    }
}

export interface LoggingProperties {
    Bucket: Value<string>
    Enabled: Value<boolean>
    Prefix: Value<string>
}

export class Logging extends ResourceBase {
    constructor(properties: LoggingProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::CloudFront::Logging', properties, dependsOn)
    }
}

export interface StreamingDistributionConfigProperties {
    Logging?: Logging
    Comment: Value<string>
    PriceClass?: Value<string>
    S3Origin: S3Origin
    Enabled: Value<boolean>
    Aliases?: List<Value<string>>
    TrustedSigners: TrustedSigners
}

export class StreamingDistributionConfig extends ResourceBase {
    constructor(properties: StreamingDistributionConfigProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::CloudFront::StreamingDistributionConfig', properties, dependsOn)
    }
}

export interface StreamingDistributionProperties {
    StreamingDistributionConfig: StreamingDistributionConfig
    Tags?: ResourceTag[]
}

export default class StreamingDistribution extends ResourceBase {
    constructor(properties: StreamingDistributionProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::CloudFront::StreamingDistribution', properties, dependsOn)
    }
}
