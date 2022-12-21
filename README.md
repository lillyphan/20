# 20
# SDV Farm Planner

## Description

The SDV Farm Planner is a tool that will help SDV players plan their farms conveniently. Using a grid based drawing system, players can layout different buildings, crops, and tools, and keep track of the number of items on their farm without the help of a farm computer in the file.

### Executing program

The program is currently split into two parts.
1. To run and see the three main pages of the website, open the file named index.html, about.html, or inspo.html located in the folder public in a browser.
2. To run and see the planner, open planner.html in the folder path public/planner in a browser.

## Images
![](https://github.com/lillyphan/20/blob/main/planner.png?raw=true)
![](https://github.com/lillyphan/20/blob/main/web.png?raw=true)

## Desciption of files

public/index.html - This file contains HTML information about the struture and format of the main webpage. It interacts with public/css/style.css to style HTML elements and will contain the planner located in public/planner/planner.html in the future.

public/inspo.html - This file contains HTML information about the struture and format of the inspiration webpage. It interacts with public/css/style.css to style HTML elements.

public/about.html - This file contains HTML information about the struture and format of the about webpage. It interacts with public/css/style.css to style HTML elements.

public/css/style.css - This file contains the style sheet for the main three webpages. The style sheet provides information about the style of HTML elements.

public/planner/planner.html - This file contains HTML information about the struture and format of the planner. It interacts with 
public/planner/css/style.css to style HTML elements within the planner and will be integrated into public/index.html in the future.

public/planner/main.js - This file contains the script used to add functionality to the planner. It interacts with public/planner/planner.html to script buttons and the drawing board and public/planner/css/style.css to style HTML elements that it adds to public/planner/planner.html.

public/planner/css/style.css - This file contains the style sheet for the planner. The style sheet provides information about the style of HTML elements.

## Future implementations
1. Integrating the planner into public/index.html
2. Adding visual components (flowers, trees) to the paint feature
3. Save function
4. Add a count for colored tiles
5. Improve visual of webpages

## Authors

Lilly Phan - lphan24@kentdenver.org

## Version History

* 0.1
    * 12-20-22 Initial Release
