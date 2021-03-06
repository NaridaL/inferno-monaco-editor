import createElement from 'inferno-create-element';
import InfernoComponent from 'inferno-component';

import MonacoEditor from 'src';

export default class Client extends InfernoComponent<any, never> {
    private editor?: MonacoEditor;
    private handleChange: { (newValue: string): void };

    constructor(props) {
        super(props);
        window.addEventListener('resize', _evt => { if (this.editor) this.editor.layout(); });
        this.handleChange = nv => {
            console.log(nv);
        }
    }

    render() {
        return (
            <MonacoEditor 
                ref={node => this.editor = node}
                width="100%" 
                height="100%" 
                value="if (Flow.server.ipaddr.isRFC1918) Application('int').commit();"
                onChange={this.handleChange} />
        );
    }
}