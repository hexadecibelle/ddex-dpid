import DPid from '../src/dpid';

// Random strings with valid mod37_36 checksums
const validMod37_36 = [
	'k6br004z4iqg3hg2vw',
	'x3f92svglggaebo4y2',
	'nc7a0kon7x1b9ebwah'
];

// DPids taken from YouTube
// https://support.google.com/youtube/answer/3505274?hl=en-GB
const validDPid = [
	'PADPIDA3897722461G',
	'PADPIDA2013020802I'
];

describe( 'validate() returns true with YouTube DPids', () => {
	for( let i:number = validDPid.length - 1; i >= 0; i-- ) {
		it( 'Should return true when input is ' + validDPid[ i ], () => {
			expect( DPid.validate( validDPid[ i ] ) ).toBe( true );
		} );
	}
} );

describe( 'validate() returns true with valid 18-character mod37_36 checksums', () => {
	for( let i:number = validMod37_36.length - 1; i >= 0; i-- ) {
		it( 'Should return true when input is ' + validMod37_36[ i ], () => {
			expect( DPid.validate( validMod37_36[ i ] ) ).toBe( true );
		} );
	}
} );

it( 'Should throw an error when input is incorrect length', () => {
	expect( () => {
		DPid.validate( 'nzfpyzazuoki5av1l' );
	} ).toThrow();
} );

