
Here's how to update state-machine images like [process-asset.svg](process-asset.svg).

1. Install smcat tool. [Here](https://github.com/sverweij/state-machine-cat) are directions.
2. Edit SMCAT file, e.g. `emacs process-asset.smcat`
3. Generate SMCAT => SVG as follows: `smcat -d left-right process-asset.smcat`. 
4. View SVG, e.g. `eog  process-asset.smcat`
5. Repeat steps 2-4 until satisfied.


