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
            {kor: 56,
            nem: "ffi",
            nev: "Béla",
        },
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
            {kor: 56,
            nem: "",
            nev: "Béla",
        },
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
            {kor: 56,
            nem: "ffi",
            nev: "Béla",
        },
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




    QUnit.test("atlagEletkor létezik-e?", function (assert) {
      assert.ok(statisztika.atlagEletkor, "létezik a atlagEletkor metódus");
    });






    QUnit.test("nemszerintAtlagEletkora létezik-e?", function (assert) {
      assert.ok(
        statisztika.nemszerintAtlagEletkora,
        "létezik a atlagEletkor metódus"
      );
    });
  });
