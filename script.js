function showDepartment(department) {
    const contentArea = document.getElementById('content-area');
    const departmentResources = {
        electrical: `
            <h2>Electrical Engineering Resources</h2>
            <h3>Textbooks</h3>
            <ul>
                <li><a href="https://www.electronics-tutorials.ws/" target="_blank">Electronics Tutorials</a></li>
                <li><a href="https://www.allaboutcircuits.com/" target="_blank">All About Circuits</a></li>
                <!-- Add 18 more textbook links here -->
            </ul>
            <h3>Journals</h3>
            <ul>
                <li><a href="https://ieeexplore.ieee.org/" target="_blank">IEEE Xplore</a></li>
                <li><a href="https://www.sciencedirect.com/journal/electric-power-systems-research" target="_blank">Electric Power Systems Research</a></li>
                <!-- Add 18 more journal links here -->
            </ul>
            <h3>AI and Software Tools</h3>
            <ul>
                <li><a href="https://www.mathworks.com/products/matlab.html" target="_blank">MATLAB</a></li>
                <li><a href="https://www.autodesk.com/products/eagle/overview" target="_blank">Autodesk Eagle</a></li>
                <!-- Add 18 more AI and software tools links here -->
            </ul>
            <h3>Other Resources</h3>
            <ul>
                <li><a href="https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/" target="_blank">MIT OpenCourseWare</a></li>
                <li><a href="https://www.edx.org/course/circuits-and-electronics-1-basic-circuit-analysis" target="_blank">edX Circuits and Electronics</a></li>
                <!-- Add 18 more other resources links here -->
            </ul>
        `,
        mechanical: `
            <h2>Mechanical Engineering Resources</h2>
            <h3>Textbooks</h3>
            <ul>
                <li><a href="https://www.engineeringtoolbox.com/" target="_blank">Engineering Toolbox</a></li>
                <li><a href="https://mechanicalc.com/" target="_blank">Mechanicalc</a></li>
                <!-- Add 18 more textbook links here -->
            </ul>
            <h3>Journals</h3>
            <ul>
                <li><a href="https://www.sciencedirect.com/journal/mechanical-systems-and-signal-processing" target="_blank">Mechanical Systems and Signal Processing</a></li>
                <li><a href="https://www.journals.elsevier.com/mechanism-and-machine-theory" target="_blank">Mechanism and Machine Theory</a></li>
                <!-- Add 18 more journal links here -->
            </ul>
            <h3>AI and Software Tools</h3>
            <ul>
                <li><a href="https://www.autodesk.com/products/fusion-360/overview" target="_blank">Autodesk Fusion 360</a></li>
                <li><a href="https://www.solidworks.com/" target="_blank">SolidWorks</a></li>
                <!-- Add 18 more AI and software tools links here -->
            </ul>
            <h3>Other Resources</h3>
            <ul>
                <li><a href="https://ocw.mit.edu/courses/mechanical-engineering/" target="_blank">MIT OpenCourseWare Mechanical Engineering</a></li>
                <li><a href="https://www.khanacademy.org/science/physics" target="_blank">Khan Academy Physics</a></li>
                <!-- Add 18 more other resources links here -->
            </ul>
        `,
        civil: `
            <h2>Civil Engineering Resources</h2>
            <!-- Similar structure as above -->
        `,
        automotive: `
            <h2>Automotive Engineering Resources</h2>
            <!-- Similar structure as above -->
        `,
        water: `
            <h2>Water Resources & Environmental Engineering Resources</h2>
            <!-- Similar structure as above -->
        `,
        agricultural: `
            <h2>Agricultural Engineering Resources</h2>
            <!-- Similar structure as above -->
        `,
        mechatronics: `
            <h2>Mechatronics Engineering Resources</h2>
            <!-- Similar structure as above -->
        `
    };

    contentArea.innerHTML = departmentResources[department];
}
