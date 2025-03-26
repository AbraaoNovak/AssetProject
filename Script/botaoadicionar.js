let highestBid = 100;
    let highestBidder = "João Silva";

    function submitBid() {
      const bidAmount = parseFloat(document.getElementById("bid-amount").value);
      const bidderName = document.getElementById("bidder-name").value;

      if (!bidAmount || !bidderName) {
        alert("Por favor, preencha todos os campos!");
        return;
      }

      if (bidAmount > highestBid) {
        highestBid = bidAmount;
        highestBidder = bidderName;

        document.getElementById("highest-bid").textContent = `R$ ${highestBid.toFixed(2)}`;
        document.getElementById("highest-bidder").textContent = highestBidder;
        alert(`Lance registrado! Novo maior lance: R$ ${highestBid}`);
      } else {
        alert("Seu lance deve ser maior que o maior lance atual!");
      }
    }
