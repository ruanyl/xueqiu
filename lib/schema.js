var TestSchema = {
  name: String,
  id: Number,
  birthday: Date
};

var CombinationSchema = {
  symbol: String,
  list: [{
    id: Number,
    prev_bebalancing_id: Number,
    cash: Number,
    created_at: Date,
    updated_at: Date,
    cube_id: Number,
    status: String,
    category: String,
    rebalancing_histories: [{
      id: Number,
      created_at: Date,
      updated_at: Date,
      net_value: Number,
      prev_net_value: Number,
      prev_price: Number,
      prev_target_weight: Number,
      prev_volume: Number,
      prev_weight: Number,
      prev_weight_adjusted: Number,
      proactive: Boolean,
      rebalancing_id: Number,
      stock_id: Number,
      stock_name: String,
      stock_symbol: String,
      target_weight: Number,
      volume: Number,
      weight: Number
    }]
  }]
};

module.exports = {
  TestSchema: TestSchema,
  CombinationSchema: CombinationSchema
}
