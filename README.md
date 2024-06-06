# PlateCounter

## Project Overview
Designed to meet the practical needs of gym-goers by quickly calculating the required weight plates for workouts. The app has been adopted by members in my local gym. React.js and Tailwind were used for dynamic interactions and responsive design while SVGs were used as custom components, enhancing visual elements and functionality.

## Key Features
- **Weight Input Options**: Users can enter the desired weight either by typing the specific value or by scrolling through each digit.
- **Reactive Visual Representation**: Upon entering the weight, the app displays a reactive visual representation of the weights as different gym plates.
- **Stats Section**: Specifies the number of each type of plate needed.
- **Three Display Options**:
  1. **With Barbell**: Displays the weights placed on either side of a 45-pound barbell, horizontally arranged.
  2. **Single Stack**: Shows all the weights stacked vertically in a single pile, without a barbell.
  3. **Double Stack**: Splits the weights into two vertical stacks, one on the left and one on the right, without a barbell.

## Technologies Used
- **HTML**
- **CSS**
- **JavaScript**
- **React.js**
- **Tailwind**
- **Figma**: Used to create custom SVGs

## Challenges Overcome
- **Data Structure Definition**: The originality of the project required constantly evolving data structures. By defining data as objects with multiple attributes, I was able to simplify data access and manipulation across various parts of the codebase.
- **Dynamic SVG Positioning**: Moving the positioning of SVGs based on the entered weight and screen size was challenging. I managed this by tracking these variables in state and creating functions to interpolate the necessary information into the JSX.
- **Reutilizing Concepts from Other Frameworks**: Adapting traditional concepts like reactivity, state management, and lifecycle hooks to new frameworks and technologies was a learning curve. Overcoming this enhanced my ability to solve problems using modern development practices.

## Overall Impact and Significance
PlateCounter has improved the gym experience for its users by solving a common, rather annoying, problem. Its aesthetic and satisfying design encourages users to return to the app repeatedly. For me personally, it built confidence in using new technologies and showcased my originality. Professionally, PlateCounter stands as a testament to my abilities and practical problem-solving skills.

## Contributing
Contributions to enhance the functionality, usability, or documentation of PlateCounter are welcome. To contribute:
1. Fork the repository
2. Create a new branch for your feature or fix
3. Commit your changes
4. Push your changes to your fork
5. Submit a pull request
