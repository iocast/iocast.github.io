---
title: Rust
author: iocast
date: 2019-01-29
draft: false
description:
type: cheatsheet
group: ""
---


uninstall

```bash
$ rustup self uninstall

# Windows
C:\Users\<name>\.cargo
C:\Users\<name>\.rustup

# Linux
~/.cargo
~/.rustup
```

rust information

```bash
rustup show
```


update rust

```bash
$ rustup udpate
```

create new project

```bash
$ cargo new <project-name> [--bin|--lib]
```

`--bin`
: binary programm

`--lib`
: library


This also initializes a new `git` repository by default. If you don't want it to do that, pass `--vcs none`.


compile

```bash
$ rustc ../*.rs
```

```bash
$ cargo new test-test
```

```bash
$ cargo check
```

```bash
$ cargo build
```

```bash
$ cargo test
```

```bash
$ cargo clean
```

install creates from creates.io

```bash
$ cargo install <name>
```

nightly

rustup toolchain install nightly

Now Rust nightly is installed, but not activated. To test it out you can run a command from the nightly toolchain like
```bash
$ rustup run nightly rustc --version
```

But more likely you want to use it for a while. To switch to nightly globally, change the default with rustup default nightly:
```bash
$ rustup default nightly
```

# Building

release using `Cargo.toml`

```bash
$ cargo build [--release]
```


target tripple

```bash
$ rustc --print target-list | pr -tw100 --columns 3
```

```bash
$ cargo build --target x86_64-pc-windows-msvc
# msvc for windos. useses Visual C++ compiler
```


# Rust and WSL with Cargo

## cross-compile from Ubuntu to Windows x86_64

add a new target to the toolchain

```bash
$ rustup target add x86_64-pc-windows-gnu
```

install mingw-w64

```bash
$ sudo apt install mingw-w64
```

To tell Rust which linker to use, add the following to ~/.cargo/config:

[target.x86_64-pc-windows-gnu]
linker = "/usr/bin/x86_64-w64-mingw32-gcc"


or https://doc.rust-lang.org/cargo/reference/config.html#hierarchical-structure

cross-compile

```bash
$ cargo build --target x86_64-pc-windows-gnu --release && strip target/x86_64-pc-windows-gnu/release/chrome-bookmark-sync.exe
```


The rustup toolchain proxies can be instructed directly to use a specific toolchain, a convenience for developers who often test different toolchains. If the first argument to cargo, rustc or other tools in the toolchain begins with +, it will be interpreted as a rustup toolchain name, and that toolchain will be preferred, as in

cargo +beta test



# File size optimizatin


https://lifthrasiir.github.io/rustlog/why-is-a-rust-executable-large.html


