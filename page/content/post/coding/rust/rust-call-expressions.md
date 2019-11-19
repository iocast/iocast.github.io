---
translationKey: rust-oop
draft: false
title: Rust OOP?!...
author: iocast
date: 2019-10-26
description: Wer kennt das nicht. Man lernt gerade eine neue Programmiersprache und möchte alt bewärtes anwenden. Hmmm ... nur wie? Diesesmal versuche ich einige OOP Konzepte in Rust umzusetzen.
image: cover.png
categories:
- DevOps
tags:
- coding
- rust
---


Wer kennt das nicht. Man lernt gerade eine neue Programmiersprache und möchte alt bewärtes anwenden. Hmmm :confused: :angry: :rage: ... nur wie? Diesesmal versuche ich einige OOP Konzepte in Rust umzusetzen.


# Mehrdeutiger Funktionsaufruf ("Funktionen überladen")

```rust
trait Pretty {
    fn print(&self);
}

trait Ugly {
  fn print(&self);
}

struct Foo;
impl Pretty for Foo {
    fn print(&self) {}
}

struct Bar;
impl Pretty for Bar {
    fn print(&self) {}
}
impl Ugly for Bar{
    fn print(&self) {}
}

fn main() {
    let f = Foo;
    let b = Bar;

    // we can do this because we only have one item called `print` for `Foo`s
    f.print();
    // more explicit, and, in the case of `Foo`, not necessary
    Foo::print(&f);
    // if you're not into the whole brevity thing
    <Foo as Pretty>::print(&f);

    // b.print(); // Error: multiple 'print' found
    // Bar::print(&b); // Still an error: multiple `print` found

    // necessary because of in-scope items defining `print`
    <Bar as Pretty>::print(&b);
}
```
