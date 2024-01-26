const slugParser = (inputString: string) => {
  let words = inputString.split("-");

  let capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  let resultString = capitalizedWords
    .slice(0, capitalizedWords.length - 1)
    .join(" ");

  return resultString;
};

export default slugParser;
