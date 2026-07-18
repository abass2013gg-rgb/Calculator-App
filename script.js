// الوصول إلى عنصر العرض
const display = document.querySelector('.input');

// إضافة الأرقام أو العلامات إلى الشاشة
function appendToDisplay(value) {
    if (display.innerText === '0'|| display.innerText === 'Error') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

// مسح الشاشة بالكامل
function clearDisplay() {
    display.innerText = '0';
}

// حذف آخر رقم أو علامة
function deleteLast() {
    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
    } else {
        display.innerText = '0';
    }
}

// إجراء العملية الحسابية
function calculate() {
    try {
        
        if (display.innerText.includes("Error")) {
            display.innerText = "0";
            return;
        }

        
        display.innerText = eval(display.innerText);
    } catch (error) {
        
        display.innerText = "Error";
    }
}
// إضافة مستمع للأحداث عند الضغط على لوحة المفاتيح
document.addEventListener('keydown', function(event) {
    const key = event.key;

    // دعم الأرقام والعمليات الحسابية
    if (/[0-9]/.test(key) || key === '+' || key === '-' || key === '*' || key === '/' || key === '.' || key === '%') {
        appendToDisplay(key);
    }
    // زر الإدخال (Enter) للعمليات الحسابية
    else if (key === 'Enter') {
        calculate();
    }
    // زر المسح (Backspace) للحذف
    else if (key === 'Backspace') {
        deleteLast();
    }
    // زر الهروب (Escape) للمسح الشامل
    else if (key === 'Escape') {
        clearDisplay();
    }
});