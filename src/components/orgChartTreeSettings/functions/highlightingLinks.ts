import {CompanyMember, ExtendedOrgChart} from '../../../types/types';

//highlight link path
class AddHighlightedLinks {
  highlighted = false;
  highlightedNode: number | string = 0;

  highlight(node: CompanyMember, sender: ExtendedOrgChart) {
    node.tags = ['y'];
    sender?.updateNode(node);
    if (node.pid) {
      node = sender?.get(node.pid);
      this.highlight(node, sender);
    }
  }

  unHighlight(node: CompanyMember, sender: ExtendedOrgChart) {
    const array = ['a', 'b', 'c', 'd', 'e', 'f'];
    const random = Math.floor(Math.random() * array.length);
    if (node.tags) node.tags[0] = array[random];
    sender?.updateNode(node);
    if (node.pid) {
      node = sender?.get(node.pid);
      this.unHighlight(node, sender);
    }
  }

  hilighteNodePath (sender: ExtendedOrgChart, id: number, previousNodeId?: string) {
    const currentData = sender.getNode(previousNodeId || id);
    const currentNodeData = sender.get(previousNodeId || id);
    const parentNodeData = sender.get(currentData.parent?.id || '');
    const data = !currentData.childrenIds && !previousNodeId ? parentNodeData :  currentNodeData;

    if (!this.highlighted) {
      this.highlight(data, sender);
      this.highlighted = true;
      this.highlightedNode = previousNodeId || id;
    } else if (this.highlightedNode !== previousNodeId || id) {
      this.unHighlight(sender.get(this.highlightedNode), sender);
      this.highlight(data, sender);
      this.highlighted = true;
      this.highlightedNode = previousNodeId || id;
    } else {
      this.unHighlight(sender.get(this.highlightedNode), sender);
      this.highlightedNode = 0;
      this.highlighted = false;
    }
  }

}

export default AddHighlightedLinks;