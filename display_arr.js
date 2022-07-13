      // tạo hàm hiển thị mảng
      function display_arr(arr) {
        for (let i =0; i<= arr.length-1; i++) {
            document.write(arr[i] + " ");
            if (i % 10 == 9) {
              document.write("<br>");

            }
                     
        }
      }