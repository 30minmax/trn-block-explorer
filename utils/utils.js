export const formatAddress = (address, len = 6) => {
  return (
    address.substring(0, len) +
    " ... " +
    address.substring(address.length - len, address.length)
  );
};
