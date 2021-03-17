import DPiD from '../src/dpid';

test( 'DPiD test', () => {
	expect( DPiD.validate( '5molwgwy88q4rvosx2' ) ).toBe( true );
} );
