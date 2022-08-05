import re
from pathlib import Path

import requests

splitter = re.compile(r"\{\{(.+?)\|.+?\:(.+)\}\}")


class ParserBase:
    def __init__(self, expr: str, out_root: Path) -> None:
        pass

    def to_svelte(self):
        return ""

    def get_ts_lines(self):
        return []


class WikiSummaryParser(ParserBase):

    key = "wiki"

    def __init__(self, expr: str, out_root: Path) -> None:
        self.inner_str, phrase = splitter.findall(expr)[0]
        self.hover_varname = f"wikiSummary{phrase}"
        out_path = out_root / self.rel_path
        if not out_path.exists():
            out_path.parent.mkdir(exist_ok=True, parents=True)
            api_link = f"https://en.wikipedia.org/api/rest_v1/page/summary/{phrase}"
            full_link = f"https://en.wikipedia.org/wiki/{phrase}"
            resp = requests.get(api_link).json()
            html = resp["extract_html"]
            title = resp["title"]
            # _tw = 'class="text-lg font-semibold"'
            full_html = f'<a href="{full_link}"><h3>{title}</h3></a>{html}'
            out_path.write_text(full_html)

    def to_svelte(self) -> str:
        return "<Hoverable hovertext={%s}>%s</Hoverable>" % (
            self.hover_varname,
            self.inner_str,
        )

    def get_ts_lines(self) -> list:
        # import ch1 from '$lib/assets/md/draft.md?raw';
        return [f"import {self.hover_varname} from './{self.rel_path}?raw';"]

    @property
    def rel_path(self):
        return f"{self.key}/{self.hover_varname}.html"


SPECIAL_PARSERS = {c.key: c for c in [WikiSummaryParser]}
