var app = angular.module("my-app", ["ngSanitize"]);

// console.log(app);

app.controller("my-controller", ($scope) => {
  console.log($scope);
  $scope.appData = {
    formTitle: "Create account",
    imageSrc: "output.png",
    imageCaption: "Start turning your <br/> ideas into reality.",
    imageSubtitle: `Create a free account and get full access to all features for 30-days.<br/>
    No credit card needed. Trusted by Over 4,000 professionals.`,
  };
});
