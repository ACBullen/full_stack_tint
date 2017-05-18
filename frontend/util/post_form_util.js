export const closeForm = function (formName) {
  let that = this
  return (e) => {
  e.preventDefault();
  let form = document.getElementById(formName);
  form.style.display = 'none';
  that.setState({
    title: '',
    body: '',
    link_url: '',
    media_link: '',
    post_type: 'text'
  })
}}
