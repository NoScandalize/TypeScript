// 1 - iniciando projeto
// console.log("Express + TS!!!")

// 2 - init express
import express, { NextFunction, Request, Response } from "express";

const app = express();

// 3 - rota com POST
app.use(express.json());

// 11 - middleware para todas as rotas
function showPath(req: Request, res: Response, next: NextFunction) {
  console.log(req.path);
  next();
}

app.use(showPath);

app.get("/", (req, res) => {
  return res.send("Hello Express!");
});

// 3 - rota com POST
app.post("/api/product", (req, res) => {
  console.log(req.body);

  return res.json({ message: "Produto adicionado!" });
});

// 4- rota para todos os verbos
app.all("/api/product/check", (req, res) => {
  // req.method = VERBO HTTP

  if (req.method === "POST") {
    return res.json({ message: "Inseriu algum registro!" });
  } else if (req.method === "GET") {
    return res.json({ message: "Leu algum registro!" });
  } else {
    return res.json({ message: "Não foi possível realizar esta operação." });
  }
});

// 5 - interface do express
app.get("/api/interfaces", (req: Request, res: Response) => {
  return res.json({ message: "Utilizando as interfaces" });
});

// 6 - enviando json
app.get("/api/json", (req: Request, res: Response) => {
  return res.json({
    name: "Shirt",
    price: 30.0,
    color: "Blue",
    sizes: ["P", "M", "G"],
  });
});

// 7 - router parameters
app.get("/api/product/:id", (req: Request, res: Response) => {
  console.log(req.params);

  const id = req.params.id;

  if (id === "1") {
    const product = {
      id: 1,
      name: "Boné",
      price: 10,
    };

    return res.json(product);
  } else {
    return res.json({ message: "Produto não encontrado!" });
  }
});

// 8 - rotas complexas
app.get("/api/product/:id/review/:reviewId", (req: Request, res: Response) => {
  console.log(req.params);

  const productId = req.params.id;
  const reviewId = req.params.reviewId;

  return res.json({
    message: `Acessando a review ${reviewId} do produto ${productId}.`,
  });
});

// 9 - router handler
function getUser(req: Request, res: Response) {
  console.log(`Resgatando o usuário com id: ${req.params.id}.`);

  return res.json({ message: "O usuário foi encotnrado!" });
}

app.get("/api/user/:id", getUser);

// 10 - middleware
function checkUser(req: Request, res: Response, next: NextFunction) {
  if (req.params.id === "1") {
    console.log("Pode seguir!");
    next();
  } else {
    return res.json({ message: "Acesso Negado!" });
  }
}

app.get("/api/user/:id/access", checkUser, (req: Request, res: Response) => {
  return res.json({ message: "Bem vindo a área administrativa!" });
});

// 12 - req e res com generics
app.get(
  "/api/user/:id/details/:name",
  (
    req: Request<{ id: string; name: string }>,
    res: Response<{ status: boolean }>
  ) => {
    console.log(`ID: ${req.params.id}`)
    console.log(`Name: ${req.params.name}`)

    return res.json({ status: true })
  }
);

// 13 - tratando erros
app.get("/api/error", (req: Request, res: Response) => {

    try {
        // a nossa lógica
        throw new Error("404 Not Found!")

    } catch (error: any) {

        console.error(error.message);

        res.status(404).json({ message: error.message });

    }

})

app.listen(3000, () => {
  console.log("Aplicação iniciada com sucesso! Port 3000");
});
