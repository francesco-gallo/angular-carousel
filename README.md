# AngularCarousel

[![Demo](https://j.gifs.com/K10QXl.gif)](https://www.youtube.com/watch?v=ek1j272iAmc)

This project showcases the usage of the simple-carousel library, loading random images from the internet.

## Usage

Launch `npm install`, then `ng serve`, and navigate to `http://localhost:4200`

# SimpleCarousel

This library implements a simple carousel that fetch data through a `(chunkSize: number) => Promise<CardModel[]>` method.

The widgets are reused; this means that the carousel won't create any widget that can't be viewed by the user, keeping it lightweight.

There are no external dependencies.
