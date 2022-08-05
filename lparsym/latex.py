import json
import re
from dataclasses import dataclass
from pathlib import Path

from .rules import ACCENTS, CONSTANT_TOKENS, DEFAULT_DELIMITER, POSSIBLE_SYMBOLS
from .specials import ParserBase
from .tokenizer import Tokenizer


@dataclass
class Variable:
    name: str
    accent: str = ""
    wrap: str = ""
    subscript: str = ""
    superscript: str = ""
    is_callable: bool = False


def is_variable(token):
    # some can be dismissed, by a following thing, eg dx
    return (token in POSSIBLE_SYMBOLS) and (token not in CONSTANT_TOKENS)


class LatexExpressionParser(ParserBase):
    # get variables
    # find free / bound variables
    # function names
    # rely on other (earlier) parts of the text

    # not yet:
    #   - emojis / graphemes,
    #   - comments,
    #   - tex  functions with arguments
    # assume that $ are already removed

    # adding human interaction:
    #  - adding extra expressions, asking whether they are true or not

    def __init__(self, expr: str, out_root: Path) -> None:
        self.inner_expr = re.findall(r"\$+(.*?)\$+", expr)[0]
        self.tokens = Tokenizer(self.inner_expr).run()
        self._var_locs = [*self._var_base_locs()]
        self._merge_accents()
        self.variables = set([self.tokens[vl] for vl in self._var_locs])

    def to_svelte(self):
        math_rend = '{@html math("%s")}' % self.inner_expr.replace("\\", "\\\\")
        sym_list = json.dumps(list(self.variables))
        return "<span on:mouseenter={() => setActive(%s)}>%s</span>" % (
            sym_list,
            math_rend,
        )

    def _merge_accents(self):
        # TODO
        ACCENTS, DEFAULT_DELIMITER

    def _var_base_locs(self):
        for i, token in enumerate(self.tokens):
            if is_variable(token):
                yield i

    def __repr__(self) -> str:
        return f"vars: {self.variables}"
        return f"tokens: {self.tokens}\nvars:{self.variables}"
