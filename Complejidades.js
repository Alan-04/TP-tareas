const VALOR_HORA = 50;

class ComplejidadMinima {
  calcularCostoBase(duracion) {
    return duracion * VALOR_HORA;
  }

  siguiente() {
    return new ComplejidadMedia();
  }
}

class ComplejidadMedia {
  calcularCostoBase(duracion) {
    return duracion * VALOR_HORA * 1.05;
  }

  siguiente() {
    return new ComplejidadMaxima();
  }
}

class ComplejidadMaxima {
  calcularCostoBase(duracion) {
    const costo = duracion * VALOR_HORA * 1.07;
    if (duracion > 10) {
      costo += 1000 * (duracion - 10);
    }
    return costo;
  }

  siguiente() {
    return new ComplejidadMinima();
  }
}

module.exports = {
  ComplejidadMinima,
  ComplejidadMedia,
  ComplejidadMaxima,
};
