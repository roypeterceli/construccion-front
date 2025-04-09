import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@wow/env/environment';
import { ApiResponse } from '@wow/shared/interfaces';
import { map } from 'rxjs';
// import { CustomerSearchResponse } from '@wow/core/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private http = inject(HttpClient);

  getByDocument(documentType: number, documentNumber: string) {
    const options = {
      params: {
        client_identity_document_type_id: documentType,
        client_identity_document_number: documentNumber
      }
    }
    return this.http.get<ApiResponse<any>>(`${ environment.api.sgc }/v2/gestion-colas/clientes`, options).pipe(
      // map(res => CustomerSearchResponse.fromApiResponse(res.data))
    );
  }

}
