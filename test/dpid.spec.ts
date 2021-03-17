import DPiD from '../src/dpid';

const validMod36_37 = [
	'5molwgwy88q4rvosx2',
	'x3f92svglggaebo4y8',
	'nc7a0kon7x1b9ebwa0'
];


describe( 'validate() returns true', () => {
	for( let i:number = validMod36_37.length - 1; i >= 0; i-- ) {
		it( 'Should return true when input is ' + validMod36_37[ i ], () => {
			expect( DPiD.validate( validMod36_37[ i ] ) ).toBe( true );
		} );
	}
} );
