let myMap = new Map();

myMap.set("1", "string");
myMap.set(1, "number");
myMap.set(true, "boolean");

for (let key of myMap.keys()) {

    console.log(`Ключ — ${key}, значение — ${myMap.get(key)}`);

}