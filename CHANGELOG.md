# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-01-15

### Added
- Initial release of Awesome llms.txt
- CLI validator tool (`llms-txt-validator`) with full spec validation
- Registry of compliant sites with automated checking
- GitHub Action for weekly registry updates
- Complete documentation in README
- Contributing guidelines
- MIT License

### Examples
- `valid-llms.txt` — Spec-compliant example
- `invalid-llms.txt` — Testing example
- `fasthtml-llms.txt` — Real-world example from FastHTML

### Registry
- Initial sites: Zod, FastHTML, Answer.AI, nbdev

### Tools
- Validator supports local files and remote URLs
- Validator provides detailed error messages and warnings
- Registry checker auto-updates site statuses

## [Unreleased]

### Planned
- VS Code extension for validation on save
- GitHub Action for automatic validation on PR
- Website with searchable registry
- Badge service for llms.txt status