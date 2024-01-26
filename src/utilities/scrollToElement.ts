const scrollToElement = (id: string) => {
  return document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default scrollToElement;
