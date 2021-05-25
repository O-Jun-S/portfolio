let encode_in = document.getElementById("encode-in");
let encode_out = document.getElementById("encode-out");
let encode_btn = document.getElementById("encode-btn");

encode_btn.addEventListener("click", (e) => {
    let input = encode_in.value;
    console.log(input);
    let input_array = input.split('').map((v) => v.charCodeAt());
    let encoded_array = Encoding.convert(input_array, "SJIS", "UNICODE").map((v) => String.fromCharCode(v));
    let encoded_string = encoded_array.join(",");
    encode_out.value = encoded;
})
