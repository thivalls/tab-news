function status(request, response) {
  response.status(200);
  response.json({ chave: "são carlos está com tempo chuvoso" });
}

export default status;
