// دالة لإظهار أو إخفاء التفاصيل عند الضغط على مربع checkbox
function toggleDetailsWithImage(checkbox, detailsId) {
    const detailsRow = document.getElementById(detailsId); // العثور على الصف الذي يحتوي على التفاصيل
    if (checkbox.checked) {
        detailsRow.style.display = 'table-row'; // إظهار الصف عند التحديد
    } else {
        detailsRow.style.display = 'none'; // إخفاء الصف عند إلغاء التحديد
    }
}

// دالة لعرض النموذج عند الضغط على زر متابعة
function showForm() {
    document.getElementById('orderForm').style.display = 'block';
}

function validateArabicName(input) {
    // نمط التحقق: أحرف عربية فقط ومسافات
    const arabicPattern = /^[\u0621-\u064A\s]+$/;

    if (!arabicPattern.test(input.value)) {
        input.setCustomValidity("يرجى إدخال الاسم الكامل باستخدام الأحرف العربية فقط");
        input.reportValidity();
    } else {
        input.setCustomValidity(""); // الإدخال صحيح
    }
}
function validateDateFormat(input) {
    // السماح فقط بتنسيق dd_mm_yyyy
    const datePattern = /^\d{2}_\d{2}_\d{4}$/;

    if (!datePattern.test(input.value)) {
        input.setCustomValidity("يرجى إدخال التاريخ بالتنسيق dd_mm_yyyy");
        input.reportValidity();
    } else {
        input.setCustomValidity(""); // يعتبر الإدخال صالحًا
    }
}
function validateNationalID(input) {
    // النمط للتحقق من الرقم الوطني: 11 خانة والخانتان الأوليان ترمزان إلى المحافظات المسموح بها
    const nationalIDPattern = /^(01|02|03|04|05|06|07|08|09|10|11|12|13|14)\d{9}$/;

    if (!nationalIDPattern.test(input.value)) {
        input.setCustomValidity("يرجى إدخال الرقم الوطني بالتنسيق الصحيح (11 خانة، والمحافظة بين 01 و14)");
        input.reportValidity();
    } else {
        input.setCustomValidity(""); // إدخال صحيح
    }
}
function validateMobileNumber(input) {
    // نمط التحقق من رقم الموبايل: يبدأ بـ 09 ويحتوي على 10 خانات فقط
    const mobilePattern = /^09\d{8}$/;

    if (!mobilePattern.test(input.value)) {
        input.setCustomValidity("يرجى إدخال رقم الموبايل بشكل صحيح (يبدأ بـ 09 ويتكون من 10 خانات)");
        input.reportValidity();
    } else {
        input.setCustomValidity(""); // الإدخال صحيح
    }
}
function validateEmail(input) {
    // نمط التحقق من الإيميل
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(input.value)) {
        input.setCustomValidity("يرجى إدخال بريد إلكتروني صالح (example@domain.com)");
        input.reportValidity();
    } else {
        input.setCustomValidity(""); // الإدخال صحيح
    }
}


// دالة لمعالجة إرسال النموذج
function submitOrder(event) {
    event.preventDefault(); // منع السلوك الافتراضي للنموذج
    const selectedBook = document.querySelector('input[name="book"]:checked');
    if (!selectedBook) {
        alert('يرجى اختيار كتاب قبل الإرسال.');
        return;
    }
    const bookName = selectedBook.value;
    alert(`تم إرسال النموذج بنجاح! \nالكتاب المختار: ${bookName}`);
}
