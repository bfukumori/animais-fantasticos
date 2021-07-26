export default function initFetchBitcoin() {
  async function fetchBitcoin(url) {
    try {
      const bitcoinResponse = await fetch(url);
      const bitcoinJSON = await bitcoinResponse.json();
      const bitcoinBRL = await bitcoinJSON.BRL;
      const bitcoinPreco = document.querySelector('.btc-preco');
      bitcoinPreco.innerText = (1000 / bitcoinBRL.buy).toFixed('4');
    } catch (erro) {
      console.log(Error(erro));
    }
  }
  fetchBitcoin('https://blockchain.info/ticker');
}
