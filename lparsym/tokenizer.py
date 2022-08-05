import re
from dataclasses import dataclass

SPACE = "<space>"
GSTART = "<{>"
GEND = "<}>"


@dataclass
class Tokenizer:
    s: str
    i: int = 0

    def run(self):
        tokens = []
        while not self.done():
            tokens.append(self.next_token())

        return tokens

    def next_token(self):
        if self._char == " ":
            while self.roll() == " ":
                pass
            return SPACE

        simp = {"{": GSTART, "}": GEND}.get(self._char)
        if simp is not None:
            self.roll()
            return simp

        for base, ext in [(r"\\", r"[a-z|A-Z]"), (r"\d", r"\d|\.")]:
            o = self._build(base, ext)
            if o:
                return o
        o = self._char
        self.roll()
        return o

    def done(self):
        return self.i >= len(self.s)

    def peek(self):
        return self.s[self.i + 1]

    def roll(self):
        self.i += 1
        return self._char

    @property
    def _char(self):
        if self.i < len(self.s):
            return self.s[self.i]
        return ""

    def _build(self, base_re, ext_re):
        if re.findall(base_re, self._char):
            o = self._char
            while re.findall(ext_re, self.roll()):
                o += self._char
            return o
