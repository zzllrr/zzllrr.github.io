/*
 * zzllrr Mather
 * Copyright by zzllrr since 2013. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 */

wiki['logic']=Kx(


detail('逻辑恒等式',Table([ZLR('恒等式 名称')],[
	ZLR('¬¬P⇔P 双否定'),
	ZLR('P∨P⇔P ∨的等幂律'),
	ZLR('P∧P⇔P ∧的等幂律'),
	ZLR('P∨Q⇔Q∨P ∨的交换律'),
	ZLR('P∧Q⇔Q∧P ∧的交换律'),
	ZLR('(P∨Q)∨R⇔P∨(Q∨R) ∨的结合律'),
	ZLR('(P∧Q)∧R⇔P∧(Q∧R) ∧的结合律'),
	ZLR('P∧(Q∨R)⇔(P∧Q)∨(P∧R) ∧在∨上的分配律'),
	ZLR('P∨(Q∧R)⇔(P∨Q)∧(P∨R) ∨在∧上的分配律'),
	ZLR('¬(P∨Q)⇔¬P∧¬Q 德摩根定律'),
	ZLR('¬(P∧Q)⇔¬P∨¬Q 德摩根定律'),
	ZLR('P∨(P∧Q)⇔P 吸收律'),
	ZLR('P∧(P∨Q)⇔P 吸收律'),
	ZLR('P→Q⇔¬P∨Q 蕴含表达式'),
	ZLR('P↔Q⇔(P→Q)∧(Q→P) 等值表达式'),
	ZLR('P∨T⇔T 零律'),
	ZLR('P∧F⇔F 零律'),
	ZLR('P∨F⇔P 同一律'),
	ZLR('P∧T⇔P 同一律'),
	ZLR('P∨¬P⇔T 排中律'),
	ZLR('P∧¬P⇔F 矛盾律'),
	ZLR('(P∧Q)→R⇔P→(Q→R) 输出律'),
	ZLR('(P→Q)∧(P→¬Q)⇔¬P 归谬律'),
	ZLR('P→Q⇔¬Q→¬P 逆反律（假言易位）'),
	ZLR('P↔Q⇔¬P↔¬Q 等值否定表达式'),
	ZLR('P→(Q→R)⇔Q→(P→R) 等值否定表达式')

],'wiki').replace(/\n/g,br))+
detail('永真蕴含式',Table([ZLR('蕴含式 名称')],[

	ZLR('P⇒P∨Q 加法式'),
	ZLR('P∧Q⇒P 简化式'),
	ZLR('P∧(P→Q)⇒Q 假言推理（分离规则，MP规则）'),
	ZLR('(P→Q)∧¬Q⇒¬P 拒取式'),
	ZLR('¬P∧(P∨Q)⇒Q 析取三段论'),
	ZLR('(P→Q)∧(Q→R)⇒P→R 前提三段论'),
	ZLR('P→Q⇒(Q→R)→(P→R)'),
	ZLR('(P→Q)∧(R→S)⇒(P∧R)→(Q∧S)'),
	ZLR('(P↔Q)∧(Q↔R)⇒P↔R'),
	ZLR('P和Q⇒P∧Q 合取式'),
	ZLR('(P→Q)∧(R→S)∧(P∨R)⇒Q∨S 构造性二难推理'),
	ZLR('(P→Q)∧(R→S)∧(¬Q∨¬S)⇒¬P∨¬R 破坏性二难推理')



],'wiki').replace(/\n/g,br))+
detail('证明法',Table([ZLR('名称 内容 性质')],[

	ZLR('无义____P假⇒(P→Q)真____','','____'),
	ZLR('平凡____Q真⇒(P→Q)真____','','____'),
	ZLR('直接____P真→Q真⇒(P→Q)真____','','____'),
	ZLR('间接(逆反)____Q假→P假⇒(P→Q)真____','','____'),
	ZLR(kxA(['间接(逆反)，只需证明其中','一个情况¬Q→¬p_i为真','也可使用直接证明法'])+'____(P_1∧P_2⋯) → Q⇔¬Q → (¬P_1∨¬P_2⋯)____','','____'),
	ZLR(kxA(['CP规则','（演绎定理，将P移作前提，简化）'])+'____(P_1∧P_2⋯) → (P→Q)⇔(P_1∧P_2⋯∧P)→Q____','','____'),
	ZLR('分情况证明____(P_1∨P_2⋯) → Q⇔(P_1→Q)∧(P_2→Q)⋯∧(Pn→Q)____','','____'),
	ZLR(kxA(['反证法(归谬法)，','其中¬C叫假设前提'])+'____(H_1∧H_2⋯) → C⇔(H_1∧H_2⋯∧¬C) → (R∧¬R)____','','____'),
	ZLR('改名规则____约束出现统一改为新符号____只适用于约束变元','','____'),
	ZLR('代入规则____自由出现统一改为新符号____只适用于自由变元','','____'),
	ZLR('替换规则____子公式替换为等价的公式（不必每一处）后仍等价____适用于子公式','','____'),
	ZLR('对偶原理____'+piece(['A⇔B 则A^*⇔B^*','A⇒B 则B^*⇒A^*'])+'____'+kxA(['仅含运算符¬∧∨的对偶公式','(∃∀、∧∨、TF互换)']),'','____'),
	ZLR('P规则____随时引入前提','','____'),
	ZLR('T规则____随时引进推导过程中得到的永真蕴含式','','____'),
	ZLR('数学归纳法第一原理____P(0)∧∀n(P(n) → P(n+1)) ⇒ ∀nP(n)____可以且只能推广至类似自然数的良序集合','','____'),
	ZLR('数学归纳法第二原理____∀n[∀k(k < n→P(k)) → P(n)] ⇒ ∀nP(n)____可以且只能推广至任何良序集合','','____')



],'wiki').replace(/\n/g,br))+
detail('范式',Table([ZLR('名称 内容 性质')],[
	
	ZLR('析取范式____基本积之和','','____'),
	ZLR('合取范式____基本和之积','','____'),
	ZLR('最简析取范式____运算符最少____'+kxA(['最简析取范式：可用卡诺图、奎因——麦克劳斯基方法']),'','____'),
	ZLR('最简合取范式____运算符最少____'+kxA(['最简合取范式：可用卡诺图']),'','____'),
	ZLR('主析取范式____'+kxA(['极小项之和','n个变元，则2^n个极小项，',msups([2,2,'n'],'')+'个主合取范式']),'','____'),
	ZLR('主合取范式____'+kxA(['极大项之积','n个变元，则2^n个极大项，',msups([2,2,'n'],'')+'个主析取范式']),'','____'),
	ZLR('主等值范式____'+kxA(['极大项之等值↔','主析取∨与主异或⊕可相互转写','主合取∧与主等值↔可相互转写']),'','____'),
	ZLR('主异或范式____'+kxA(['极小项之异或⊕','主析取∨与主异或⊕可相互转写','主合取∧与主等值↔可相互转写']),'','____'),
	ZLR('全功能连接词集合____'+kxA(['\\{∧∨¬\\}、\\{∧¬\\}、\\{∨¬\\}、\\{∧⊕¬\\}、\\{∨↔¬\\}、',
		'\\{与非↑'+kbox('Sheffer记号')+'\\}、\\{或非↓'+kbox('Peirce箭头')+'\\}、',
		'\\{→¬\\}、\\{↛¬\\}、\\{→F\\}、\\{↛T\\}'])+'____'+
		kxA(['↑(↓)可交换但不可结合','⊕(↛)可交换，可结合','∧（∨）在⊕（↛）上可分配']),'','____'),
	ZLR('前束范式____'+kxA(['量词前无否定，','量词之间无括号，','辖域延伸至整个公式']),'','____'),


],'wiki').replace(/\n/g,br))+
detail('含量词谓词公式',Table([ZLR('公式1 关系 公式2 性质')],[
	ZLR('∀xA⇔A ⇔ ∃xA⇔A 不含变元'),
	ZLR('∀xP(x) ⇒ P(y) '+kxA(['全称指定规则US','全称推广规则UG,','(A⇒P(x))⇒(A⇒∀xP(x))'])),
	ZLR('P(y) ⇒ ∃xP(x) '+kxA(['存在推广规则EG','存在指定规则ES','∃xP(x)⇒P(y)'])),
	ZLR('∀x¬P(x) ⇔ ¬(∃xP(x)) 量词否定'),
	ZLR('∃x¬P(x) ⇔ ¬(∀xP(x))'),
	ZLR('∀xP(x) ⇒ ∃xP(x) Q_1,Q_2'),
	ZLR('∀xA(x)∨P ⇔ ∀x(A(x)∨P) 量词辖域的扩张'),
	ZLR('∀xA(x)∧P ⇔ ∀x(A(x)∧P)'),
	ZLR('∃xA(x)∨P ⇔ ∃x(A(x)∨P)'),
	ZLR('∃xA(x)∧P ⇔ ∃x(A(x)∧P)'),
	ZLR('∀x(A(x)∧B(x)) ⇔ ∀xA(x)∧∀xB(x) 量词辖域的收缩'),
	ZLR('∃x(A(x)∨B(x)) ⇔ ∃xA(x)∨∃xB(x)'),
	ZLR('∃x(A(x)∧B(x)) ⇒ ∃xA(x)∧∃xB(x) 量词分配'),
	ZLR('∀xA(x)∨∀xB(x) ⇒ ∀x(A(x)∨B(x))'),
	ZLR('∀xA(x)→B ⇔ ∃x(A(x)→B)'),
	ZLR('∃xA(x)→B ⇔ ∀x(A(x)→B)'),
	ZLR('A→∀xB(x) ⇔ ∀x(A→B(x))'),
	ZLR('A→∃xB(x) ⇔ ∃x(A→B(x))'),
	ZLR('∃x(A(x)→B(x)) ⇔ ∀xA(x)→∃xB(x)'),
	ZLR('∃xA(x)→∀xB(x) ⇒ ∀x(A(x)→B(x))'),
	ZLR('∀x∀yP(x,y) ⇔ ∀y∀xP(x,y) 多个量词（注意下方公式的传递性）'),
	ZLR('∀x∀yP(x,y) ⇒ ∃y∀xP(x,y)'),
	ZLR('∃y∀xP(x,y) ⇒ ∀x∃yP(x,y)'),
	ZLR('∀x∃yP(x,y) ⇒ ∃y∃xP(x,y)'),
	ZLR('∃x∃yP(x,y) ⇔ ∃y∃xP(x,y)')

],'wiki').replace(/\n/g,br))

);