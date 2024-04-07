function atualizaPreview(){
    marked.setOptions({
      breaks: !0
    });
    document.getElementById('preview').innerHTML = marked.parse(document.getElementById('editor').value)
  }
  
  atualizaPreview();