const Button = () => {
    const container = new Container();
    const button = new Button(
         new Graphics()
             .beginFill(0xFFFFFF)
             .drawRoundedRect(0, 0, 100, 50, 15)
    );
   
    button.onPress.connect(() => console.log('onPress'));
   
    container.addChild(button.view);
}

export default Button