// generated by free-swagger
// @ts-nocheck
/* eslint-disable */
import {
  Result,
  JavaList,
  ExpenseCategoryResponse,
  ExpenseCategoryRequest,
  PageInfo,
  ExpenseTypeResponse,
  ExpenseTypeRequest,
  ExpenseTypeDetailResponse
} from "./interface";
import axios, { AxiosResponse } from "axios";

// 查询没有费用列表关联的费用大类
export const queryExpenseCategoryUsingGET = () =>
  axios.request<Result<JavaList<ExpenseCategoryResponse>>, AxiosResponse<Result<JavaList<ExpenseCategoryResponse>>>>({
    url: `/v1/admin/expense-categories`,
    method: "get",
    params: {},
    data: {}
  });

// 新增费用大类
export const createExpenseCategoryUsingPOST = (params: ExpenseCategoryRequest) =>
  axios.request<Result, AxiosResponse<Result>>({
    url: `/v1/admin/expense-categories`,
    method: "post",
    params: {},
    data: params
  });

// 删除费用大类
export const deleteExpenseCategoryUsingDELETE = (params: ExpenseCategoryRequest) =>
  axios.request<Result, AxiosResponse<Result>>({
    url: `/v1/admin/expense-categories`,
    method: "delete",
    params: {},
    data: params
  });

// 编辑费用大类
export const editExpenseCategoryUsingPUT = (
  params: ExpenseCategoryRequest,
  { unionId } = {
    unionId: string
  }
) =>
  axios.request<Result, AxiosResponse<Result>>({
    url: `/v1/admin/expense-categories/${unionId}`,
    method: "put",
    params: {},
    data: params
  });

// 查询费用类型列表
export const queryExpenseTypeListUsingGET = (params: {
  accessCompanyTypeEnum?: string;
  accessEmpTypeEnum?: string;
  accessHierarchyEnum?: string;
  allowanceType?: string;
  categoryUnionId?: string;
  code?: string;
  currentEmpNo?: string;
  currentEmpUnionId?: string;
  description?: string;
  empClusterUnionIds?: string;
  empCompanyUnionIds?: string;
  "expenseType.allowanceType"?: string;
  "expenseType.categoryUnionId"?: string;
  "expenseType.code"?: string;
  "expenseType.createTime"?: string;
  "expenseType.creator"?: string;
  "expenseType.description"?: string;
  "expenseType.formUnionId"?: string;
  "expenseType.groupUnionId"?: string;
  "expenseType.id"?: number;
  "expenseType.isActive"?: boolean;
  "expenseType.isAllocation"?: boolean;
  "expenseType.isAllowedInvoices"?: boolean;
  "expenseType.isDeleted"?: boolean;
  "expenseType.isGroup"?: boolean;
  "expenseType.isWithInvoice"?: string;
  "expenseType.modifier"?: string;
  "expenseType.name"?: string;
  "expenseType.paymentMethod"?: string;
  "expenseType.tenantUnionId"?: string;
  "expenseType.unionId"?: string;
  "expenseType.updateTime"?: string;
  formUnionId?: string;
  groupUnionId?: string;
  isActive?: boolean;
  isAllocation?: boolean;
  isAllowedInvoices?: boolean;
  isWithInvoice?: string;
  name?: string;
  originUnionId?: string;
  pageNum?: number;
  pageSize?: number;
  paymentMethod?: string;
  tenantUnionId?: string;
  unionId?: string;
}) =>
  axios.request<Result<PageInfo<ExpenseTypeResponse>>, AxiosResponse<Result<PageInfo<ExpenseTypeResponse>>>>({
    url: `/v1/admin/expense-types`,
    method: "get",
    params: params,
    data: {}
  });

// 新增费用类型
export const newExpenseTypeUsingPOST = (params: ExpenseTypeRequest) =>
  axios.request<Result, AxiosResponse<Result>>({
    url: `/v1/admin/expense-types`,
    method: "post",
    params: {},
    data: params
  });

// 复制费用类型
export const copyExpenseTypeUsingPOST = (
  params: ExpenseTypeRequest,
  { originUnionId } = {
    originUnionId: string
  }
) =>
  axios.request<Result, AxiosResponse<Result>>({
    url: `/v1/admin/expense-types/${originUnionId}`,
    method: "post",
    params: {},
    data: params
  });

// 查询费用类型详情
export const queryExpenseTypeDetailUsingGET = (
  params: { [key: string]: never },
  { unionId } = {
    unionId: string
  }
) =>
  axios.request<Result<ExpenseTypeDetailResponse>, AxiosResponse<Result<ExpenseTypeDetailResponse>>>({
    url: `/v1/admin/expense-types/${unionId}`,
    method: "get",
    params: {},
    data: {}
  });

// 编辑费用类型
export const editExpenseTypeUsingPUT = (
  params: ExpenseTypeRequest,
  { unionId } = {
    unionId: string
  }
) =>
  axios.request<Result, AxiosResponse<Result>>({
    url: `/v1/admin/expense-types/${unionId}`,
    method: "put",
    params: {},
    data: params
  });
