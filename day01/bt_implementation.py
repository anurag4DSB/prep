# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    bt_implementation.py                               :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: amittal <marvin@42.fr>                     +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2017/06/16 15:59:17 by amittal           #+#    #+#              #
#    Updated: 2017/06/16 15:59:17 by amittal          ###   ########.fr        #
#                                                                              #
# **************************************************************************** #


class Node(object):
    """
    Tree node: left and right child + data which can be any object
    """
    def __init__(self, data):
        """
        Node Constructor
        @param data node data object
        """
        self.left = None
        self.right = None
        self.data = data

    def __repr__(self):
        return "Node With Data: %d" % self.data
    
    def insert(self, data):
        """
        Isert new node with data
        @param data node data object to insert
        """
        if data < self.data:
            if self.left is None:
                self.left = Node(data)
            else:
                self.left.insert(data)
        else:
            if self.right is None:
                self.left = Node(data)
            else:
                self.right.insert(data)
    
    def lookup(self, data, parent=None):
        """
        Lookup node containing data

        @param data node data object to lookup
        @param parent node's parent
        @returns node and node's parent if found or None, None
        """
        if data < self.data:
            if self.left is None:
                return None, None
            return self.left.lookup(data, self)
        elif data > self.data:
            if self.right is None:
                return None, None
            return self.right.lookup(data, self)
        else:
            return(self, parent)
    def print_each_level(self):
    		# Start off with root node
		thislevel = [self]

		# While there is another level
		while thislevel:
			nextlevel = list()
			#Print all the nodes in the current level, and store the next level in a list
			for node in thislevel:
				print node.data
				if node.left: nextlevel.append(node.left)
				if node.right: nextlevel.append(node.right)
			print
			thislevel = nextlevel

root = Node(8)
root.insert(3)
root.insert(4)
import pdb; pdb.set_trace()
