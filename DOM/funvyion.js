function evenify_all(nums) {
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num % 2 == 0) {
            console.log(num, ':Even Number')
        } else {
            console.log(num, 'Odd Number')
        }
    }
}
nums = [5, 12, 89, 18, 45];
evenify_all(nums);
friend_age = [13, 14, 15, 67, 34];
evenify_all(friend_age);