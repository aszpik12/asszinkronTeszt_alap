import Statisztika from "../js/Statisztika.js";
QUnit.module(
  "statisztika ellenőrzés metódusainak tesztelése",
  function (hooks) {
    let statisztika;
    hooks.before(() => {
      statisztika = new Statisztika();
    });

    QUnit.test("nemszerintSzama létezik-e?", function (assert) {
      assert.ok(
        statisztika.nemszerintSzama,
        "létezik a nemszerintSzama metódus"
      );
    });

    QUnit.test("nemszerintSzama 1 nő", function (assert) {
      statisztika.lista = [
        { kor: 56, nem: "ffi", nev: "Béla" },
        {
          kor: 16,
          nem: "ffi",
          nev: "Jenő",
        },
        {
          kor: 33,
          nem: "nő",
          nev: "Rózsa",
        },
      ];
      assert.equal(statisztika.nemszerintSzama("nő"), 1);
    });

    QUnit.test("nemszerintSzama üres", function (assert) {
      statisztika.lista = [
        { kor: 56, nem: "", nev: "Béla" },
        {
          kor: 16,
          nem: "",
          nev: "Jenő",
        },
        {
          kor: 33,
          nem: "",
          nev: "Rózsa",
        },
      ];
      assert.equal(statisztika.nemszerintSzama("nő"), 0);
    });

    QUnit.test("nemszerintSzama csak férfi", function (assert) {
      statisztika.lista = [
        { kor: 56, nem: "ffi", nev: "Béla" },
        {
          kor: 16,
          nem: "ffi",
          nev: "Jenő",
        },
        {
          kor: 33,
          nem: "ffi",
          nev: "Rózsa",
        },
      ];
      assert.equal(statisztika.nemszerintSzama("ffi"), 3);
    });

    QUnit.test("nemszerintSzama csak kerék", function (assert) {
      statisztika.lista = [
        { kor: 56, nem: "kerék", nev: "Béla" },
        {
          kor: 16,
          nem: "kerék",
          nev: "Jenő",
        },
        {
          kor: 33,
          nem: "kerék",
          nev: "Rózsa",
        },
      ];
      assert.equal(statisztika.nemszerintSzama("kerék"), 3);
    });

    QUnit.test("nemszerintSzama nő van üres elem", function (assert) {
      statisztika.lista = [
        { kor: 56, nem: "", nev: "Béla" },
        {
          kor: 16,
          nem: "nő",
          nev: "Jenő",
        },
        {
          kor: 33,
          nem: "férfi",
          nev: "Rózsa",
        },
      ];
      assert.equal(statisztika.nemszerintSzama("nő"), 1);
    });

    QUnit.test("nemszerintSzama nincs nem", function (assert) {
      statisztika.lista = [
        { kor: 56, nev: "Béla" },
        {
          kor: 16,
          nev: "Jenő",
        },
        {
          kor: 33,
          nev: "Rózsa",
        },
      ];
      assert.equal(statisztika.nemszerintSzama("nő"), 0);
    });

    QUnit.test("atlagEletkor létezik-e?", function (assert) {
      assert.ok(statisztika.atlagEletkor, "létezik a atlagEletkor metódus");
    });

    QUnit.test("atlagEletkor nincs kor", function (assert) {
      statisztika.lista = [
        {
          nev: "Béla",
        },
        {
          nev: "Jenő",
        },
        {
          nev: "Rózsa",
        },
      ];
      assert.equal(statisztika.atlagEletkor(), NaN);
    });

    QUnit.test("atlagEletkor", function (assert) {
      statisztika.lista = [
        { kor: 39, nev: "Béla" },
        {
          kor: 53,
          nev: "Jenő",
        },
        {
          kor: 32,
          nev: "Rózsa",
        },
      ];
      assert.equal(statisztika.atlagEletkor(), 41.333333333333336);
    });

    QUnit.test("atlagEletkor van 0", function (assert) {
      statisztika.lista = [
        { kor: 0, nev: "Béla" },
        {
          kor: 0,
          nev: "Jenő",
        },
        {
          kor: 60,
          nev: "Rózsa",
        },
      ];
      assert.equal(statisztika.atlagEletkor(), 20);
    });

    QUnit.test("atlagEletkor csak 0", function (assert) {
      statisztika.lista = [
        { kor: 0, nev: "Béla" },
        {
          kor: 0,
          nev: "Jenő",
        },
        {
          kor: 0,
          nev: "Rózsa",
        },
      ];
      assert.equal(statisztika.atlagEletkor(), 0);
    });

    QUnit.test("nemszerintAtlagEletkora létezik-e?", function (assert) {
      assert.ok(
        statisztika.nemszerintAtlagEletkora,
        "létezik a atlagEletkor metódus"
      );
    });

    QUnit.test("nemszerintAtlagEletkora nincs nem", function (assert) {
      statisztika.lista = [
        { kor: 56, nev: "Béla" },
        {
          kor: 16,
          nev: "Jenő",
        },
        {
          kor: 33,
          nev: "Rózsa",
        },
      ];
      assert.equal(statisztika.nemszerintAtlagEletkora("nő"), NaN);
    });

    QUnit.test("nemszerintAtlagEletkora csak férfi", function (assert) {
      statisztika.lista = [
        { kor: 56, nem: "ffi", nev: "Béla" },
        {
          kor: 16,
          nem: "ffi",
          nev: "Jenő",
        },
        {
          kor: 33,
          nem: "ffi",
          nev: "Rózsa",
        },
      ];
      assert.equal(statisztika.nemszerintAtlagEletkora("ffi"), 35);
    });

    QUnit.test("nemszerintSzama csak nő", function (assert) {
      statisztika.lista = [
        { kor: 56, nem: "nő", nev: "Béla" },
        {
          kor: 16,
          nem: "nő",
          nev: "Jenő",
        },
        {
          kor: 33,
          nem: "nő",
          nev: "Rózsa",
        },
      ];
      assert.equal(statisztika.nemszerintAtlagEletkora("nő"), 35);
    });

    QUnit.test("nemszerintSzama csak egyéb", function (assert) {
      statisztika.lista = [
        { kor: 56, nem: "egyéb", nev: "Béla" },
        {
          kor: 16,
          nem: "egyéb",
          nev: "Jenő",
        },
        {
          kor: 33,
          nem: "egyéb",
          nev: "Rózsa",
        },
      ];
      assert.equal(statisztika.nemszerintAtlagEletkora("egyéb"), 35);
    });

    QUnit.test("nemszerintSzama van benne üres elem", function (assert) {
      statisztika.lista = [
        { kor: 56, nem: "", nev: "Béla" },
        {
          kor: NaN,
          nem: "ffi",
          nev: "Rózsa",
        },
        {
          kor: 33,
          nem: "ffi",
          nev: "Rózsa",
        },
      ];
      assert.equal(statisztika.nemszerintAtlagEletkora("ffi"), NaN);
    });
  }
);
