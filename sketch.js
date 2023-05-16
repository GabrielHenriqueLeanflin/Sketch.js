//Variáveis Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro/2;

let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;
let raqueteAltura = 85;
let raqueteComprimento =10;

//Variáveis Minha Raquete
let xRaquete = 8;
let yRaquete = 170;
let raioRaquete = raqueteAltura /2

//Raquete Oponente
let xRaqueteOponente = 580;
let yRaqueteOponente = 170;
let velocidadeYOponente = 5;

//colisaoBiblioteca
let colidiu = false;

//Pontos
let meusPontos = 0
let pontoDoOponente = 0

//som
let raquetada;
let ponto;
let trilha;

//Chance de errar

  
function preload(){
  trilha = loadSound("trilha.mp3")
  ponto = loadSound("ponto.mp3")
  raquetada = loadSound("raquetada.mp3")
}


function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete,yRaquete);
  movimentaRaquete();
  //verificaColisaoRaquete();
  colisaoMinhaRaqueteBiblioteca();
  placarMeusPontos();
  mostraRaquete(xRaqueteOponente,yRaqueteOponente);
  movimentoRaqueteOponente();
  colisaoRaqueteOponenteBiblioteca();
  placarMeusPontos();
  marcaPonto();
  bolinhaNaoFicaPresa();
  }

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro)
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
  if (xBolinha + raio > width ||xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(x,y){
  rect(x, y, raqueteComprimento, raqueteAltura)
}

function movimentaRaquete(){
  if(keyIsDown(UP_ARROW))
    yRaquete -= 5
  if(keyIsDown(DOWN_ARROW))
    yRaquete += 5
}

function verificaColisaoRaquete(){
  if( xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete + raqueteComprimento)
    velocidadeXBolinha *= -1;
}

function colisaoMinhaRaqueteBiblioteca (){
  colidiu = collideRectCircle(xRaquete, yRaquete, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
if (colidiu){
  velocidadeXBolinha *= -1
  raquetada.play();
}}

function movimentoRaqueteOponente() {
    velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
    yRaqueteOponente += velocidadeYOponente
}

function colisaoRaqueteOponenteBiblioteca (){
  colidiu = collideRectCircle(xRaqueteOponente, yRaqueteOponente, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
if (colidiu){
  velocidadeXBolinha *= -1
  raquetada.play();
}}

function placarMeusPontos() {
  stroke(255)
  textAlign(CENTER)
  textSize(16);
  fill(color(139,0,0))
  rect(150, 10, 40, 20)
   fill(255);
  text(meusPontos,170, 26)
  fill(color(139,0,0))
  rect(450, 10, 40, 20)
   fill(255);
  text(pontoDoOponente, 470, 26)
}

function marcaPonto() {
  if(xBolinha > 590){
    meusPontos += 1;
    ponto.play();
}     if(xBolinha < 10){
    pontoDoOponente += 1
    ponto.play();
      }
}

function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 23
    }
}



