function showDepartment(department) {
    const contentArea = document.getElementById('content-area');
    const departmentResources = {
        electrical: `
            <h2>Electrical Engineering Resources</h2>
            <h3>Textbooks</h3>
            <ul>
                <li><a href="https://www.electronics-tutorials.ws/" target="_blank">Electronics Tutorials</a></li>
                <li><a href="https://www.allaboutcircuits.com/" target="_blank">All About Circuits</a></li>
                <li><a href="https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/" target="_blank">MIT OpenCourseWare Electrical Engineering</a></li>
                <li><a href="https://www.electrical4u.com/" target="_blank">Electrical4U</a></li>
                <li><a href="https://www.electrical-engineering-portal.com/" target="_blank">EEP - Electrical Engineering Portal</a></li>
                <li><a href="https://www.edx.org/learn/electrical-engineering" target="_blank">edX Electrical Engineering</a></li>
                <li><a href="https://nptel.ac.in/courses/108/" target="_blank">NPTEL Electrical Engineering</a></li>
                <li><a href="https://www.coursera.org/courses?query=electrical%20engineering" target="_blank">Coursera Electrical Engineering</a></li>
                <li><a href="https://www.khanacademy.org/science/electrical-engineering" target="_blank">Khan Academy Electrical Engineering</a></li>
                <li><a href="https://www.circuitstoday.com/" target="_blank">Circuits Today</a></li>
                <li><a href="https://www.electricaleasy.com/" target="_blank">Electrical Easy</a></li>
                <li><a href="https://www.electricaltechnology.org/" target="_blank">Electrical Technology</a></li>
                <li><a href="https://www.electricalengineering.xyz/" target="_blank">Electrical Engineering XYZ</a></li>
                <li><a href="https://learn.sparkfun.com/tutorials" target="_blank">SparkFun Tutorials</a></li>
                <li><a href="https://www.engineersedge.com/electrical_books.htm" target="_blank">Engineers Edge Electrical Books</a></li>
                <li><a href="https://www.electricalschool.org/" target="_blank">Electrical School</a></li>
                <li><a href="https://www.electrical-contractor.net/" target="_blank">Electrical Contractor Network</a></li>
                <li><a href="https://learnengineering.org/electrical-engineering-books/" target="_blank">Learn Engineering Books</a></li>
                <li><a href="https://ecmweb.com/" target="_blank">EC&M - Electrical Construction & Maintenance</a></li>
                <li><a href="https://www.electronicsforu.com/" target="_blank">Electronics For You</a></li>
            </ul>
            <h3>Journals</h3>
            <ul>
                <li><a href="https://ieeexplore.ieee.org/" target="_blank">IEEE Xplore</a></li>
                <li><a href="https://www.sciencedirect.com/journal/electric-power-systems-research" target="_blank">Electric Power Systems Research</a></li>
                <li><a href="https://www.tandfonline.com/toc/uemp20/current" target="_blank">Electric Power Components and Systems</a></li>
                <li><a href="https://www.springer.com/journal/428" target="_blank">Electrical Engineering - Springer</a></li>
                <li><a href="https://journals.sagepub.com/home/eea" target="_blank">Journal of Electrical Engineering</a></li>
                <li><a href="https://www.mdpi.com/journal/electronics" target="_blank">Electronics Journal - MDPI</a></li>
                <li><a href="https://www.elsevier.com/journals/electric-power-systems-research/0378-7796" target="_blank">Electric Power Systems Research - Elsevier</a></li>
                <li><a href="https://www.sciencedirect.com/journal/international-journal-of-electrical-power-and-energy-systems" target="_blank">IJEPES - International Journal of Electrical Power & Energy Systems</a></li>
                <li><a href="https://www.journals.elsevier.com/international-journal-of-electrical-power-and-energy-systems" target="_blank">International Journal of Electrical Power & Energy Systems</a></li>
                <li><a href="https://www.journals.elsevier.com/electrical-power-and-energy-systems" target="_blank">Electrical Power and Energy Systems</a></li>
                <li><a href="https://www.sciencedirect.com/journal/energy-research-and-social-science" target="_blank">Energy Research & Social Science</a></li>
                <li><a href="https://journals.sagepub.com/home/ete" target="_blank">Journal of Energy Engineering</a></li>
                <li><a href="https://www.elsevier.com/journals/electrical-and-computer-engineering/0267-3649" target="_blank">Electrical and Computer Engineering - Elsevier</a></li>
                <li><a href="https://www.mdpi.com/journal/energies" target="_blank">Energies Journal - MDPI</a></li>
                <li><a href="https://www.sciencedirect.com/journal/energy-reports" target="_blank">Energy Reports</a></li>
                <li><a href="https://www.sciencedirect.com/journal/electric-power-and-energy-systems" target="_blank">Electric Power and Energy Systems - Elsevier</a></li>
                <li><a href="https://www.journals.elsevier.com/journal-of-electrical-engineering" target="_blank">Journal of Electrical Engineering - Elsevier</a></li>
                <li><a href="https://www.journals.elsevier.com/journal-of-energy-storage" target="_blank">Journal of Energy Storage - Elsevier</a></li>
                <li><a href="https://www.taylorandfrancis.com/journals" target="_blank">Taylor & Francis Electrical Engineering Journals</a></li>
                <li><a href="https://journals.sagepub.com/home/eea" target="_blank">SAGE Electrical Engineering Journals</a></li>
            </ul>
            <h3>AI and Software Tools</h3>
            <ul>
                <li><a href="https://www.mathworks.com/products/matlab.html" target="_blank">MATLAB</a></li>
                <li><a href="https://www.autodesk.com/products/eagle/overview" target="_blank">Autodesk Eagle</a></li>
                <li><a href="https://www.arduino.cc/" target="_blank">Arduino</a></li>
                <li><a href="https://www.altium.com/" target="_blank">Altium Designer</a></li>
                <li><a href="https://www.solidworks.com/" target="_blank">SolidWorks Electrical</a></li>
                <li><a href="https://www.autodesk.com/products/autocad-electrical/overview" target="_blank">AutoCAD Electrical</a></li>
                <li><a href="https://www.labcenter.com/" target="_blank">Proteus</a></li>
                <li><a href="https://www.ptc.com/en/products/cad/creo" target="_blank">PTC Creo</a></li>
                <li><a href="https://www.xilinx.com/" target="_blank">Xilinx</a></li>
                <li><a href="https://www.ti.com/tool/TINA-TI" target="_blank">TINA-TI</a></li>
                <li><a href="https://www.keysight.com/us/en/products/software/pathwave-design-software.html" target="_blank">PathWave Design Software</a></li>
                <li><a href="https://www.ni.com/en-us/shop/labview.html" target="_blank">NI LabVIEW</a></li>
                <li><a href="https://www.festo.com/us/en/e/technical-education-solutions/catp-it-virtual-commissioning-tools-id_124458/" target="_blank">Festo CATP</a></li>
                <li><a href="https://www.cadence.com/" target="_blank">Cadence</a></li>
                <li><a href="https://www.circuitlab.com/" target="_blank">CircuitLab</a></li>
                <li><a href="https://www.qelectrotech.org/" target="_blank">QElectroTech</a></li>
                <li><a href="https://www.digikey.com/en/resources/design-tools/design-tools" target="_blank">Digi-Key Design Tools</a></li>
                <li><a href="https://www.scilab.org/" target="_blank">Scilab</a></li>
                <li><a href="https://www.fritzing.org/" target="_blank">Fritzing</a></li>
                <li><a href="https://www.analog.com/en/design-center/interactive-design-tools/adisimpe.html" target="_blank">ADI SimPE</a></li>
            </ul>
            <h3>Other Resources</h3>
            <ul>
                <li><a href="https://www.engineeringtoolbox.com/" target="_blank">Engineering Toolbox</a></li>
                <li><a href="https://www.electronicdesign.com/" target="_blank">Electronic Design</a></li>
                <li><a href="https://www.electronicproducts.com/" target="_blank">Electronic Products</a></li>
                <li><a href="https://www.engineersedge.com/" target="_blank">Engineers Edge</a></li>
                <li><a href="https://www.techbriefs.com/" target="_blank">Tech Briefs</a></li>
                <li><a href="https://www.digikey.com/en/resources" target="_blank">Digi-Key Resources</a></li>
                <li><a href="https://www.mouser.com/technical-resources/" target="_blank">Mouser Technical Resources</a></li>
                <li><a href="https://www.eetimes.com/" target="_blank">EE Times</a></li>
                <li><a href="https://www.i-micronews.com/" target="_blank">Micronews</a></li>
                <li><a href="https://www.semiconductors.org/" target="_blank">Semiconductor Industry Association</a></li>
                <li><a href="https://www.electronicspecifier.com/" target="_blank">Electronic Specifier</a></li>
                <li><a href="https://www.analog.com/en/technical-articles.html" target="_blank">Analog Devices Technical Articles</a></li>
                <li><a href="https://www.renesas.com/us/en/design-support" target="_blank">Renesas Design Support</a></li>
                <li><a href="https://www.microchip.com/design-centers" target="_blank">Microchip Design Centers</a></li>
                <li><a href="https://www.ti.com/design-resources.html" target="_blank">Texas Instruments Design Resources</a></li>
                <li><a href="https://www.mit.edu/" target="_blank">MIT Resources</a></li>
                <li><a href="https://www.w3schools.com/" target="_blank">W3Schools</a></li>
                <li><a href="https://developer.mozilla.org/en-US/" target="_blank">MDN Web Docs</a></li>
                <li><a href="https://www.khanacademy.org/" target="_blank">Khan Academy</a></li>
                <li><a href="https://www.coursera.org/" target="_blank">Coursera</a></li>
            </ul>
        `,
        mechanical: `
            <h2>Mechanical Engineering Resources</h2>
            <h3>Textbooks</h3>
            <ul>
                <li><a href="https://ocw.mit.edu/courses/mechanical-engineering/" target="_blank">MIT OpenCourseWare Mechanical Engineering</a></li>
                <li><a href="https://www.coursera.org/courses?query=mechanical%20engineering" target="_blank">Coursera Mechanical Engineering</a></li>
                <li><a href="https://nptel.ac.in/courses/112" target="_blank">NPTEL Mechanical Engineering</a></li>
                <li><a href="https://www.engineersedge.com/mechanical_books.htm" target="_blank">Engineers Edge Mechanical Books</a></li>
                <li><a href="https://www.edx.org/learn/mechanical-engineering" target="_blank">edX Mechanical Engineering</a></li>
                <li><a href="https://www.khanacademy.org/science/mechanical-engineering" target="_blank">Khan Academy Mechanical Engineering</a></li>
                <li><a href="https://www.springer.com/gp/mechanical-engineering" target="_blank">Springer Mechanical Engineering</a></li>
                <li><a href="https://www.elsevier.com/books/mechanical-engineering" target="_blank">Elsevier Mechanical Engineering Books</a></li>
                <li><a href="https://www.mechanicalengineeringblog.com/" target="_blank">Mechanical Engineering Blog</a></li>
                <li><a href="https://www.mechatronics.mechanicalengineeringblog.com/" target="_blank">Mechatronics Blog</a></li>
                <li><a href="https://www.learnengineering.org/" target="_blank">Learn Engineering</a></li>
                <li><a href="https://www.ebooks.com/en-us/subject/mechanical-engineering/" target="_blank">eBooks.com Mechanical Engineering</a></li>
                <li><a href="https://mechanicalbase.com/" target="_blank">Mechanical Base</a></li>
                <li><a href="https://www.iit.edu/research/mechanical-engineering" target="_blank">IIT Mechanical Engineering</a></li>
                <li><a href="https://www.mechanicallibrary.com/" target="_blank">Mechanical Library</a></li>
                <li><a href="https://www.cambridge.org/gb/academic/subjects/engineering/mechanical-engineering" target="_blank">Cambridge University Press Mechanical Engineering</a></li>
                <li><a href="https://www.pearson.com/us/higher-education/discipline/mechanical-engineering.html" target="_blank">Pearson Mechanical Engineering</a></li>
                <li><a href="https://www.amazon.com/s?k=mechanical+engineering&i=stripbooks" target="_blank">Amazon Mechanical Engineering Books</a></li>
                <li><a href="https://www.routledge.com/Mechanical-Engineering" target="_blank">Routledge Mechanical Engineering</a></li>
                <li><a href="https://www.taylorandfrancis.com/engineering/mechanical-engineering" target="_blank">Taylor & Francis Mechanical Engineering</a></li>
            </ul>
            <h3>Journals</h3>
            <ul>
                <li><a href="https://www.asme.org/publications/journals" target="_blank">ASME Journals</a></li>
                <li><a href="https://www.springer.com/journal/10439" target="_blank">International Journal of Mechanical Engineering and Robotics Research</a></li>
                <li><a href="https://journals.sagepub.com/home/pip" target="_blank">Proceedings of the Institution of Mechanical Engineers</a></li>
                <li><a href="https://www.elsevier.com/journals/mechanism-and-machine-theory/0094-114X" target="_blank">Mechanism and Machine Theory</a></li>
                <li><a href="https://journals.sagepub.com/home/ade" target="_blank">Advanced Engineering Design</a></li>
                <li><a href="https://www.taylorandfrancis.com/journals/mechanical-engineering" target="_blank">Taylor & Francis Mechanical Engineering Journals</a></li>
                <li><a href="https://www.journals.elsevier.com/engineering-fracture-mechanics" target="_blank">Engineering Fracture Mechanics</a></li>
                <li><a href="https://www.mdpi.com/journal/applsci" target="_blank">Applied Sciences Journal - MDPI</a></li>
                <li><a href="https://www.sciencedirect.com/journal/journal-of-sound-and-vibration" target="_blank">Journal of Sound and Vibration</a></li>
                <li><a href="https://www.sciencedirect.com/journal/mechanical-systems-and-signal-processing" target="_blank">Mechanical Systems and Signal Processing</a></li>
                <li><a href="https://www.journals.elsevier.com/mechanism-and-machine-theory" target="_blank">Mechanism and Machine Theory - Elsevier</a></li>
                <li><a href="https://www.springer.com/journal/11831" target="_blank">Advanced Manufacturing</a></li>
                <li><a href="https://www.springer.com/journal/10439" target="_blank">Journal of Mechanical Science and Technology</a></li>
                <li><a href="https://journals.sagepub.com/home/jpe" target="_blank">Journal of Power and Energy</a></li>
                <li><a href="https://www.springer.com/journal/12046" target="_blank">Mechatronics - Springer</a></li>
                <li><a href="https://journals.sagepub.com/home/jmp" target="_blank">Journal of Manufacturing Processes</a></li>
                <li><a href="https://journals.sagepub.com/home/jme" target="_blank">Journal of Mechanical Engineering Science</a></li>
                <li><a href="https://journals.sagepub.com/home/jec" target="_blank">Journal of Engineering Computations</a></li>
                <li><a href="https://journals.sagepub.com/home/jem" target="_blank">Journal of Engineering Materials and Technology</a></li>
                <li><a href="https://journals.sagepub.com/home/jee" target="_blank">Journal of Environmental Engineering</a></li>
            </ul>
            <h3>AI and Software Tools</h3>
            <ul>
                <li><a href="https://www.mathworks.com/products/matlab.html" target="_blank">MATLAB</a></li>
                <li><a href="https://www.autodesk.com/products/fusion-360/overview" target="_blank">Fusion 360</a></li>
                <li><a href="https://www.solidworks.com/" target="_blank">SolidWorks</a></li>
                <li><a href="https://www.autodesk.com/products/inventor/overview" target="_blank">Autodesk Inventor</a></li>
                <li><a href="https://www.ptc.com/en/products/cad/creo" target="_blank">PTC Creo</a></li>
                <li><a href="https://www.ansys.com/" target="_blank">ANSYS</a></li>
                <li><a href="https://www.comsol.com/" target="_blank">COMSOL Multiphysics</a></li>
                <li><a href="https://www.siemens.com/software/tecnomatix" target="_blank">Tecnomatix</a></li>
                <li><a href="https://www.autodesk.com/products/navisworks/overview" target="_blank">Navisworks</a></li>
                <li><a href="https://www.ptc.com/en/products/cad/creo" target="_blank">PTC Creo</a></li>
                <li><a href="https://www.openfoam.com/" target="_blank">OpenFOAM</a></li>
                <li><a href="https://www.adams.com/" target="_blank">Adams</a></li>
                <li><a href="https://www.solidworks.com/product/solidworks-simulation" target="_blank">SolidWorks Simulation</a></li>
                <li><a href="https://www.mscsoftware.com/product/msc-nastran" target="_blank">MSC Nastran</a></li>
                <li><a href="https://www.simscale.com/" target="_blank">SimScale</a></li>
                <li><a href="https://www.abaqus.com/" target="_blank">Abaqus</a></li>
                <li><a href="https://www.altair.com/products/" target="_blank">Altair HyperWorks</a></li>
                <li><a href="https://www.sierrasoftware.com/products/solid-mechanics-software/" target="_blank">Sierra Solid Mechanics Software</a></li>
                <li><a href="https://www.thermofluids.co.uk/" target="_blank">ThermoFluids</a></li>
                <li><a href="https://www.autodesk.com/products/powermill/overview" target="_blank">PowerMill</a></li>
            </ul>
            <h3>Other Resources</h3>
            <ul>
                <li><a href="https://www.engineeringtoolbox.com/" target="_blank">Engineering Toolbox</a></li>
                <li><a href="https://www.mechanicaldesignforum.com/" target="_blank">Mechanical Design Forum</a></li>
                <li><a href="https://www.efunda.com/" target="_blank">eFunda</a></li>
                <li><a href="https://www.techbriefs.com/" target="_blank">Tech Briefs</a></li>
                <li><a href="https://www.thermopedia.com/" target="_blank">Thermopedia</a></li>
                <li><a href="https://www.mechengworld.com/" target="_blank">Mechanical Engineering World</a></li>
                <li><a href="https://www.grabcad.com/" target="_blank">GrabCAD</a></li>
                <li><a href="https://www.machinedesign.com/" target="_blank">Machine Design</a></li>
                <li><a href="https://www.engineersedge.com/" target="_blank">Engineers Edge</a></li>
                <li><a href="https://www.mechatronics.mechanicalengineeringblog.com/" target="_blank">Mechatronics Blog</a></li>
                <li><a href="https://www.robots.com/" target="_blank">Robots.com</a></li>
                <li><a href="https://www.motioncontrolonline.org/" target="_blank">Motion Control Online</a></li>
                <li><a href="https://www.machinetools.com/" target="_blank">Machine Tools</a></li>
                <li><a href="https://www.techbriefs.com/" target="_blank">Tech Briefs</a></li>
                <li><a href="https://www.thermopedia.com/" target="_blank">Thermopedia</a></li>
                <li><a href="https://www.grabcad.com/" target="_blank">GrabCAD</a></li>
                <li><a href="https://www.engineersedge.com/" target="_blank">Engineers Edge</a></li>
                <li><a href="https://www.mechanicaldesignforum.com/" target="_blank">Mechanical Design Forum</a></li>
                <li><a href="https://www.efunda.com/" target="_blank">eFunda</a></li>
            </ul>
        `,
       civil: `
        <h2>Civil Engineering Resources</h2>
        <h3>Textbooks</h3>
        <ul>
            <li><a href="https://ocw.mit.edu/courses/civil-and-environmental-engineering/" target="_blank">MIT OpenCourseWare Civil Engineering</a></li>
            <li><a href="https://nptel.ac.in/courses/105" target="_blank">NPTEL Civil Engineering</a></li>
            <li><a href="https://www.coursera.org/courses?query=civil%20engineering" target="_blank">Coursera Civil Engineering</a></li>
            <li><a href="https://www.edx.org/learn/civil-engineering" target="_blank">edX Civil Engineering</a></li>
            <li><a href="https://www.engineersedge.com/civil_books.htm" target="_blank">Engineers Edge Civil Books</a></li>
            <li><a href="https://www.springer.com/gp/civil-engineering" target="_blank">Springer Civil Engineering</a></li>
            <li><a href="https://www.elsevier.com/books/civil-engineering" target="_blank">Elsevier Civil Engineering Books</a></li>
            <li><a href="https://www.learnengineering.org/civil/" target="_blank">Learn Engineering Civil</a></li>
            <li><a href="https://www.ebooks.com/en-us/subject/civil-engineering/" target="_blank">eBooks.com Civil Engineering</a></li>
            <li><a href="https://www.civilengineeringforum.me/" target="_blank">Civil Engineering Forum</a></li>
            <li><a href="https://www.cambridge.org/gb/academic/subjects/engineering/civil-engineering" target="_blank">Cambridge University Press Civil Engineering</a></li>
            <li><a href="https://www.amazon.com/s?k=civil+engineering&i=stripbooks" target="_blank">Amazon Civil Engineering Books</a></li>
            <li><a href="https://www.routledge.com/Civil-Engineering" target="_blank">Routledge Civil Engineering</a></li>
            <li><a href="https://www.taylorandfrancis.com/engineering/civil-engineering" target="_blank">Taylor & Francis Civil Engineering</a></li>
            <li><a href="https://www.structuraldesign.io/" target="_blank">Structural Design Books</a></li>
            <li><a href="https://www.icivilengineer.com/" target="_blank">iCivilEngineer</a></li>
            <li><a href="https://theconstructor.org/" target="_blank">The Constructor</a></li>
            <li><a href="https://www.engineeringtoolbox.com/" target="_blank">Engineering Toolbox</a></li>
            <li><a href="https://www.wiley.com/en-us/Civil+Engineering-c-ENGI00P" target="_blank">Wiley Civil Engineering</a></li>
            <li><a href="https://www.pearson.com/us/higher-education/discipline/civil-engineering.html" target="_blank">Pearson Civil Engineering</a></li>
        </ul>
        <h3>Journals</h3>
        <ul>
            <li><a href="https://ascelibrary.org/journal/jcemd4" target="_blank">ASCE Journal of Civil Engineering</a></li>
            <li><a href="https://www.springer.com/journal/11709" target="_blank">International Journal of Civil Engineering</a></li>
            <li><a href="https://www.elsevier.com/journals/journal-of-structural-engineering/0733-9445" target="_blank">Journal of Structural Engineering</a></li>
            <li><a href="https://journals.sagepub.com/home/pip" target="_blank">Proceedings of the Institution of Civil Engineers</a></li>
            <li><a href="https://www.icevirtuallibrary.com/" target="_blank">ICE Virtual Library</a></li>
            <li><a href="https://www.mdpi.com/journal/buildings" target="_blank">Buildings - MDPI</a></li>
            <li><a href="https://www.elsevier.com/journals/cement-and-concrete-research/0008-8846" target="_blank">Cement and Concrete Research</a></li>
            <li><a href="https://www.journals.elsevier.com/structural-safety" target="_blank">Structural Safety</a></li>
            <li><a href="https://journals.sagepub.com/home/ade" target="_blank">Advanced Engineering Design</a></li>
            <li><a href="https://www.journals.elsevier.com/construction-and-building-materials" target="_blank">Construction and Building Materials</a></li>
            <li><a href="https://www.springer.com/journal/12205" target="_blank">Journal of Civil Structural Health Monitoring</a></li>
            <li><a href="https://www.springer.com/journal/11709" target="_blank">International Journal of Civil Engineering</a></li>
            <li><a href="https://ascelibrary.org/journal/jrcea4" target="_blank">Journal of Risk and Uncertainty in Engineering Systems</a></li>
            <li><a href="https://www.sciencedirect.com/journal/engineering" target="_blank">Engineering Journal</a></li>
            <li><a href="https://www.elsevier.com/journals/soil-dynamics-and-earthquake-engineering/0267-7261" target="_blank">Soil Dynamics and Earthquake Engineering</a></li>
            <li><a href="https://journals.sagepub.com/home/jen" target="_blank">Journal of Engineering</a></li>
            <li><a href="https://journals.sagepub.com/home/str" target="_blank">Journal of Structural Engineering</a></li>
            <li><a href="https://journals.sagepub.com/home/ipe" target="_blank">Journal of Performance of Constructed Facilities</a></li>
            <li><a href="https://journals.sagepub.com/home/aci" target="_blank">ACI Materials Journal</a></li>
            <li><a href="https://journals.sagepub.com/home/adr" target="_blank">Journal of Advanced Concrete Technology</a></li>
        </ul>
        <h3>AI and Software Tools</h3>
        <ul>
            <li><a href="https://www.autodesk.com/products/revit/overview" target="_blank">Autodesk Revit</a></li>
            <li><a href="https://www.bentley.com/software/staadpro/" target="_blank">STAAD.Pro</a></li>
            <li><a href="https://www.autodesk.com/products/autocad/overview" target="_blank">AutoCAD</a></li>
            <li><a href="https://www.solidworks.com/" target="_blank">SolidWorks</a></li>
            <li><a href="https://www.csiamerica.com/products/sap2000" target="_blank">SAP2000</a></li>
            <li><a href="https://www.siemens.com/software/nastran" target="_blank">Siemens Nastran</a></li>
            <li><a href="https://www.tekla.com/products/tekla-structural-designer" target="_blank">Tekla Structural Designer</a></li>
            <li><a href="https://www.3ds.com/products-services/simulia/products/abaqus/" target="_blank">ABAQUS</a></li>
            <li><a href="https://www.mathworks.com/products/matlab.html" target="_blank">MATLAB</a></li>
            <li><a href="https://www.opensees.net/" target="_blank">OpenSees</a></li>
            <li><a href="https://www.midassoft.com/eng/product/Gen/overview" target="_blank">Midas Gen</a></li>
            <li><a href="https://www.comsol.com/" target="_blank">COMSOL Multiphysics</a></li>
            <li><a href="https://www.altair.com/hyperworks/" target="_blank">Altair HyperWorks</a></li>
            <li><a href="https://www.abaqus.com/" target="_blank">Abaqus</a></li>
            <li><a href="https://www.adams.com/" target="_blank">Adams</a></li>
            <li><a href="https://www.autodesk.com/products/fusion-360/overview" target="_blank">Fusion 360</a></li>
            <li><a href="https://www.ptc.com/en/products/cad/creo" target="_blank">PTC Creo</a></li>
            <li><a href="https://www.ansys.com/" target="_blank">ANSYS</a></li>
            <li><a href="https://www.openfoam.com/" target="_blank">OpenFOAM</a></li>
            <li><a href="https://www.siemens.com/software/tecnomatix" target="_blank">Tecnomatix</a></li>
        </ul>
        <h3>Other Resources</h3>
        <ul>
            <li><a href="https://www.theconstructor.org/" target="_blank">The Constructor</a></li>
            <li><a href="https://www.engineersedge.com/" target="_blank">Engineers Edge</a></li>
            <li><a href="https://www.civildigital.com/" target="_blank">CivilDigital</a></li>
            <li><a href="https://www.ice.org.uk/" target="_blank">Institution of Civil Engineers</a></li>
            <li><a href="https://www.civilengineeringx.com/" target="_blank">CivilEngineeringX</a></li>
            <li><a href="https://theconstructor.org/" target="_blank">The Constructor</a></li>
            <li><a href="https://www.structuralwiki.com/" target="_blank">Structural Wiki</a></li>
            <li><a href="https://www.civilax.com/" target="_blank">Civilax</a></li>
            <li><a href="https://www.engineeringtoolbox.com/" target="_blank">Engineering Toolbox</a></li>
            <li><a href="https://www.civilengineeringforum.me/" target="_blank">Civil Engineering Forum</a></li>
            <li><a href="https://www.icivilengineer.com/" target="_blank">iCivilEngineer</a></li>
            <li><a href="https://www.grabcad.com/" target="_blank">GrabCAD</a></li>
            <li><a href="https://www.machinedesign.com/" target="_blank">Machine Design</a></li>
            <li><a href="https://www.engineersedge.com/" target="_blank">Engineers Edge</a></li>
            <li><a href="https://www.learncivilengineering.com/" target="_blank">Learn Civil Engineering</a></li>
            <li><a href="https://www.civiltoday.com/" target="_blank">Civil Today</a></li>
            <li><a href="https://www.concrete.org/" target="_blank">American Concrete Institute</a></li>
            <li><a href="https://www.structuraldesign.io/" target="_blank">Structural Design</a></li>
            <li><a href="https://www.aecweb.com/" target="_blank">AEC Web</a></li>
            <li><a href="https://www.civilengineeringbible.com/" target="_blank">Civil Engineering Bible</a></li>
        </ul>
    `,
    automotive: `
        <h2>Automotive Engineering Resources</h2>
        <h3>Textbooks</h3>
        <ul>
            <li><a href="https://ocw.mit.edu/courses/mechanical-engineering/" target="_blank">MIT OpenCourseWare Automotive Engineering</a></li>
            <li><a href="https://nptel.ac.in/courses/107" target="_blank">NPTEL Automotive Engineering</a></li>
            <li><a href="https://www.coursera.org/courses?query=automotive%20engineering" target="_blank">Coursera Automotive Engineering</a></li>
            <li><a href="https://www.edx.org/learn/automotive-engineering" target="_blank">edX Automotive Engineering</a></li>
            <li><a href="https://www.engineersedge.com/automotive_books.htm" target="_blank">Engineers Edge Automotive Books</a></li>
            <li><a href="https://www.springer.com/gp/automotive-engineering" target="_blank">Springer Automotive Engineering</a></li>
            <li><a href="https://www.elsevier.com/books/automotive-engineering" target="_blank">Elsevier Automotive Engineering Books</a></li>
            <li><a href="https://www.learnengineering.org/automotive/" target="_blank">Learn Engineering Automotive</a></li>
            <li><a href="https://www.ebooks.com/en-us/subject/automotive-engineering/" target="_blank">eBooks.com Automotive Engineering</a></li>
            <li><a href="https://www.careerride.com/automotive-books.aspx" target="_blank">Career Ride Automotive Books</a></li>
            <li><a href="https://www.cambridge.org/gb/academic/subjects/engineering/automotive-engineering" target="_blank">Cambridge University Press Automotive Engineering</a></li>
            <li><a href="https://www.amazon.com/s?k=automotive+engineering&i=stripbooks" target="_blank">Amazon Automotive Engineering Books</a></li>
            <li><a href="https://www.routledge.com/Automotive-Engineering" target="_blank">Routledge Automotive Engineering</a></li>
            <li><a href="https://www.taylorandfrancis.com/engineering/automotive-engineering" target="_blank">Taylor & Francis Automotive Engineering</a></li>
            <li><a href="https://www.sae.org/publications/books/automotive" target="_blank">SAE Automotive Engineering Books</a></li>
            <li><a href="https://www.icivilengineer.com/" target="_blank">Automotive Engineering Forum</a></li>
            <li><a href="https://theconstructor.org/" target="_blank">The Constructor</a></li>
            <li><a href="https://www.engineeringtoolbox.com/" target="_blank">Engineering Toolbox</a></li>
            <li><a href="https://www.wiley.com/en-us/Automotive+Engineering-c-ENGI00P" target="_blank">Wiley Automotive Engineering</a></li>
            <li><a href="https://www.pearson.com/us/higher-education/discipline/automotive-engineering.html" target="_blank">Pearson Automotive Engineering</a></li>
        </ul>
        <h3>Journals</h3>
        <ul>
            <li><a href="https://www.sae.org/publications/technical-papers/automotive" target="_blank">SAE International Automotive Papers</a></li>
            <li><a href="https://www.springer.com/journal/42417" target="_blank">Automotive Innovation Journal</a></li>
            <li><a href="https://www.elsevier.com/journals/journal-of-automotive-safety-and-energy/2529-0066" target="_blank">Journal of Automotive Safety and Energy</a></li>
            <li><a href="https://journals.sagepub.com/home/jat" target="_blank">Journal of Automotive Technology</a></li>
            <li><a href="https://www.sae.org/publications/magazines/automotive" target="_blank">SAE Automotive Engineering Magazine</a></li>
            <li><a href="https://www.journals.elsevier.com/international-journal-of-automotive-technology-and-management" target="_blank">International Journal of Automotive Technology and Management</a></li>
            <li><a href="https://www.mdpi.com/journal/vehicles" target="_blank">Vehicles - MDPI</a></li>
            <li><a href="https://www.journals.elsevier.com/transportation-research-part-d-transport-and-environment" target="_blank">Transportation Research Part D: Transport and Environment</a></li>
            <li><a href="https://www.elsevier.com/journals/progress-in-energy-and-combustion-science/0360-1285" target="_blank">Progress in Energy and Combustion Science</a></li>
            <li><a href="https://www.springer.com/journal/42154" target="_blank">Automotive and Engine Technology Journal</a></li>
            <li><a href="https://ascelibrary.org/journal/jaeerx" target="_blank">ASCE Journal of Automotive Engineering</a></li>
            <li><a href="https://journals.sagepub.com/home/ija" target="_blank">International Journal of Automotive and Mechanical Engineering</a></li>
            <li><a href="https://journals.sagepub.com/home/jtv" target="_blank">Journal of Transport Vehicle Technology</a></li>
            <li><a href="https://journals.sagepub.com/home/jat" target="_blank">Journal of Automobile Engineering</a></li>
            <li><a href="https://journals.sagepub.com/home/jht" target="_blank">Journal of Highway and Transportation Research and Development</a></li>
            <li><a href="https://www.journals.elsevier.com/engineering" target="_blank">Engineering Journal</a></li>
            <li><a href="https://journals.sagepub.com/home/jit" target="_blank">Journal of Intelligent Transportation Systems</a></li>
            <li><a href="https://journals.sagepub.com/home/tra" target="_blank">Journal of the Transportation Research Board</a></li>
            <li><a href="https://www.springer.com/journal/42417" target="_blank">Journal of Automotive Engineering</a></li>
            <li><a href="https://www.mdpi.com/journal/vehicles" target="_blank">Journal of Vehicles</a></li>
        </ul>
        <h3>AI and Software Tools</h3>
        <ul>
            <li><a href="https://www.autodesk.com/products/autocad/overview" target="_blank">AutoCAD</a></li>
            <li><a href="https://www.solidworks.com/" target="_blank">SolidWorks</a></li>
            <li><a href="https://www.matlab.com/" target="_blank">MATLAB</a></li>
            <li><a href="https://www.siemens.com/software/nastran" target="_blank">Siemens Nastran</a></li>
            <li><a href="https://www.3ds.com/products-services/simulia/products/abaqus/" target="_blank">ABAQUS</a></li>
            <li><a href="https://www.comsol.com/" target="_blank">COMSOL Multiphysics</a></li>
            <li><a href="https://www.ansys.com/" target="_blank">ANSYS</a></li>
            <li><a href="https://www.ptc.com/en/products/cad/creo" target="_blank">PTC Creo</a></li>
            <li><a href="https://www.siemens.com/software/tecnomatix" target="_blank">Tecnomatix</a></li>
            <li><a href="https://www.bentley.com/software/microstation/" target="_blank">Bentley MicroStation</a></li>
            <li><a href="https://www.mscsoftware.com/product/adams" target="_blank">MSC Adams</a></li>
            <li><a href="https://www.siemens.com/software/tecnomatix" target="_blank">Siemens Tecnomatix</a></li>
            <li><a href="https://www.autodesk.com/products/maya/overview" target="_blank">Autodesk Maya</a></li>
            <li><a href="https://www.3ds.com/products-services/catia/" target="_blank">CATIA</a></li>
            <li><a href="https://www.mathworks.com/products/matlab.html" target="_blank">MathWorks MATLAB</a></li>
            <li><a href="https://www.ptc.com/en/products/cad/creo" target="_blank">PTC Creo</a></li>
            <li><a href="https://www.ansys.com/" target="_blank">ANSYS</a></li>
            <li><a href="https://www.comsol.com/" target="_blank">COMSOL</a></li>
            <li><a href="https://www.simulia.com/products/abaqus/" target="_blank">SIMULIA Abaqus</a></li>
            <li><a href="https://www.autodesk.com/products/inventor/overview" target="_blank">Autodesk Inventor</a></li>
        </ul>
        <h3>Other Resources</h3>
        <ul>
            <li><a href="https://www.autodesk.com/products/autocad/overview" target="_blank">AutoCAD</a></li>
            <li><a href="https://www.solidworks.com/" target="_blank">SolidWorks</a></li>
            <li><a href="https://www.matlab.com/" target="_blank">MATLAB</a></li>
            <li><a href="https://www.siemens.com/software/nastran" target="_blank">Siemens Nastran</a></li>
            <li><a href="https://www.comsol.com/" target="_blank">COMSOL Multiphysics</a></li>
            <li><a href="https://www.bentley.com/software/microstation/" target="_blank">Bentley MicroStation</a></li>
            <li><a href="https://www.mscsoftware.com/product/adams" target="_blank">MSC Adams</a></li>
            <li><a href="https://www.ptc.com/en/products/cad/creo" target="_blank">PTC Creo</a></li>
            <li><a href="https://www.3ds.com/products-services/simulia/products/abaqus/" target="_blank">ABAQUS</a></li>
            <li><a href="https://www.mathworks.com/products/matlab.html" target="_blank">MathWorks MATLAB</a></li>
            <li><a href="https://www.ansys.com/" target="_blank">ANSYS</a></li>
            <li><a href="https://www.simulia.com/products/abaqus/" target="_blank">SIMULIA Abaqus</a></li>
            <li><a href="https://www.comsol.com/" target="_blank">COMSOL</a></li>
            <li><a href="https://www.autodesk.com/products/maya/overview" target="_blank">Autodesk Maya</a></li>
            <li><a href="https://www.3ds.com/products-services/catia/" target="_blank">CATIA</a></li>
            <li><a href="https://www.autodesk.com/products/fusion-360/overview" target="_blank">Autodesk Fusion 360</a></li>
            <li><a href="https://www.bentley.com/software/microstation/" target="_blank">Bentley MicroStation</a></li>
            <li><a href="https://www.3ds.com/products-services/simulia/products/abaqus/" target="_blank">SIMULIA Abaqus</a></li>
            <li><a href="https://www.ansys.com/" target="_blank">ANSYS</a></li>
            <li><a href="https://www.simulia.com/products/abaqus/" target="_blank">SIMULIA Abaqus</a></li>
        </ul>
    `,
    water: `
        <h2>Water Resources and Environmental Engineering Resources</h2>
        <h3>Textbooks</h3>
        <ul>
            <li><a href="https://ocw.mit.edu/courses/civil-and-environmental-engineering/" target="_blank">MIT OpenCourseWare Environmental Engineering</a></li>
            <li><a href="https://nptel.ac.in/courses/105" target="_blank">NPTEL Environmental Engineering</a></li>
            <li><a href="https://www.coursera.org/courses?query=environmental%20engineering" target="_blank">Coursera Environmental Engineering</a></li>
            <li><a href="https://www.edx.org/learn/environmental-engineering" target="_blank">edX Environmental Engineering</a></li>
            <li><a href="https://www.engineersedge.com/environmental_engineering.htm" target="_blank">Engineers Edge Environmental Engineering Books</a></li>
            <li><a href="https://www.springer.com/gp/environmental-engineering" target="_blank">Springer Environmental Engineering</a></li>
            <li><a href="https://www.elsevier.com/books/environmental-engineering" target="_blank">Elsevier Environmental Engineering Books</a></li>
            <li><a href="https://www.learnengineering.org/environmental-engineering/" target="_blank">Learn Engineering Environmental Engineering</a></li>
            <li><a href="https://www.ebooks.com/en-us/subject/environmental-engineering/" target="_blank">eBooks.com Environmental Engineering</a></li>
            <li><a href="https://www.careerride.com/environmental-engineering-books.aspx" target="_blank">Career Ride Environmental Engineering Books</a></li>
            <li><a href="https://www.cambridge.org/gb/academic/subjects/engineering/environmental-engineering" target="_blank">Cambridge University Press Environmental Engineering</a></li>
            <li><a href="https://www.amazon.com/s?k=environmental+engineering&i=stripbooks" target="_blank">Amazon Environmental Engineering Books</a></li>
            <li><a href="https://www.routledge.com/Environmental-Engineering" target="_blank">Routledge Environmental Engineering</a></li>
            <li><a href="https://www.taylorandfrancis.com/engineering/environmental-engineering" target="_blank">Taylor & Francis Environmental Engineering</a></li>
            <li><a href="https://www.sae.org/publications/books/environmental-engineering" target="_blank">SAE Environmental Engineering Books</a></li>
            <li><a href="https://theconstructor.org/" target="_blank">The Constructor</a></li>
            <li><a href="https://www.engineeringtoolbox.com/" target="_blank">Engineering Toolbox</a></li>
            <li><a href="https://www.wiley.com/en-us/Environmental+Engineering-c-ENGI00P" target="_blank">Wiley Environmental Engineering</a></li>
            <li><a href="https://www.pearson.com/us/higher-education/discipline/environmental-engineering.html" target="_blank">Pearson Environmental Engineering</a></li>
        </ul>
        <h3>Journals</h3>
        <ul>
            <li><a href="https://www.journals.elsevier.com/environmental-research" target="_blank">Environmental Research Journal</a></li>
            <li><a href="https://www.springer.com/journal/10653" target="_blank">Environmental Geology Journal</a></li>
            <li><a href="https://www.mdpi.com/journal/environments" target="_blank">Environments - MDPI</a></li>
            <li><a href="https://journals.sagepub.com/home/eet" target="_blank">Environmental Engineering Science Journal</a></li>
            <li><a href="https://www.journals.elsevier.com/journal-of-environmental-chemical-engineering" target="_blank">Journal of Environmental Chemical Engineering</a></li>
            <li><a href="https://www.sciencedirect.com/journal/journal-of-environmental-management" target="_blank">Journal of Environmental Management</a></li>
            <li><a href="https://www.journals.elsevier.com/advances-in-water-resources" target="_blank">Advances in Water Resources</a></li>
            <li><a href="https://ascelibrary.org/journal/jweaee" target="_blank">ASCE Journal of Water Resources Planning and Management</a></li>
            <li><a href="https://journals.sagepub.com/home/eet" target="_blank">Environmental Engineering Science</a></li>
            <li><a href="https://www.journals.elsevier.com/water-research" target="_blank">Water Research Journal</a></li>
            <li><a href="https://www.sciencedirect.com/journal/journal-of-environmental-sciences" target="_blank">Journal of Environmental Sciences</a></li>
            <li><a href="https://www.journals.elsevier.com/science-of-the-total-environment" target="_blank">Science of The Total Environment</a></li>
            <li><a href="https://www.springer.com/journal/11270" target="_blank">Environmental Processes Journal</a></li>
            <li><a href="https://www.journals.elsevier.com/journal-of-hydrology" target="_blank">Journal of Hydrology</a></li>
            <li><a href="https://www.journals.elsevier.com/journal-of-environmental-radioactivity" target="_blank">Journal of Environmental Radioactivity</a></li>
            <li><a href="https://journals.sagepub.com/home/jew" target="_blank">Journal of Environmental Waste Management</a></li>
            <li><a href="https://journals.sagepub.com/home/wem" target="_blank">Waste Management and Research Journal</a></li>
            <li><a href="https://journals.sagepub.com/home/jew" target="_blank">Journal of Environmental and Waste Management</a></li>
            <li><a href="https://journals.sagepub.com/home/jwe" target="_blank">Journal of Water and Environment</a></li>
            <li><a href="https://www.journals.elsevier.com/water-research" target="_blank">Water Research Journal</a></li>
        </ul>
        <h3>AI and Software Tools</h3>
        <ul>
            <li><a href="https://www.epa.gov/waterdata" target="_blank">EPA Water Data Tools</a></li>
            <li><a href="https://www.hydroshare.org/" target="_blank">HydroShare</a></li>
            <li><a href="https://www.openflows.com/" target="_blank">OpenFlows Water Software</a></li>
            <li><a href="https://www.epanet.org/" target="_blank">EPANET</a></li>
            <li><a href="https://www.hec.usace.army.mil/software/hec-ras/" target="_blank">HEC-RAS</a></li>
            <li><a href="https://www.swmm.com/" target="_blank">SWMM Storm Water Management</a></li>
            <li><a href="https://www.openfoam.com/" target="_blank">OpenFOAM</a></li>
            <li><a href="https://www.solidworks.com/" target="_blank">SolidWorks</a></li>
            <li><a href="https://www.autodesk.com/products/autocad/overview" target="_blank">AutoCAD</a></li>
            <li><a href="https://www.matlab.com/" target="_blank">MATLAB</a></li>
            <li><a href="https://www.comsol.com/" target="_blank">COMSOL Multiphysics</a></li>
            <li><a href="https://www.ansys.com/" target="_blank">ANSYS</a></li>
            <li><a href="https://www.hydroshare.org/" target="_blank">HydroShare</a></li>
            <li><a href="https://www.epa.gov/waterdata" target="_blank">EPA Water Data Tools</a></li>
            <li><a href="https://www.hec.usace.army.mil/software/hec-ras/" target="_blank">HEC-RAS</a></li>
            <li><a href="https://www.siemens.com/software/tecnomatix" target="_blank">Tecnomatix</a></li>
            <li><a href="https://www.mscsoftware.com/product/adams" target="_blank">MSC Adams</a></li>
            <li><a href="https://www.3ds.com/products-services/catia/" target="_blank">CATIA</a></li>
            <li><a href="https://www.autodesk.com/products/revit/overview" target="_blank">Autodesk Revit</a></li>
            <li><a href="https://www.hec.usace.army.mil/software/hec-hms/" target="_blank">HEC-HMS</a></li>
        </ul>
        <h3>Other Resources</h3>
        <ul>
            <li><a href="https://www.waterboards.ca.gov/" target="_blank">Water Boards</a></li>
            <li><a href="https://www.waterriskfilter.com/" target="_blank">Water Risk Filter</a></li>
            <li><a href="https://www.ewg.org/" target="_blank">Environmental Working Group</a></li>
            <li><a href="https://www.globalwater.org/" target="_blank">Global Water</a></li>
            <li><a href="https://www.water.org/" target="_blank">Water.org</a></li>
            <li><a href="https://www.iwmi.cgiar.org/" target="_blank">International Water Management Institute</a></li>
            <li><a href="https://www.idrc.ca/en/funding/environmental-water-resources" target="_blank">IDRC Water Resources</a></li>
            <li><a href="https://www.who.int/water_sanitation_health/en/" target="_blank">World Health Organization - Water</a></li>
            <li><a href="https://www.wash.org/" target="_blank">Water, Sanitation, and Hygiene</a></li>
            <li><a href="https://www.unwater.org/" target="_blank">UN-Water</a></li>
            <li><a href="https://www.watercouncil.org/" target="_blank">Water Council</a></li>
            <li><a href="https://www.dhi.dk/" target="_blank">DHI Group</a></li>
            <li><a href="https://www.wetlands.org/" target="_blank">Wetlands International</a></li>
            <li><a href="https://www.watershedcouncil.org/" target="_blank">Watershed Council</a></li>
            <li><a href="https://www.iwra.org/" target="_blank">International Water Resources Association</a></li>
            <li><a href="https://www.waterquality.org/" target="_blank">Water Quality Association</a></li>
            <li><a href="https://www.neweconomics.org/2019/02/why-water-is-the-most-critical-resource" target="_blank">New Economics Foundation - Water</a></li>
            <li><a href="https://www.sustainablewater.org/" target="_blank">Sustainable Water</a></li>
            <li><a href="https://www.watersense.com/" target="_blank">WaterSense</a></li>
            <li><a href="https://www.rainwaterharvesting.org/" target="_blank">Rainwater Harvesting</a></li>
        </ul>
    `,
    agricultural: `
        <h2>Agricultural Engineering Resources</h2>
        <h3>Textbooks</h3>
        <ul>
            <li><a href="https://www.springer.com/gp/book/9783319636634" target="_blank">Introduction to Agricultural Engineering</a></li>
            <li><a href="https://www.elsevier.com/books/introduction-to-agricultural-engineering" target="_blank">Introduction to Agricultural Engineering - Elsevier</a></li>
            <li><a href="https://www.coursera.org/courses?query=agricultural%20engineering" target="_blank">Coursera Agricultural Engineering</a></li>
            <li><a href="https://www.edx.org/course/agricultural-engineering" target="_blank">edX Agricultural Engineering</a></li>
            <li><a href="https://www.mdpi.com/books/series/Agricultural_Engineering" target="_blank">MDPI Agricultural Engineering Books</a></li>
            <li><a href="https://www.sae.org/publications/books/agricultural-engineering" target="_blank">SAE Agricultural Engineering Books</a></li>
            <li><a href="https://www.springer.com/gp/book/9783030392825" target="_blank">Agricultural Engineering - Springer</a></li>
            <li><a href="https://www.taylorandfrancis.com/engineering/agricultural-engineering" target="_blank">Taylor & Francis Agricultural Engineering</a></li>
            <li><a href="https://www.amazon.com/s?k=agricultural+engineering&i=stripbooks" target="_blank">Amazon Agricultural Engineering Books</a></li>
            <li><a href="https://www.pearson.com/us/higher-education/discipline/agricultural-engineering.html" target="_blank">Pearson Agricultural Engineering</a></li>
            <li><a href="https://www.wiley.com/en-us/Agricultural+Engineering+Books-c-ENGI00P" target="_blank">Wiley Agricultural Engineering</a></li>
            <li><a href="https://www.cambridge.org/gb/academic/subjects/engineering/agricultural-engineering" target="_blank">Cambridge University Press Agricultural Engineering</a></li>
            <li><a href="https://www.springer.com/gp/book/9783319750379" target="_blank">Advanced Agricultural Engineering</a></li>
            <li><a href="https://www.ebooks.com/en-us/subject/agricultural-engineering/" target="_blank">eBooks.com Agricultural Engineering</a></li>
            <li><a href="https://www.learnengineering.org/agricultural-engineering/" target="_blank">Learn Engineering Agricultural Engineering</a></li>
            <li><a href="https://www.routledge.com/Agricultural-Engineering" target="_blank">Routledge Agricultural Engineering</a></li>
            <li><a href="https://www.hagley.org/library/special-collections/agricultural-engineering" target="_blank">Hagley Library Agricultural Engineering</a></li>
            <li><a href="https://www.cambridge.org/gb/academic/subjects/engineering/agricultural-engineering" target="_blank">Cambridge Agricultural Engineering</a></li>
            <li><a href="https://www.springer.com/gp/book/9783030730490" target="_blank">Handbook of Agricultural Engineering</a></li>
            <li><a href="https://www.careerride.com/agricultural-engineering-books.aspx" target="_blank">Career Ride Agricultural Engineering Books</a></li>
        </ul>
        <h3>Journals</h3>
        <ul>
            <li><a href="https://www.springer.com/journal/11669" target="_blank">Agricultural Engineering International Journal</a></li>
            <li><a href="https://www.mdpi.com/journal/agronomy" target="_blank">Agronomy - MDPI</a></li>
            <li><a href="https://www.elsevier.com/en-xm/journal-of-agricultural-engineering" target="_blank">Journal of Agricultural Engineering</a></li>
            <li><a href="https://www.journals.elsevier.com/agricultural-water-management" target="_blank">Agricultural Water Management</a></li>
            <li><a href="https://www.sciencedirect.com/journal/field-crops-research" target="_blank">Field Crops Research Journal</a></li>
            <li><a href="https://www.springer.com/journal/13530" target="_blank">Agricultural and Biological Chemistry</a></li>
            <li><a href="https://www.aimspress.com/journal/engineering" target="_blank">AIMS Engineering</a></li>
            <li><a href="https://www.journals.elsevier.com/computers-and-electronics-in-agriculture" target="_blank">Computers and Electronics in Agriculture</a></li>
            <li><a href="https://www.mdpi.com/journal/sensors" target="_blank">Sensors - MDPI</a></li>
            <li><a href="https://www.springer.com/journal/11270" target="_blank">Environmental Processes</a></li>
            <li><a href="https://www.elsevier.com/en-xm/journal-of-agricultural-engineering" target="_blank">Journal of Agricultural Engineering</a></li>
            <li><a href="https://www.sciencedirect.com/journal/renewable-and-sustainable-energy-reviews" target="_blank">Renewable and Sustainable Energy Reviews</a></li>
            <li><a href="https://journals.sagepub.com/home/esa" target="_blank">Journal of Environmental Science and Health</a></li>
            <li><a href="https://journals.sagepub.com/home/wem" target="_blank">Waste Management & Research</a></li>
            <li><a href="https://journals.sagepub.com/home/see" target="_blank">Environmental Engineering Science</a></li>
            <li><a href="https://www.sciencedirect.com/journal/journal-of-environmental-management" target="_blank">Journal of Environmental Management</a></li>
            <li><a href="https://www.tandfonline.com/toc/saea20/current" target="_blank">Agricultural Economics</a></li>
            <li><a href="https://www.springer.com/journal/11629" target="_blank">Journal of Agricultural and Food Chemistry</a></li>
            <li><a href="https://www.tandfonline.com/toc/tea/48/4" target="_blank">Crop Science</a></li>
        </ul>
        <h3>AI and Software Tools</h3>
        <ul>
            <li><a href="https://www.agriculture.com/software" target="_blank">Agriculture Software</a></li>
            <li><a href="https://www.agfundernetwork.com/" target="_blank">AgFunder</a></li>
            <li><a href="https://www.trendlines.com/" target="_blank">Trendlines</a></li>
            <li><a href="https://www.agri-tech-east.co.uk/" target="_blank">Agri-Tech East</a></li>
            <li><a href="https://www.agri-tech.com/" target="_blank">Agri-Tech</a></li>
            <li><a href="https://www.agri-tech.org/" target="_blank">Agri-Tech Forum</a></li>
            <li><a href="https://www.agriculturalsmarttech.com/" target="_blank">Agricultural Smart Tech</a></li>
            <li><a href="https://www.precisionagriculture.com/" target="_blank">Precision Agriculture</a></li>
            <li><a href="https://www.agriculture.com/technology" target="_blank">Agricultural Technology</a></li>
            <li><a href="https://www.agronomy.org/" target="_blank">Agronomy Society</a></li>
            <li><a href="https://www.agriculture.com/software" target="_blank">Agricultural Software</a></li>
            <li><a href="https://www.agri-tech.com/" target="_blank">Agri-Tech</a></li>
            <li><a href="https://www.agribusinessglobal.com/" target="_blank">Agribusiness Global</a></li>
            <li><a href="https://www.agri-tech-east.co.uk/" target="_blank">Agri-Tech East</a></li>
            <li><a href="https://www.precisionagriculture.com/" target="_blank">Precision Agriculture</a></li>
            <li><a href="https://www.agriculture.com/technology" target="_blank">Agricultural Technology</a></li>
            <li><a href="https://www.treesearch.com/" target="_blank">Tree Search</a></li>
            <li><a href="https://www.agriculture.com/software" target="_blank">Agricultural Software</a></li>
            <li><a href="https://www.precisionagriculture.com/" target="_blank">Precision Agriculture</a></li>
        </ul>
        <h3>Other Resources</h3>
        <ul>
            <li><a href="https://www.agriculture.com/" target="_blank">Agriculture.com</a></li>
            <li><a href="https://www.agri-tech.com/" target="_blank">Agri-Tech</a></li>
            <li><a href="https://www.agriculture.com/technology" target="_blank">Agricultural Technology</a></li>
            <li><a href="https://www.agfundernetwork.com/" target="_blank">AgFunder</a></li>
            <li><a href="https://www.agriculture.com/software" target="_blank">Agricultural Software</a></li>
            <li><a href="https://www.agri-tech-east.co.uk/" target="_blank">Agri-Tech East</a></li>
            <li><a href="https://www.agri-tech.org/" target="_blank">Agri-Tech Forum</a></li>
            <li><a href="https://www.agriculture.com/technology" target="_blank">Agricultural Technology</a></li>
            <li><a href="https://www.precisionagriculture.com/" target="_blank">Precision Agriculture</a></li>
            <li><a href="https://www.agri-tech.com/" target="_blank">Agri-Tech</a></li>
            <li><a href="https://www.agriculture.com/software" target="_blank">Agricultural Software</a></li>
            <li><a href="https://www.agri-tech.org/" target="_blank">Agri-Tech Forum</a></li>
            <li><a href="https://www.agri-tech-east.co.uk/" target="_blank">Agri-Tech East</a></li>
            <li><a href="https://www.agriculture.com/technology" target="_blank">Agricultural Technology</a></li>
            <li><a href="https://www.agri-tech.com/" target="_blank">Agri-Tech</a></li>
        </ul>
    `,
 mechatronics: `
        <h2>Mechatronics Engineering Resources</h2>
        <h3>Textbooks</h3>
        <ul>
            <li><a href="https://www.springer.com/gp/book/9783642296883" target="_blank">Introduction to Mechatronics and Measurement Systems - Springer</a></li>
            <li><a href="https://www.elsevier.com/books/mechatronics/benassi/9780128124676" target="_blank">Mechatronics - Elsevier</a></li>
            <li><a href="https://www.coursera.org/courses?query=mechatronics" target="_blank">Coursera Mechatronics</a></li>
            <li><a href="https://www.edx.org/course/mechatronics" target="_blank">edX Mechatronics</a></li>
            <li><a href="https://www.springer.com/gp/book/9783319752540" target="_blank">Mechatronics: Principles and Applications - Springer</a></li>
            <li><a href="https://www.amazon.com/s?k=mechatronics+i+principles+i+applications&i=stripbooks" target="_blank">Amazon Mechatronics Books</a></li>
            <li><a href="https://www.pearson.com/us/higher-education/discipline/mechatronics.html" target="_blank">Pearson Mechatronics</a></li>
            <li><a href="https://www.cambridge.org/gb/academic/subjects/engineering/mechatronics" target="_blank">Cambridge University Press Mechatronics</a></li>
            <li><a href="https://www.routledge.com/Mechatronics" target="_blank">Routledge Mechatronics</a></li>
            <li><a href="https://www.wiley.com/en-us/Mechatronics+Engineering-c-ENGI00P" target="_blank">Wiley Mechatronics Engineering</a></li>
            <li><a href="https://www.taylorandfrancis.com/engineering/mechatronics" target="_blank">Taylor & Francis Mechatronics</a></li>
            <li><a href="https://www.sae.org/publications/books/mechatronics" target="_blank">SAE Mechatronics Books</a></li>
            <li><a href="https://www.ebooks.com/en-us/subject/mechatronics/" target="_blank">eBooks.com Mechatronics</a></li>
            <li><a href="https://www.smithers.com/services/technology/mechatronics" target="_blank">Smithers Mechatronics</a></li>
            <li><a href="https://www.springer.com/gp/book/9783662584693" target="_blank">Advanced Mechatronics - Springer</a></li>
            <li><a href="https://www.cambridge.org/gb/academic/subjects/engineering/mechatronics" target="_blank">Cambridge Mechatronics</a></li>
            <li><a href="https://www.routledge.com/Mechatronics" target="_blank">Routledge Mechatronics</a></li>
            <li><a href="https://www.springer.com/gp/book/9783319260534" target="_blank">Mechatronics for Engineers - Springer</a></li>
            <li><a href="https://www.pearson.com/us/higher-education/discipline/mechatronics.html" target="_blank">Pearson Mechatronics</a></li>
            <li><a href="https://www.careerride.com/mechatronics-books.aspx" target="_blank">Career Ride Mechatronics Books</a></li>
        </ul>
        <h3>Journals</h3>
        <ul>
            <li><a href="https://www.mdpi.com/journal/mechatronics" target="_blank">Mechatronics - MDPI</a></li>
            <li><a href="https://www.springer.com/journal/10845" target="_blank">Mechatronics Journal - Springer</a></li>
            <li><a href="https://www.elsevier.com/en-xm/journal-of-mechatronics" target="_blank">Journal of Mechatronics - Elsevier</a></li>
            <li><a href="https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=6287635" target="_blank">IEEE Transactions on Mechatronics</a></li>
            <li><a href="https://www.journals.elsevier.com/mechatronics" target="_blank">Mechatronics Journal - Elsevier</a></li>
            <li><a href="https://www.springer.com/journal/10999" target="_blank">International Journal of Advanced Manufacturing Technology</a></li>
            <li><a href="https://www.mdpi.com/journal/sensors" target="_blank">Sensors - MDPI</a></li>
            <li><a href="https://www.springer.com/journal/10514" target="_blank">Journal of Mechanical Science and Technology</a></li>
            <li><a href="https://www.tandfonline.com/toc/tmea20/current" target="_blank">Journal of Mechatronics</a></li>
            <li><a href="https://www.journals.elsevier.com/mechatronics" target="_blank">Mechatronics Journal - Elsevier</a></li>
            <li><a href="https://www.springer.com/journal/17208" target="_blank">Journal of Dynamic Systems, Measurement, and Control</a></li>
            <li><a href="https://www.sciencedirect.com/journal/robotics-and-computer-integrated-manufacturing" target="_blank">Robotics and Computer-Integrated Manufacturing</a></li>
            <li><a href="https://www.journals.elsevier.com/mechatronics" target="_blank">Mechatronics - Elsevier</a></li>
            <li><a href="https://www.mdpi.com/journal/robots" target="_blank">Robots - MDPI</a></li>
            <li><a href="https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=6287635" target="_blank">IEEE Transactions on Mechatronics</a></li>
            <li><a href="https://www.tandfonline.com/toc/tmea20/current" target="_blank">Journal of Mechatronics</a></li>
            <li><a href="https://www.sciencedirect.com/journal/mechatronics" target="_blank">Mechatronics Journal</a></li>
            <li><a href="https://www.springer.com/journal/10845" target="_blank">Mechatronics Journal - Springer</a></li>
            <li><a href="https://www.springer.com/journal/10999" target="_blank">International Journal of Advanced Manufacturing Technology</a></li>
            <li><a href="https://www.mdpi.com/journal/sensors" target="_blank">Sensors - MDPI</a></li>
        </ul>
        <h3>AI and Software Tools</h3>
        <ul>
            <li><a href="https://www.mathworks.com/products/matlab.html" target="_blank">MATLAB - MathWorks</a></li>
            <li><a href="https://www.comsol.com/" target="_blank">COMSOL Multiphysics</a></li>
            <li><a href="https://www.ansys.com/" target="_blank">ANSYS</a></li>
            <li><a href="https://www.solidworks.com/" target="_blank">SolidWorks</a></li>
            <li><a href="https://www.autodesk.com/products/autocad/overview" target="_blank">AutoCAD</a></li>
            <li><a href="https://www.mathworks.com/products/simulink.html" target="_blank">Simulink - MathWorks</a></li>
            <li><a href="https://www.catia.com/" target="_blank">CATIA - Dassault Systèmes</a></li>
            <li><a href="https://www.opto22.com/" target="_blank">OPTO 22</a></li>
            <li><a href="https://www.mscsoftware.com/product/adams" target="_blank">MSC Adams</a></li>
            <li><a href="https://www.altium.com/" target="_blank">Altium Designer</a></li>
            <li><a href="https://www.openfoam.com/" target="_blank">OpenFOAM</a></li>
            <li><a href="https://www.togaf.org/" target="_blank">TOGAF</a></li>
            <li><a href="https://www.3ds.com/products-services/catia/" target="_blank">CATIA</a></li>
            <li><a href="https://www.siemens.com/software/tecnomatix" target="_blank">Tecnomatix</a></li>
            <li><a href="https://www.autodesk.com/products/revit/overview" target="_blank">Revit</a></li>
            <li><a href="https://www.mathworks.com/products/simulink.html" target="_blank">Simulink - MathWorks</a></li>
            <li><a href="https://www.honeywell.com/en-us/products/automation-control" target="_blank">Honeywell Automation</a></li>
            <li><a href="https://www.siemens.com/software/tecnomatix" target="_blank">Tecnomatix</a></li>
            <li><a href="https://www.autodesk.com/products/revit/overview" target="_blank">Revit</a></li>
            <li><a href="https://www.honeywell.com/en-us/products/automation-control" target="_blank">Honeywell Automation</a></li>
        </ul>
        <h3>Other Resources</h3>
        <ul>
            <li><a href="https://www.coursera.org/courses?query=mechatronics" target="_blank">Coursera Mechatronics</a></li>
            <li><a href="https://www.edx.org/course/mechatronics" target="_blank">edX Mechatronics</a></li>
            <li><a href="https://www.springer.com/gp/book/9783642296883" target="_blank">Introduction to Mechatronics and Measurement Systems - Springer</a></li>
            <li><a href="https://www.elsevier.com/books/mechatronics/benassi/9780128124676" target="_blank">Mechatronics - Elsevier</a></li>
            <li><a href="https://www.routledge.com/Mechatronics" target="_blank">Routledge Mechatronics</a></li>
            <li><a href="https://www.cambridge.org/gb/academic/subjects/engineering/mechatronics" target="_blank">Cambridge Mechatronics</a></li>
            <li><a href="https://www.amazon.com/s?k=mechatronics&i=stripbooks" target="_blank">Amazon Mechatronics Books</a></li>
            <li><a href="https://www.pearson.com/us/higher-education/discipline/mechatronics.html" target="_blank">Pearson Mechatronics</a></li>
            <li><a href="https://www.springer.com/gp/book/9783319752540" target="_blank">Mechatronics: Principles and Applications - Springer</a></li>
            <li><a href="https://www.careerride.com/mechatronics-books.aspx" target="_blank">Career Ride Mechatronics Books</a></li>
            <li><a href="https://www.tandfonline.com/toc/tmea20/current" target="_blank">Journal of Mechatronics</a></li>
            <li><a href="https://www.springer.com/journal/10845" target="_blank">Mechatronics Journal - Springer</a></li>
            <li><a href="https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=6287635" target="_blank">IEEE Transactions on Mechatronics</a></li>
            <li><a href="https://www.journals.elsevier.com/mechatronics" target="_blank">Mechatronics Journal - Elsevier</a></li>
            <li><a href="https://www.mdpi.com/journal/robots" target="_blank">Robots - MDPI</a></li>
            <li><a href="https://www.sciencedirect.com/journal/mechatronics" target="_blank">Mechatronics Journal</a></li>
            <li><a href="https://www.mathworks.com/products/matlab.html" target="_blank">MATLAB - MathWorks</a></li>
            <li><a href="https://www.comsol.com/" target="_blank">COMSOL Multiphysics</a></li>
            <li><a href="https://www.ansys.com/" target="_blank">ANSYS</a></li>
            <li><a href="https://www.solidworks.com/" target="_blank">SolidWorks</a></li>
            <li><a href="https://www.autodesk.com/products/autocad/overview" target="_blank">AutoCAD</a></li>
            <li><a href="https://www.mathworks.com/products/simulink.html" target="_blank">Simulink - MathWorks</a></li>
            <li><a href="https://www.opto22.com/" target="_blank">OPTO 22</a></li>
            <li><a href="https://www.mscsoftware.com/product/adams" target="_blank">MSC Adams</a></li>
            <li><a href="https://www.altium.com/" target="_blank">Altium Designer</a></li>
        </ul>
    `


};

    

    contentArea.innerHTML = departmentResources[department];
}
