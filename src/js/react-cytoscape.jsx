import React from "react";
import PropTypes from "prop-types";
import cytoscape from "cytoscape";
import styled from "styled-components";

var eles = {
	nodes:[
       {
         data: {
           name: "PIP3 activates AKT signaling",
           color: "#FF0000",
           size: 12.5527,
           id: "PIP3 activates AKT signaling"
         }
       },
       {
         data: {
           name: "Constitutive Signaling by Aberrant PI3K in Cancer",
           color: "#FF0000",
           size: 11.4613,
           id: "Constitutive Signaling by Aberrant PI3K in Cancer"
         }
       },
       {
         data: {
           name: "PI5P, PP2A and IER3 Regulate PI3K/AKT Signaling",
           color: "#FF0000",
           size: 11.7609,
           id: "PI5P, PP2A and IER3 Regulate PI3K/AKT Signaling"
         }
       },
       {
         data: {
           name: "Fanconi Anemia Pathway",
           color: "#FF0000",
           size: 10.4139,
           id: "Fanconi Anemia Pathway"
         }
       },
       {
         data: {
           name: "RAF/MAP kinase cascade",
           color: "#FF0000",
           size: 11.7609,
           id: "RAF/MAP kinase cascade"
         }
       },
       {
         data: {
           name: "TP53 Regulates Transcription of DNA Repair Genes",
           color: "#FE0101",
           size: 10.4139,
           id: "TP53 Regulates Transcription of DNA Repair Genes"
         }
       },
       {
         data: {
           name: "Signaling by FGFR3 fusions in cancer",
           color: "#FB1711",
           size: 7.7815,
           id: "Signaling by FGFR3 fusions in cancer"
         }
       },
       {
         data: {
           name: "Downstream signal transduction",
           color: "#FA231A",
           size: 9.0309,
           id: "Downstream signal transduction"
         }
       },
       {
         data: {
           name: "Signaling by FGFR4 in disease",
           color: "#F73528",
           size: 7.7815,
           id: "Signaling by FGFR4 in disease"
         }
       },
       {
         data: {
           name: "Regulation of TP53 Degradation",
           color: "#E5C494",
           size: 9.0309,
           id: "Regulation of TP53 Degradation"
         }
       }
     ],


  edges:[
       {
         data: {
           source: "PIP3 activates AKT signaling",
           target: "Constitutive Signaling by Aberrant PI3K in Cancer",
           width: 3.9441
         }
       },
       {
         data: {
           source: "PIP3 activates AKT signaling",
           target: "PI5P, PP2A and IER3 Regulate PI3K/AKT Signaling",
           width: 4.0825
         }
       },
       {
         data: {
           source: "Constitutive Signaling by Aberrant PI3K in Cancer",
           target: "PI5P, PP2A and IER3 Regulate PI3K/AKT Signaling",
           width: 4.3205
         }
       },
       {
         data: {
           source: "PIP3 activates AKT signaling",
           target: "RAF/MAP kinase cascade",
           width: 3.1623
         }
       },
       {
         data: {
           source: "Constitutive Signaling by Aberrant PI3K in Cancer",
           target: "RAF/MAP kinase cascade",
           width: 3.496
         }
       },
       {
         data: {
           source: "PI5P, PP2A and IER3 Regulate PI3K/AKT Signaling",
           target: "RAF/MAP kinase cascade",
           width: 3.4028
         }
       },
       {
         data: {
           source: "Fanconi Anemia Pathway",
           target: "TP53 Regulates Transcription of DNA Repair Genes",
           width: 2.1082
         }
       },
       {
         data: {
           source: "RAF/MAP kinase cascade",
           target: "Signaling by FGFR3 fusions in cancer",
           width: 2.1693
         }
       },
       {
         data: {
           source: "PIP3 activates AKT signaling",
           target: "Downstream signal transduction",
           width: 2.1822
         }
       },
       {
         data: {
           source: "Constitutive Signaling by Aberrant PI3K in Cancer",
           target: "Downstream signal transduction",
           width: 2.4254
         }
       },
       {
         data: {
           source: "PI5P, PP2A and IER3 Regulate PI3K/AKT Signaling",
           target: "Downstream signal transduction",
           width: 2.357
         }
       },
       {
         data: {
           source: "RAF/MAP kinase cascade",
           target: "Downstream signal transduction",
           width: 2.357
         }
       },
       {
         data: {
           source: "Signaling by FGFR3 fusions in cancer",
           target: "Downstream signal transduction",
           width: 3.3333
         }
       },
       {
         data: {
           source: "RAF/MAP kinase cascade",
           target: "Signaling by FGFR4 in disease",
           width: 2.1693
         }
       },
       {
         data: {
           source: "Signaling by FGFR3 fusions in cancer",
           target: "Signaling by FGFR4 in disease",
           width: 3.7796
         }
       },
       {
         data: {
           source: "Downstream signal transduction",
           target: "Signaling by FGFR4 in disease",
           width: 3.3333
         }
       }
     ]

};


const Wrapper = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
`;

const defaultNodeStyle = {
  selector: "node",
  style: {
    content: "data(id)",
    "font-size": 4,
    "background-color": "#ea8a31",
  },
};

const defaultEdgeStyle = {
  selector: "edge",
  style: {
    "curve-style": "haystack",
    "haystack-radius": 0,
    width: 5,
    opacity: 0.666,
    "line-color": "#fcc694",
  },
};

const defaultStyle = [defaultNodeStyle, defaultEdgeStyle];

const defaultLayout = {
  name: "circle",
  padding: 2,
};

export class Cytoscape extends React.Component {
  runCytoscape() {
    const { style, elements, layout } = this.props;

    if (Object.keys(elements).length) {
      var x = elements["nodes"];
      var y = elements["edges"];
      var nodes = [];
      var edges = [];
      for (var i = 0; i < x.length; i++) {
        var obj = {
          data:{
            id: x[i]["data"]["id"][0],
            name: x[i]["data"]["name"][0],
            color: x[i]["data"]["color"][0],
            shape: x[i]["data"]["shape"][0],
            href: x[i]["data"]["href"][0],
            height: x[i]["data"]["height"][0],
            width: x[i]["data"]["width"][0],
            nodeLabelColor: x[i]["data"]["nodeLabelColor"][0]
          }
        };
        nodes.push(obj);
      }
      for (var i = 0; i < y.length; i++) {
        var obj = {
          data:{
            source: y[i]["data"]["source"][0],
            target: y[i]["data"]["target"][0],
            color: y[i]["data"]["color"][0],
            edgeSourceShape: y[i]["data"]["edgeSourceShape"][0],
            edgeTargetShape: y[i]["data"]["edgeTargetShape"][0]
          }
        };
        edges.push(obj);
      }

      var tempeles = {
        nodes: nodes,
        edges:edges
      };
      cytoscape({ style, tempeles, layout, container: this.div });
    }
  }

  componentDidMount() {
    this.runCytoscape();
  }

  componentDidUpdate() {
    this.runCytoscape();
  }

  render() {
    return (
      <Wrapper
        innerRef={c => (this.div = c)}
        height={this.props.height}
        width={this.props.width}
      />
    );
  }
}

Cytoscape.defaultProps = {
  height: "600px",
  layout: defaultLayout,
  style: defaultStyle,
  width: "100%",
};

Cytoscape.propTypes = {
  elements: PropTypes.object.isRequired,
};
