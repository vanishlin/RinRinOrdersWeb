document.addEventListener("DOMContentLoaded", () => {
    console.log("PW");
  });
  
  const correctPassword = "12345";
  
  function checkPassword() {
	
    const input = document.getElementById("passwordInput").value;
    const errorMsg = document.getElementById("errorMsg");
  
    if (input === correctPassword) {
      // 移除 locked 
      document.body.classList.remove("locked");
      document.getElementById("passwordModal").style.display = "none";
      document.getElementById("modalOverlay").style.display = "none";
    } else {
      
      errorMsg.textContent = "パスワードが正しくないです。";
    }
  };

  const restaurantMap = document.getElementById('restaurantMap');
        const tableForm = document.getElementById('tableForm');
        const tableNumberInput = document.getElementById('tableNumber');

        // 位置
        const tablePositions = [
            { id: 1, x: 1, y: 9 },
            { id: 2, x: 1, y: 20 },
            { id: 3, x: 1, y: 31 },
            { id: 4, x: 1, y: 42 },
            { id: 5, x: 1, y: 53 },
            { id: 6, x: 1, y: 64 },
            { id: 7, x: 1, y: 75 },
            { id: 8, x: 1, y: 86 },
            { id: 9, x: 13, y: 13 },
            { id: 10, x: 13, y: 35 },
            { id: 11, x: 13, y: 57 },
            { id: 12, x: 13, y: 80 },
            { id: 13, x: 32, y: 13 },
            { id: 14, x: 32, y: 35 },
            { id: 15, x: 32, y: 57 },
            { id: 16, x: 32, y: 80 },
            { id: 17, x: 52, y: 13 },
            { id: 18, x: 52, y: 35 },
            { id: 19, x: 52, y: 57 },
            { id: 20, x: 52, y: 80 },
            { id: 21, x: 70, y: 13 },
            { id: 22, x: 70, y: 35 },
            { id: 23, x: 70, y: 57 },
            { id: 24, x: 70, y: 80 },
            { id: 25, x: 90, y: 13 },
            { id: 26, x: 90, y: 35 },
            { id: 27, x: 90, y: 57 },
            { id: 28, x: 90, y: 80 },

            
        ];
		
//		const intListString = "<%=tablelist %>";
//		console.log("test",intListString);
		const unavailableTables=[2,3,5,13,14];
            tablePositions.forEach(table => {
            const tableButton = document.createElement('div');
            tableButton.className = 'table';
            tableButton.textContent = table.id;

            
            tableButton.style.left = table.x + '%';
            tableButton.style.top = table.y + '%';

            
            if (unavailableTables.includes(table.id)) {
                tableButton.classList.add('unavailable');
                tableButton.title = "このテーブルは使用できません";
            } else {
                
                tableButton.addEventListener('click', () => {
                    tableNumberInput.value = table.id;
                    tableForm.submit();
                });
            }

            restaurantMap.appendChild(tableButton);
        });


