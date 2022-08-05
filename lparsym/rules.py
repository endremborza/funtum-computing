import string
from dataclasses import dataclass
from typing import List

from .greek import GREEK_TOKENS, GreekLetter

DEFAULT_DELIMITER = {
    "(": "(",
    ")": ")",
    "[": "\\lbrack",
    "]": "\\rbrack",
    "{": "\\lbrace",
    "}": "\\rbrace",
    "<": "\\langle",
    ">": "\\rangle",
    "|": "\\vert",
    "||": "\\Vert",
    "\\lceil": "\\lceil",
    "\\lfloor": "\\lfloor",
    "\\rceil": "\\rceil",
    "\\rfloor": "\\rfloor",
}


@dataclass
class _Base:
    name: str
    trigger: List[str]


@dataclass
class Elem(_Base):
    pass


@dataclass
class Accent(_Base):
    pass


@dataclass
class _Fix(_Base):
    precedence: int


class Infix(_Fix):
    pass


class Prefix(_Fix):
    pass


class Postfix(_Fix):
    pass


@dataclass
class MatchFix:
    name: str
    open_delimiter: str
    close_delimiter: str


# algebra
DEFINITIONS_ALGEBRA = [
    Infix(name="To", trigger=["\\to"], precedence=270)  # MathML rightwards arrow
]


# arithmetic

# TODO frac (even with partial derivate thing and nums like \frac34)
# \operatorname
# \ln \log \sqrt

# operatorname instances:
# gcd, lcm, sgn, round


DEFINITIONS_ARITHMETIC = [
    Accent("Tilde", "\\tilde"),
    MatchFix("Abs", "|", "|"),  # or determinant/cardinality/norm
    MatchFix("Ceil", "\\lceil", "\\rceil"),
    MatchFix("Floor", "\\lfloor", "\\rfloor"),
    Infix("Add", ["+"], 275),  # "associativity: both"
    Infix("Subtract", ["-"], 275),  # "associativity: both"
    Infix("PlusMinus", ["\\pm"], 270),  # "associativity: both"  \mp: minusplus
    Infix("Div", ["/", "\\div"], 275),
    Infix(
        "Multiply", ["\\times", "\\cdot", "*"], 390
    ),  # "associativity: both" - might mean different thing :o
    Prefix("Plus", ["+"], 275),
    Prefix("Negate", ["-"], 275),
    Postfix("Factorial", ["!"], 1000),
    Infix("Power", ["^"], 720),  # assoc: non
]


SELF_NAMED_CONSTS = ["infty"]

SELF_NAMED_SYMBOLS = []

ACCENTS = [
    "tilde",
    "hat",
    '"',
    "'",
    "~",
    "r",
    "v",
]


CONSTANT_TOKENS = [GreekLetter().pi, "e", "i"]
POSSIBLE_SYMBOLS = [*string.ascii_letters, *GREEK_TOKENS]
