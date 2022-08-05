class VarGreekLetter:

    epsilon = "epsilon"
    theta = "theta"
    kappa = "kappa"
    pi = "pi"
    rho = "rho"
    sigma = "sigma"
    phi = "phi"

    def __iter__(self):
        for d in dir(self):
            if not d.startswith("_"):
                yield getattr(self, d)

    def __getattribute__(self, __name: str):
        o = super().__getattribute__(__name)
        if __name.startswith("_"):
            return o
        return "\\" + self._mod(o)

    def _mod(self, s):
        return "var" + s


class GreekLetter(VarGreekLetter):
    def _mod(self, s):
        return s

    alpha = "alpha"
    beta = "beta"
    gamma = "gamma"
    delta = "delta"

    zeta = "zeta"
    eta = "eta"

    iota = "iota"

    lambda_ = "lambda"
    mu = "mu"
    nu = "nu"
    xi = "xi"
    omikron = "omikron"

    tau = "tau"
    upsilon = "upsilon"

    chi = "chi"
    psi = "psi"
    omega = "omega"


class UCGreek(GreekLetter):
    def _mod(self, s):
        return s.title()


GREEK_TOKENS = [*GreekLetter(), *UCGreek(), *VarGreekLetter()]
