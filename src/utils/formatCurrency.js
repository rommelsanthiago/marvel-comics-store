function formatCurrency(currency) {
    const formattedCurrency = Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(currency);
  
    return formattedCurrency;
}
  
export { formatCurrency };
  