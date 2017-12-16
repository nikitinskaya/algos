## arrays
- consecutive in memory
- if we add an item and the next memory unit is taken, we need to find another place in memory to fit the whole array: not good at inserts, O(n)
- same with insert at any position (e.g. in the middle. need to shift all the rest of the array). O(n)
- same with deletion, O(n). may need to shift the whole array
- workaround: to ask for sufficient number of memory units beforehand. but may end up not using them and waste memory
- good at reading random elements: nth address is 1st + (n-1), just calculate the address, instant random access (reading) O(1)


## linked lists
- items anywhere in memory
- each item stores the data + the address of the next element
- add item: find memory unit, store the value there + store the unit's address in the previous item: good at inserts, O(1)
- same with deletion/insert at any position. just need to change pointers. O(1)
- worse at reading: O(n), have to go through the whole list
- only good at reading one item at a time, in sequence (sequential access only)

|        | array         | linked list      |
|--------|:-------------:|:----------------:|
| read   | O(1), random  | O(n), sequential |
| insert | O(n)          | O(1)             |
| delete | O(n)          | O(1)             |


1. "Order queue": servers add orders to the end of the order queue, the chef takes them from the front of the queue.
  This suggests lots of inserts/deletions, no random reads. So a linked list
2. "Facebook login": random search for each username (e.g. binary search), so an array
3. "Facebook signup": arrays are worse for this (random position inserts, linked list would be better). We'll need to sort the array with each insert if we want to perform binary search.
4. What if we make an array of linked lists? Good if the number of categories is known (e.g. 26 letters of alphabet). Maybe faster at insert and deletion than an array, and also a bit faster at search (read) than a linked list?
