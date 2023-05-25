import Aszinkron from "../js/asszinkron.js";

QUnit.test("adatbe metódus tesztje", (assert) => {
    const done = assert.async();

    const asszinkron = new Aszinkron();
    const vegpont = "../adatok.json";
    const callbackFuggvenyem = function(data){
        assert.deepEqual(data, {szemelyek: [
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
        ],
    });
    done();
    };

    asszinkron.adatBe(vegpont, callbackFuggvenyem);
})

