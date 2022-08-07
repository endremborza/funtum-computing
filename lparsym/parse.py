import random
import re
import string
from pathlib import Path
from typing import Dict

import typer
from jinja2 import Template
from markdown import markdown

from .latex import LatexExpressionParser
from .specials import SPECIAL_PARSERS, ParserBase

app = typer.Typer()

SVELTE_TEMPLATE = Path(__file__).parent / "SvelteComponent.jinja2"


FULL_PARSER_DICT = {
    r"\$+.*?\$+": LatexExpressionParser,
    **{r"\{\{.+?\|%s\:.+?\}\}" % k: v for k, v in SPECIAL_PARSERS.items()},
}


class MathMd:
    def __init__(self, fpath: Path, out_dir: Path) -> None:
        self.out_dir = out_dir
        self.raw_text = fpath.read_text()
        self._parser_dict: Dict[str, ParserBase] = dict(self._get_parser_items())

    def __repr__(self) -> str:
        return "\n".join(f"{k}: {v}" for k, v in self._parser_dict.items())

    def dump_svelte(self, fpath: Path):
        fpath.write_text(self._get_svelte())

    def _get_parser_items(self):
        for parse_pattern, parser in FULL_PARSER_DICT.items():
            for match_expr in re.findall(parse_pattern, self.raw_text):
                yield match_expr, parser(match_expr, self.out_dir)

    def _get_svelte(self):
        md_text = self.raw_text
        rep_map = {}
        for expr, parser_inst in self._parser_dict.items():
            str_key = "".join(random.choices(string.ascii_lowercase, k=30))
            md_text = md_text.replace(expr, str_key)
            rep_map[str_key] = parser_inst.to_svelte()

        math_html = markdown(md_text)
        for rand_str, sv_val in rep_map.items():
            math_html = math_html.replace(rand_str, sv_val)
        ts_script = "\n    ".join(self._iter_ts_lines())
        return Template(SVELTE_TEMPLATE.read_text()).render(
            ts_script=ts_script, main_html=math_html
        )

    def _get_variables(self):
        pass

    def _iter_ts_lines(self):
        for special in self._parser_dict.values():
            for line in special.get_ts_lines():
                yield line


@app.command()
def svelte(source_dir: str, target_dir):
    target_path = Path(target_dir)
    for fp in target_path.glob("*.svelte"):
        fp.unlink()
    for md_fp in Path(source_dir).glob("*.md"):
        parsed_file = MathMd(md_fp, target_path)
        parsed_file.dump_svelte(target_path / f"{md_fp.name.split('.')[0]}.svelte")


@app.command()
def test():
    _test_root = Path(__file__).parent / "test"
    parsed_file = MathMd(_test_root / "test-small.md", _test_root / "out")
    print(parsed_file)
