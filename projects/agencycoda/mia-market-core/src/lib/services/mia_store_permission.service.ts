import { Inject, Injectable } from '@angular/core';
import { MiaStorePermission } from '../entities/mia_store_permission';
import { MiaBaseCrudHttpService, MiaCoreConfig, MIA_CORE_PROVIDER } from '@agencycoda/mia-core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MiaStorePermissionService extends MiaBaseCrudHttpService<MiaStorePermission> {

  constructor(
    @Inject(MIA_CORE_PROVIDER) protected config: MiaCoreConfig,
    protected http: HttpClient
  ) {
    super(http);
    this.basePathUrl = config.baseUrl + 'mia_store_permission';
  }
 
}