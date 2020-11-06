import { PackageModel } from './PackageModel';
import { ServerModel } from './ServerModel';
export interface ConsumerModel {
    id?: number;
    logo?: string;
    consumerName?: string;
    contract?: string;
    color?: string;
    runtime?: string;
    carValue?: string;
    userValue?: string;
    expDate?: string;
    timeExp?: string;
    status?: string;
    detail?: string;
    email?: string;
    address?: string;
    server?: ServerModel;
    package?: PackageModel;
}