Ext.define('Справочники.СотрудникиОрганизаций.ФормаВыбораФизлица',
	{
	extend: 'Ext.window.Window',
	height: 209,width: 522,
	iconCls: 'bogus',
	title: 'Список физлиц с похожими данными',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:29px;width:506px;height:96px;',
			height: 96,width: 506,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Наименование',
				},
				{
					text:'ДатаРождения',
				},
				{
					text:'ИНН',
				},
				{
					text:'СтраховойНомерПФР',
				},
			]
		},
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