import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrl: './dashboard-card.component.scss'
})
export class DashboardCardComponent {
  ngOnInit(): void {
    this.typeText();
  }

  typeText(): void {
    const fixedText = "I'm "; // Fixed part of the sentence
    const texts = ["a Full-stack Developer", "an iOS Developer", "an Angular Developer", "a .NET Developer"]; // Animated parts
    const textElement = document.getElementById("typing-text");

    if (!textElement) return;

    const typeSingleText = (text: string, callback: Function) => {
      let charIndex = 0;
      textElement.innerHTML = `<span class="fixed">${fixedText}</span>`; // Add fixed text

      const typingInterval = setInterval(() => {
        const animatedSpan = textElement.querySelector('.animated');
        if (animatedSpan) {
          animatedSpan.textContent += text.charAt(charIndex);
        } else {
          const animatedElement = document.createElement('span');
          animatedElement.classList.add('animated');
          animatedElement.textContent = text.charAt(charIndex);
          textElement.appendChild(animatedElement);
        }

        charIndex++;
        if (charIndex === text.length) {
          clearInterval(typingInterval);
          setTimeout(callback, 1000);
        }
      }, 150);
    };

    const eraseText = (callback: Function) => {
      const animatedSpan = textElement.querySelector('.animated');
      if (!animatedSpan) return;

      let charIndex = animatedSpan.textContent!.length;

      const erasingInterval = setInterval(() => {
        animatedSpan.textContent = animatedSpan.textContent!.slice(0, --charIndex);

        if (charIndex === 0) {
          clearInterval(erasingInterval);
          callback();
        }
      }, 100);
    };

    const loopTyping = () => {
      let index = 0;

      const next = () => {
        typeSingleText(texts[index], () => {
          eraseText(() => {
            index = (index + 1) % texts.length; // Loop through texts
            next();
          });
        });
      };

      next();
    };

    loopTyping();
  }
}
