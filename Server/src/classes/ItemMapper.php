<?php

class ItemMapper extends Mapper
{
	public function getItems() {
		$sql = "SELECT i.id, i.name
            from items i";
		$stmt = $this->db->query($sql);
		$results = [];
		while($row = $stmt->fetch()) {
			$results[] = new ItemEntity($row);
		}
		return $results;
	}
	/**
	 * Get one item by its ID
	 *
	 * @param int $item_id The ID of the item
	 *
*@return ItemEntity  The Item
	 */
	public function getItemById($item_id) {
		$sql = "SELECT i.id, i.name
            from items i
            WHERE i.id= :user_id";
		$stmt = $this->db->prepare($sql);
		$result = $stmt->execute(["item:id" => $item_id]);
		if($result) {
			return new ItemEntity($stmt->fetch());
		}
	}
	public function save( ItemEntity $item) {
		$sql = "insert into items
            (name) values
            (:name)";
		$stmt = $this->db->prepare($sql);
		$result = $stmt->execute([
			"name" => $item->getName(),
		]);
		if(!$result) {
			throw new Exception("could not save record");
		}
	}
}