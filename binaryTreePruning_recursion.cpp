/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
 /*
Approach: 1.There will be no immediate pruning if a non-one is soon as
direct child. It has see till the lowest level recursively. So, pruning occurs
recursively from lowest level of the whole problem upto uppermost level
 */
class Solution {
    public TreeNode pruneTree(TreeNode root) {
        if(root==null){
            return root;
        }
        containsOne(root);
        //here we are modifying the root of the tree
        //the case in "if block" is one corner case for this problem
         if (root.val == 0 && root.left == null && root.right == null) {
            return null;
        }
        else {
            return root; 
        }
    
    }

    public boolean containsOne(TreeNode node){
        if(node==null){
            return false;
        }

        boolean left_contains=containsOne(node.left);
        boolean right_contains=containsOne(node.right);

        if(left_contains==false){
            //immediate prune it
            node.left=null;
        }

        if(right_contains==false){
            //immediate prune it
            node.right=null;
        }
        //return true if node val is 1 or left or right subtree has a 1
        return node.val == 1 || left_contains || right_contains;
    } 

}