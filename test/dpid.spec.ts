import DPid from '../src/dpid';

// Random strings with valid mod37_36 checksums
const validMod37_36 = [
	'k6br004z4iqg3hg2vw',
	'x3f92svglggaebo4y2',
	'nc7a0kon7x1b9ebwah'
];

describe( 'validate() returns true with valid mod37_36 checksums', () => {
	for( let i:number = validMod37_36.length - 1; i >= 0; i-- ) {
		it( 'Should return true when input is ' + validMod37_36[ i ], () => {
			expect( DPid.validate( validMod37_36[ i ] ) ).toBe( true );
		} );
	}
} );
