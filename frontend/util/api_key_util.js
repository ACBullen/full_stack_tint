export const fetchCloudinaryKeys = ()=> (
  $.ajax({
    method: 'GET',
    url: '/api/keys'
  })
);
