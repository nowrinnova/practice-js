let array = ['meeting with rj group', 'finish all assingment'];

        function clk() {
            let inputElement = document.getElementById('input').value;
            document.getElementById('input').value = '';
            console.log(inputElement);
            array.push(inputElement);
            display();
        }


        function display() {
            let displayElement = document.getElementById('display');

            let newHtml = '';
            for (let i = 0; i < array.length; i++) {
                newHtml +=
                    `<div><span>${item}</span>
                        <button class='btn-delete' onclick="array.splice(${i}, 1);
                         display();">Delete</button>
                </div>
                `;
                displayElement.innerHTML = newHtml;
                // document.getElementById('display').innerText = array;
            }


        }