class Admin{

    constructor(){

    this.generateSecretWord = createButton("Genrate Secret Word");
    this.message = createElement("h3");
    this.secretWord = createElement("h3");

    this.nameInput = createInput("").attribute("placeholder", "Name");
    this.greeting = createElement("h2");

    this.playButton = createButton("Play");
    }

  
    hideElements() {
        this.message.hide();
        this.nameInput.hide();
        this.playButton.hide();
      }

      setElementPosition() {
        this.generateSecretWord.position(width / 2.3, height / 2 - 100);
        this.message.position(width / 2.7, height / 2 - 250);
        this.secretWord.position(width / 2.3, height / 2 - 200);
        this.playButton.position(width/2,height / 2-150);
      }

      setElementStyle() {
        this.generateSecretWord.class("customButton");
        this.nameInput.class("customInput");
        this.playButton.class("customButton");
      }

      display() {
        this.setElementStyle();
        this.setElementPosition();
      }

}