import { TagItem } from '@wow/shared/interfaces';
import { DEPARTMENT_TYPES, DISTRICT_TYPES, NODE_TYPES } from '@wow/core/interfaces';

export const ZONE_SUPPORT_STATE: Record<number, TagItem> = {
  1: {
    text: 'Construido',
    textClass: 'text-white',
    bgClass: 'bg-green-600/10',
    previewClass: 'bg-green-600'
  },
  2: {
    text: 'En construcción',
    textClass: 'text-white',
    bgClass: 'bg-blue-600/10',
    previewClass: 'bg-blue-600'
  }
};

export const SOLD_SUPPORT_STATE: Record<number, TagItem> = {
  1: {
    text: 'En venta',
    textClass: 'text-white-600',
    bgClass: 'bg-green-600/10',
    previewClass: 'bg-green-600'
  },
  2: {
    text: 'Bloqueado',
    textClass: 'text-white-600',
    bgClass: 'bg-gray-600/10',
    previewClass: 'bg-gray-600'
  }
};

export const TRONCAL_STATE: Record<number, TagItem> = {
  1: {
    text: '10%',
    textClass: 'text-white-600',
    bgClass: 'bg-green-600/10',
    previewClass: 'bg-green-600'
  },
  2: {
    text: '30%',
    textClass: 'text-white-600',
    bgClass: 'bg-gray-600/10',
    previewClass: 'bg-gray-600'
  },
  3: {
    text: '50%',
    textClass: 'text-white-600',
    bgClass: 'bg-gray-600/10',
    previewClass: 'bg-gray-600'
  },
  4: {
    text: '80%',
    textClass: 'text-white-600',
    bgClass: 'bg-gray-600/10',
    previewClass: 'bg-gray-600'
  },
  5: {
    text: '100%',
    textClass: 'text-white-600',
    bgClass: 'bg-gray-600/10',
    previewClass: 'bg-gray-600'
  },
};

export interface EndTicketRequest {
  codeAtention: string;
  zendeskTicket: string;
  zendeskUrl: string;
}


export class ZoneSupport {
  id: number;
  department: string;
  estate: number;
  district: string;
  code: string;
  troncales: string;
  nodes: string;
  status: string;
  created_at: Date;
  state: number;
  sold: number;
  created_by: number;

  constructor(model: ZoneSupport) {
    this.id = model.id;
    this.department = model.department;
    this.estate = model.estate;
    this.district = model.district;
    this.code = model.code;
    this.troncales = model.troncales;
    this.nodes = model.nodes;
    this.status = model.status;
    this.created_at = model.created_at;
    this.state = model.state;
    this.sold = model.sold;
    this.created_by = model.created_by;
  }

  // get documentName(): string {
  //   const index = IDENTITY_DOCUMENT_TYPES.findIndex(item => item.id === this.document_type)
  //   return IDENTITY_DOCUMENT_TYPES[index].name;
  // }

  // get documentDescription(): string {
  //   return `${ this.documentName } ${ this.document_num }`;
  // }

  // get stateBadge(): TagItem {
  //   return TICKET_SUPPORT_STATE[this.state];
  // }

  // get solicitudeTypeName(): string {
  //   const index = SOLICITUDE_TYPES.findIndex(item => item.id === this.solicitude_type)
  //   return SOLICITUDE_TYPES[index].name;
  // }

  // get issueName(): string {
  //   const index = ISSUE_TYPES.findIndex(item => item.id === this.issue_type_id)
  //   return ISSUE_TYPES[index].name;
  // }

  // get fullName(): string {
  //   return `${ this.last_name }, ${ this.name }`;
  // }

  // get codeAtention(): string | null {
  //   return this.code_atention;
  // }

  // get zendeskTicket(): string | null {
  //   return this.zendesk_ticket;
  // }

  // get zendeskUrl(): string | null {
  //   return this.zendesk_url;
  // }

}
