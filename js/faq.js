function faq() {
    const dt = document.querySelectorAll("dt");
    const ativado = "ativa-faq";
    dt[0].nextElementSibling.classList.add(ativado);
  
    function ativaFaq() {
      this.nextElementSibling.classList.toggle("ativa-faq");
      this.classList.toggle('ativo')
    }
    dt.forEach((item) => {
      item.addEventListener("click", ativaFaq);
    });
  }
  faq();