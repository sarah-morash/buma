<?php
use \WebGuy;

class UserStoryRemoveWishCest
{

    public function _before()
    {
    }

    public function _after()
    {
    }

		// Delete wish
		public function removeWish($I) {
				$I->wantTo('Remove wish');
				$I->amOnPage('/index.php?file=wish_list');

				// Update
				$I->click('delete');
				$I->click('Ok');

				// Will see 'Wish removed' if test has passed'
				$I->see('Wish removed');
		}
}
