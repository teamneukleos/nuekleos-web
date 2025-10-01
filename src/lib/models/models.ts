export interface IBase {
  id: string;
  active: boolean;
  created_at: string;
  updated_at?: string;
  deleted_at?: string;
}

export interface IValidationError {
  field: string;
  rule: string;
  message: string;
}

export interface IApiError extends Error {
  code: string;
  message: string;
}

export interface IApiResponse<T> {
  data?: T;
  validationErrors?: IValidationError[];
  error?: Error;
}

export interface IBatch extends IBase {
  name: string;
  description: string;
  product_id: string;
}

export interface IProduct extends IBase {
  name: string;
  description: string;
  batch: IBatch[];
}

export interface ITest extends IBase {
  name: string;
  description: string;
  lines: ILine[];
}

export interface ILine extends IBase {
  name: string;
  description: string;
  value?: number;
  test_id: string;
}

export interface IResult extends IBase {
  test_id: string;
  line_id: string;
  batch_id: string;
  value: string;
  description: string;
}
