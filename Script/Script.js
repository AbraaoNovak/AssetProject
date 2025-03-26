// Recupera os valores do localStorage ou usa valores padrão
let highestBid = parseFloat(localStorage.getItem("highestBid")) || 100;
let highestBidder = localStorage.getItem("highestBidder") || "João Silva";

// Atualiza a página com o último lance
document.getElementById("highest-bid").textContent = `R$ ${highestBid.toFixed(2)}`;
document.getElementById("highest-bidder").textContent = highestBidder;

function submitBid() {
  const bidAmount = parseFloat(document.getElementById("bid-amount").value);
  const bidderName = document.getElementById("bidder-name").value;

  if (!bidAmount || !bidderName) {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  // Verifica se o lance é maior que o atual
  if (bidAmount > highestBid) {
    highestBid = bidAmount;
    highestBidder = bidderName;

    // Atualiza o conteúdo na página
    document.getElementById("highest-bid").textContent = `R$ ${highestBid.toFixed(2)}`;
    document.getElementById("highest-bidder").textContent = highestBidder;

    // Armazena os dados no localStorage
    localStorage.setItem("highestBid", highestBid);
    localStorage.setItem("highestBidder", highestBidder);

    alert(`Lance registrado! Novo maior lance: R$ ${highestBid}`);
  } else {
    alert("Seu lance deve ser maior que o maior lance atual!");
  }
}
