#!/bin/bash

component_name=$1

echo "Creating $component_name"

cd src/components

mkdir $component_name
cd $component_name
touch $component_name.stories.tsx
touch $component_name.styled.ts
touch $component_name.test.tsx
touch $component_name.tsx
touch index.ts

echo "export { $component_name } from "./$component_name"" >> index.ts

cd ../..

echo "export * from \"./components/$component_name\"" >> index.ts

