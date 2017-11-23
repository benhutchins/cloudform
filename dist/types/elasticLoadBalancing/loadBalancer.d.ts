import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface HealthCheckProperties {
    HealthyThreshold: Value<string>;
    Interval: Value<string>;
    Target: Value<string>;
    Timeout: Value<string>;
    UnhealthyThreshold: Value<string>;
}
export declare class HealthCheck extends ResourceBase {
    constructor(properties: HealthCheckProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface AccessLoggingPolicyProperties {
    EmitInterval?: Value<number>;
    Enabled: Value<boolean>;
    S3BucketName: Value<string>;
    S3BucketPrefix?: Value<string>;
}
export declare class AccessLoggingPolicy extends ResourceBase {
    constructor(properties: AccessLoggingPolicyProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface ConnectionSettingsProperties {
    IdleTimeout: Value<number>;
}
export declare class ConnectionSettings extends ResourceBase {
    constructor(properties: ConnectionSettingsProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface LBCookieStickinessPolicyProperties {
    CookieExpirationPeriod?: Value<string>;
    PolicyName?: Value<string>;
}
export declare class LBCookieStickinessPolicy extends ResourceBase {
    constructor(properties: LBCookieStickinessPolicyProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface ConnectionDrainingPolicyProperties {
    Enabled: Value<boolean>;
    Timeout?: Value<number>;
}
export declare class ConnectionDrainingPolicy extends ResourceBase {
    constructor(properties: ConnectionDrainingPolicyProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface ListenersProperties {
    InstancePort: Value<string>;
    InstanceProtocol?: Value<string>;
    LoadBalancerPort: Value<string>;
    PolicyNames?: List<Value<string>>;
    Protocol: Value<string>;
    SSLCertificateId?: Value<string>;
}
export declare class Listeners extends ResourceBase {
    constructor(properties: ListenersProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface PoliciesProperties {
    Attributes: List<any>;
    InstancePorts?: List<Value<string>>;
    LoadBalancerPorts?: List<Value<string>>;
    PolicyName: Value<string>;
    PolicyType: Value<string>;
}
export declare class Policies extends ResourceBase {
    constructor(properties: PoliciesProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface AppCookieStickinessPolicyProperties {
    CookieName: Value<string>;
    PolicyName: Value<string>;
}
export declare class AppCookieStickinessPolicy extends ResourceBase {
    constructor(properties: AppCookieStickinessPolicyProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface LoadBalancerProperties {
    AccessLoggingPolicy?: AccessLoggingPolicy;
    AppCookieStickinessPolicy?: List<AppCookieStickinessPolicy>;
    AvailabilityZones?: List<Value<string>>;
    ConnectionDrainingPolicy?: ConnectionDrainingPolicy;
    ConnectionSettings?: ConnectionSettings;
    CrossZone?: Value<boolean>;
    HealthCheck?: HealthCheck;
    Instances?: List<Value<string>>;
    LBCookieStickinessPolicy?: List<LBCookieStickinessPolicy>;
    Listeners: List<Listeners>;
    LoadBalancerName?: Value<string>;
    Policies?: List<Policies>;
    Scheme?: Value<string>;
    SecurityGroups?: List<Value<string>>;
    Subnets?: List<Value<string>>;
    Tags?: ResourceTag[];
}
export default class LoadBalancer extends ResourceBase {
    constructor(properties: LoadBalancerProperties, dependsOn?: Value<string> | Value<string>[]);
}
