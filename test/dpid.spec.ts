import DPiD from '../src/dpid';

const validMod36_37 = [
	'5molwgwy88q4rvosx2',
	'x3f92svglggaebo4y8',
	'nc7a0kon7x1b9ebwa0'
];

test( 'DPiD test', () => {
	describe( 'validate() returns true', function() {
		for (var i = validMod36_37.length - 1; i >= 0; i--) {
			expect( DPiD.validate( validMod36_37[ i ] ) ).toBe( true );
		}
	} );
} );
