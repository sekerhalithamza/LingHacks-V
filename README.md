# LingHacks V

# Installation

1. Clone the repository
2. Run `npm install` in the root directory
3. `pip install torch onnx transformers`
4. `python -m pip install optimum`
5. `pip install onnxruntime`

## Downloading WASM stuff

https://cdn.jsdelivr.net/npm/@xenova/transformers@2.3.0/dist/ort-wasm.wasm
https://cdn.jsdelivr.net/npm/@xenova/transformers@2.3.0/dist/ort-wasm-simd.wasm
https://cdn.jsdelivr.net/npm/@xenova/transformers@2.3.0/dist/ort-wasm-simd-threaded.wasm
https://cdn.jsdelivr.net/npm/@xenova/transformers@2.3.0/dist/ort-wasm-threaded.wasm
Download these and then put them in `public/wasm/`

## Downloading the Model

models/SamLowe/roberta-base-go_emotions
├── config.json
├── tokenizer.json
├── tokenizer_config.json

Go to https://huggingface.co/SamLowe/roberta-base-go_emotions/tree/main and download the files above and put them in the folder `public/models/SamLowe/roberta-base-go_emotions` (create the folder if it doesn't exist)

## Convert Model to ONNX Runtime

example usage for SamLowe/roberta-base-go_emotions:
`python -m convert_model_to_onnx --quantize --model_id SamLowe/roberta-base-go_emotions`
files will be saved to ./models/
also dont forget to do: python -m pip install optimum
After this runs put the `model.onnx` and `model_quantized.onnx` files in `models/SamLowe/roberta-base-go_emotions` into `public/models/SamLowe/roberta-base-go_emotions/onnx`

## Running the extension

1. Run `npm run build` in the root directory
2. Go to `chrome://extensions/` in your browser
3. Enable developer mode
4. Click "Load unpacked"
5. Select the `build` folder in the root directory
6. Go to any website and click the extension icon in the top right corner of your browser
7. :tada:
