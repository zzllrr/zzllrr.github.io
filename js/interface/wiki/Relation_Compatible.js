/*
 * zzllrr Mather
 * Copyright by zzllrr since 2013. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 */

wiki['Compatible Relation']=Kx(

detail('相容关系',Table([ZLR('名称 记法 定义 性质')],[
	ZLR('相容类____C____子集（任意两元素满足相容关系）____','','____'),
	ZLR('最大相容类____C_r____最大子集（任意两元素满足相容关系）____'+
		'最大相容类 ⇔'+piece(['孤立节点集合','最大完全多边形的顶点集合','边（非完全多边形边）的端点集合'])+'____','','____'),
	ZLR('完全覆盖____C_{r(A)}____最大相容类的集合____'+
		'完全覆盖 ⇔ 与相容关系一一对应'+
		'完全覆盖 ⇒ 唯一'+
		'覆盖 ⇒ 不唯一____','','____')

],'wiki').replace(/\n/g,br))


);