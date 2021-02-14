# SimpleCarousel

This library implements a simple carousel that fetch data through a `(chunkSize: number) => Promise<CardModel[]>` method.

The widgets are reused; this means that the carousel won't create any widget that can't be viewed by the user, keeping it lightweight.

There are no external dependencies.