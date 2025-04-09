export interface Node {
  nroSuministro: string;
  celular: string;
  celular2?: string;
  email: string;
  departamento: string;
  provincia: string;
  distrito: string;
  direccion: string;
  velocidad: string;
  descServicio: string;
  tipo: string;
  estado: string;
}

// export class CustomerSearchResponse {
//   name: string;
//   lastname: string;
//   services: CustomerServiceResponse[];

//   static fromApiResponse(obj: any): CustomerSearchResponse | null {
//     if (!obj) return null;

//     return new CustomerSearchResponse(
//       obj['NombreCliente'],
//       obj['ApeCliente'],
//       obj['IstSuministros'],
//     )
//   }

//   constructor(name: string, lastname: string, services: CustomerServiceResponse[]) {
//     this.name = name;
//     this.lastname = lastname;
//     this.services = services;
//   }
// }
