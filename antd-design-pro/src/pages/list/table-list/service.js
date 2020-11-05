import request from 'umi-request';

export async function queryRule(params) {
  return request('/api/rule', {
    params,
  });
}
export async function queryRules(params, sorter, filter) {
  const newData = await request('/api/richedge/k8sdevice/list', {
    method: 'POST',
    data: {
      ...params,
      method: 'post'
    },
  });
  const {
    records
  } = newData.data;
  delete newData.data.records;
  return {
    ...newData.data,
    data: records,
    // success: true,
  }
}

export async function removeRule(params) {
  return request('/api/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'delete'
    },
  });
}
export async function addRule(params) {
  return request('/api/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'post'
    },
  });
}
export async function updateRule(params) {
  return request('/api/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'update'
    },
  });
}
