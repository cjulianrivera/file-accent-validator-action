# file-accent-validator-action

This action read a text file and validate a regular expresion

## Inputs

### `path`

**Required** The path of file.

### `encodig`

**Optional** The encodig to open file, default is UTF-8

### `regex`

**Optional** The regular expresion to evaluate, default is [áéíóúÁÉÍÓÚñÑ]


## Outputs

### `valid`

The result of the regex validation.

## Usage

```yaml
steps:
  - name: Validate regex
    id: validate
    uses: cjulianrivera/file-accent-validator-action@v1.0
    with:
      path: ./file.txt
  - name: Echo result
    run: echo "${{ steps.validate.outputs.valid }}"
```

## License

MIT