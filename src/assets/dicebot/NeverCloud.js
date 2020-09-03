/* Generated by Opal 1.0.3 */
(function(Opal) {
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_ge(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs >= rhs : lhs['$>='](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $$$ = Opal.const_get_qualified, $$ = Opal.const_get_relative, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $truthy = Opal.truthy, $send = Opal.send;

  Opal.add_stubs(['$setPrefixes', '$match', '$to_i', '$[]', '$eval', '$new', '$==', '$roll', '$map', '$split', '$to_proc', '$+', '$count', '$>=', '$compact', '$join']);
  return (function($base, $super, $parent_nesting) {
    var self = $klass($base, $super, 'NeverCloud');

    var $nesting = [self].concat($parent_nesting), $NeverCloud_rollDiceCommand$1;

    
    Opal.const_set($nesting[0], 'ID', "NeverCloud");
    Opal.const_set($nesting[0], 'NAME', "ネバークラウドTRPG");
    Opal.const_set($nesting[0], 'SORT_KEY', "ねはあくらうとTRPG");
    Opal.const_set($nesting[0], 'HELP_MESSAGE', "" + "・判定(xNC±y>=z)\n" + "　xD6の判定を行います。ファンブル、クリティカルの場合、その旨を出力します。\n" + "　x：振るダイスの数。\n" + "　±y：固定値・修正値。省略可能。\n" + "　z：目標値。省略可能。\n" + "　例）　2NC+2>=5　1NC\n");
    self.$setPrefixes(["\\d+NC.*", "\\d+D6?([\\+\\-\\d]*)>=\\d+"]);
    return (Opal.def(self, '$rollDiceCommand', $NeverCloud_rollDiceCommand$1 = function $$rollDiceCommand(command) {
      var $a, $b, self = this, m = nil, dice_count = nil, modify_str = nil, modify_number = nil, cmp_str = nil, target = nil, dice_value = nil, dice_str = nil, dice_list = nil, total = nil, result = nil, sequence = nil;

      
      m = /^(\d+)(?:NC|D6?)((?:[-+]\d+)*)(>=(\d+))?$/i.$match(command);
      if ($truthy(m)) {
      } else {
        return nil
      };
      dice_count = m['$[]'](1).$to_i();
      modify_str = m['$[]'](2);
      modify_number = $$($nesting, 'ArithmeticEvaluator').$new().$eval(modify_str);
      cmp_str = m['$[]'](3);
      target = ($truthy($a = m['$[]'](4)) ? m['$[]'](4).$to_i() : $a);
      if (modify_number['$=='](0)) {
        modify_str = ""};
      $b = self.$roll(dice_count, 6), $a = Opal.to_ary($b), (dice_value = ($a[0] == null ? nil : $a[0])), (dice_str = ($a[1] == null ? nil : $a[1])), $b;
      dice_list = $send(dice_str.$split(","), 'map', [], "to_i".$to_proc());
      total = $rb_plus(dice_value, modify_number);
      result = (function() {if (dice_list.$count(1)['$=='](dice_count)) {
        
        total = 0;
        return "ファンブル";
      } else if ($truthy($rb_ge(dice_list.$count(6), 2))) {
        return "クリティカル"
      } else if ($truthy(target)) {
        if ($truthy($rb_ge(total, target))) {
          return "成功"
        } else {
          return "失敗"
        }
      } else {
        return nil
      }; return nil; })();
      sequence = ["" + "(" + (dice_count) + "D6" + (modify_str) + (cmp_str) + ")", "" + (dice_value) + "[" + (dice_str) + "]" + (modify_str), total, result].$compact();
      return sequence.$join(" ＞ ");
    }, $NeverCloud_rollDiceCommand$1.$$arity = 1), nil) && 'rollDiceCommand';
  })($nesting[0], $$($nesting, 'DiceBot'), $nesting)
})(Opal);