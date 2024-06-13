[[DSA]]

Every value is converted to Unicode, then sorted, resulting in strange results for integers. 

To fix this, it accepts a companion function to specify how you want it to sort.
- returns neg num, a before b	
- returns pos num, a after b
- returns 0, a and b are the same.

```javascript
function compareByLen(str1, str2) {
	return str2.length - str1.length
}

['a', 'abcd', 'ab', 'abcdef', 'abc'].sort(compareByLen)
```

