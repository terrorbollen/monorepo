#!/bin/bash

echo "Starting Ollama server..."
ollama serve &  # Start Ollama in the background

echo "Ollama is ready, creating the model..."

ollama create deepseek-r1:8b -f model_files/Modelfile
ollama run deepseek-r1:8b
