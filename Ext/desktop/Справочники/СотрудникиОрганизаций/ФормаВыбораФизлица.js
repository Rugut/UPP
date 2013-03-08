Ext.define('Справочники.СотрудникиОрганизаций.ФормаВыбораФизлица',
	{
	extend: 'Ext.window.Window',
	height: 209,width: 522,
	iconCls: 'bogus',
	title: 'Список физлиц с похожими данными',
	
	items: [
		{
			xtype: 'button',
			name: 'ВвестиНового',
			text: 'Создать новое физлицо',
			style: 'position:absolute;left:33px;top:173px;width:180px;height:28px;',
		},
		{
			xtype: 'button',
			name: 'Выбрать',
			text: 'Выбрать отмеченное в списке',
			style: 'position:absolute;left:299px;top:173px;width:180px;height:28px;',
		},
	]
});