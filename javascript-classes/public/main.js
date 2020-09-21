function main() {
  /*
    class Dog
    {
      // Constructor
      public Dog()
      {

      }

      public string name { get; set; } = "Riley";

      public void bark()
      {
        Console.WriteLine("Bark");
      }

      public void eat()
      {
        Console.WriteLine("Mmmmm");
      }
    }

    class LoudDog : Dog
    {
      // 
    }

    var myDog = new Dog();
  */

  // function Dog() {
  //   const prototype = {
  //     name: 'Riley',

  //     bark: function () {
  //       console.log('bark')
  //     },

  //     eat: function () {
  //       console.log('mmmmmm')
  //     },
  //   }

  //   return prototype
  // }

  class Dog {
    dogName = 'Not Named'

    // Regardless of the name of the class
    // the constructor is always called
    // constructor
    constructor(newDogName) {
      console.log('Making a new dog: ' + newDogName)

      this.dogName = newDogName
    }

    bark() {
      console.log(`bark says ${this.dogName}`)
    }

    eat() {
      console.log('mmmm')
    }
  }

  class LoudDog extends Dog {
    bark() {
      console.log(`${this.dogName.toUpperCase(0)} SAYS BARK!!!!!`)
    }

    yell() {
      console.log('I am a loud dog, so I yell!')
    }
  }

  const riley = new Dog('Riley')
  const roxy = new Dog('Roxy')
  const rover = new Dog('Rover')
  const jack = new LoudDog('Jack')

  riley.bark()
  roxy.eat()
  rover.bark()
  jack.bark()
}

document.addEventListener('DOMContentLoaded', main)
