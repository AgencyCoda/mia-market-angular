import { Inject, Injectable } from '@angular/core';
import { MiaProductChild } from '../entities/mia_product_child';
import { MiaBaseCrudHttpService, MiaCoreConfig, MIA_CORE_PROVIDER } from '@agencycoda/mia-core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MiaProductChildService extends MiaBaseCrudHttpService<MiaProductChild> {

  constructor(
    @Inject(MIA_CORE_PROVIDER) protected config: MiaCoreConfig,
    protected http: HttpClient
  ) {
    super(http);
    this.basePathUrl = config.baseUrl + 'mia_product_child';
  }
 
}