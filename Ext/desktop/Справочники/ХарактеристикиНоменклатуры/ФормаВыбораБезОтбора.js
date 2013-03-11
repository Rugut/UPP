Ext.define('Справочники.ХарактеристикиНоменклатуры.ФормаВыбораБезОтбора',
	{
	extend: 'Ext.window.Window',
	height: 406,width: 488,
	iconCls: 'bogus',
	title: 'Выбор характеристики номенклатуры',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:225px;width:472px;height:172px;',
			height: 172,width: 472,
			columns:
			[
				{
					text:'Свойство',
				},
				{
					text:'Значение',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:29px;width:472px;height:172px;',
			height: 172,width: 472,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Наименование',
				},
				{
					text:'ОКП',
				},
				{
					text:'Владелец',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:488px;height:25px;',
			items:
			[
				{
					text:'Действие10',
				},
				{
					text:'Разделитель5',
				},
			]
		},
	]
});