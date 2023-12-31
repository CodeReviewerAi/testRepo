// This file is to keep the test functions

function createdWithMergeAndNotChangedAfter() {
    console.log('This creates the function on test branch')
    console.log('Second change on test branch')
}

function CreatedOnMainAndNotChangedAfterMerge() {
    console.log('This creates the function on main branch')
    console.log('First change on test branch')
    console.log('Second change on test branch')
}

function createdWithMergeAndChangedAfterMerge() {
    console.log('This creates the function on test branch')
    console.log('second change on test branch')
    console.log('Changed on main branch')
}

function createdOnMainAndChangedAfterWithMerge() {
    console.log('This creates the function on main branch')
}