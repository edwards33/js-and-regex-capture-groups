var text01 = `
foobar
foo
foobaz
fooboo
`

var regex01 = /foo(bar|boo)/g
var regex02 = /foo(bar|boo)?/g //0 or more inst. of boo or bar

const loop = (targetText, reg) => {
  while((result = reg.exec(targetText)) !== null) {
    console.log(result)
  }
}
console.log('\nregex01:')
loop(text01, regex01)
console.log('\nregex02:')
loop(text01, regex02)

console.log(text01.replace(regex01, '##$1##'))

