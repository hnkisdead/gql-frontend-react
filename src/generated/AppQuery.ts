/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AppQuery
// ====================================================

export interface AppQuery_products_objectList {
  __typename: "Product";
  id: number;
  name: string;
  category: string;
}

export interface AppQuery_products_paginator {
  __typename: "Paginator";
  perPage: number;
  numPages: number;
  count: number;
}

export interface AppQuery_products {
  __typename: "ProductsPage";
  objectList: AppQuery_products_objectList[];
  pageNumber: number;
  paginator: AppQuery_products_paginator;
}

export interface AppQuery_me {
  __typename: "User";
  id: number;
  username: string;
  firstName: string;
  lastName: string;
}

export interface AppQuery {
  products: AppQuery_products;
  me: AppQuery_me | null;
}

export interface AppQueryVariables {
  currentPage: number;
}
