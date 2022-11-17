var Ball = function (ballType) {
  ballType == undefined
    ? (this.ballType = 'regular')
    : (this.ballType = 'super');
};
