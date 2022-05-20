// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h2 class="text-center">จำหน่ายอุปกรณ์ก่อสร้างที่หลากหลาย</h2>`;

const yearDiv = document.getElementById('year');
const d = new Date();
let year = d.getFullYear();
yearDiv.innerHTML = year;
