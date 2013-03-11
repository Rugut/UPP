Ext.define('Справочники.КатегорииОбъектов.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 464,
	iconCls: 'bogus',
	title: 'Категории объектов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:448px;height:280px;',
			height: 280,width: 448,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Наименование',
				},
				{
					text:'НазначениеКатегории',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:464px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});