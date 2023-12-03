const scrollToElement = (id: string) => {
  console.log(id);
  return document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default scrollToElement;
