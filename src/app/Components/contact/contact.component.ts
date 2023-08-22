import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxEaW0P3sxHlmxtUPEXoQFuVBdU8M1G9GAtN4qyhgIcmIt5pBPXMGeyHJ0mdYpSr0xv/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")

    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
          var msg;
          msg.innerHTML = "Message sent successfully"
          setTimeout(function () {
            msg.innerHTML = ""
          }, 5000)
          form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })
  }

}
