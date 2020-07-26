/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Products
// ====================================================

export interface Products_objectList {
  __typename: "Product";
  id: number;
  name: string;
  category: string;
}

export interface Products_paginator {
  __typename: "Paginator";
  perPage: number;
  numPages: number;
  count: number;
}

export interface Products {
  __typename: "ProductsPage";
  objectList: Products_objectList[];
  pageNumber: number;
  paginator: Products_paginator;
}
